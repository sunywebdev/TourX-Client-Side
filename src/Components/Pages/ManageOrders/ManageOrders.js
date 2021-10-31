import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Form, Table, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../context/useAuth";

const ManageOrders = () => {
	const { user } = useAuth();
	const [packages, setPackages] = useState([]);
	const [state, setState] = useState([]);
	const [states, setStates] = useState([]);
	useEffect(() => {
		fetch(`https://morning-garden-49984.herokuapp.com/pending`)
			.then((res) => res.json())
			.then((data) => setPackages(data));
	}, [state, states]);
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		axios
			.put(
				`https://morning-garden-49984.herokuapp.com/pendingconfirm/${data?.id}`,
				{
					orderStatus: "Confirm",
				},
			)
			.then(function (response) {
				alert("Successfully Updated");
				setState(data);
			})
			.catch(function (error) {
				console.log(error);
			});
	};
	const deleted = (id) => {
		const proceed = window.confirm("Are you sure you want to delete");
		if (proceed) {
			axios
				.delete(`https://morning-garden-49984.herokuapp.com/delete/${id}`)
				.then(function (response) {
					alert("Successfully deleted");
					setStates(id);
				})
				.catch(function (error) {
					console.log(error);
				});
		}
	};
	let key = 1;
	return (
		<Container className='mt-5'>
			<div className='section-head my-4'>
				<h2 className='text-color-1 fw-bold'>Manage Orders</h2>
			</div>
			<Table className='align-middle'>
				<thead>
					<tr className='text-color-1'>
						<th>#</th>
						<th>Name</th>
						<th>Going To</th>
						<th>Tour Status</th>
						{user?.email === "admin@tourx.com" && <th>Delete(Admin)</th>}
					</tr>
				</thead>
				<tbody>
					{packages?.map((package1) => (
						<tr>
							<td>{key++}</td>
							<td>{package1?.name}</td>
							<td>{package1?.productPlace}</td>
							<td>
								{package1?.orderStatus === "Pending" ? (
									<>
										{user?.uid === package1?.userId ? (
											<Form
												onSubmit={handleSubmit(onSubmit)}
												className='align-middle'>
												<span className='align-middle'>
													<input
														style={{
															marginTop: "0.4rem",
															width: "1.5rem",
															height: "1.5rem",
														}}
														type='checkbox'
														{...register("id")}
														value={package1?._id}
													/>
												</span>
												<span>
													<Button
														className='py-0 ms-2 bg-1 border-11'
														type='submit'>
														Confirm
													</Button>
												</span>
											</Form>
										) : (
											<h6> Pending </h6>
										)}
									</>
								) : (
									<h6> Confirmed </h6>
								)}
							</td>
							{user?.email === "admin@tourx.com" && (
								<td>
									<Button
										onClick={() => deleted(package1?._id)}
										className='py-0 ms-2 bg-1 border-11'>
										Delete
									</Button>
								</td>
							)}
						</tr>
					))}
				</tbody>
			</Table>
		</Container>
	);
};

export default ManageOrders;
