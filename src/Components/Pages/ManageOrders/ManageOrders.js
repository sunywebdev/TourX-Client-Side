import axios from "axios";
import React, { useEffect, useState } from "react";
import { Accordion, Container, Form, Table, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../context/useAuth";

const ManageOrders = () => {
	const { user } = useAuth();
	const [packages, setPackages] = useState([]);
	useEffect(() => {
		fetch(`https://morning-garden-49984.herokuapp.com/pending`)
			.then((res) => res.json())
			.then((data) => setPackages(data));
	}, []);
	/* 	const details = {
		adultQuantity: packages?.adultQuantity,
		childQuantity: packages?.childQuantity,
		userId: user?.uid,
		name: user?.displayName,
		email: user?.email,
		phoneNumber: packages?.phoneNumber,
		address: packages?.address,
		specialRequirements: packages?.specialRequirements,
		productId: packages?.productId,
		productName: packages?.productName,
		productPlace: packages?.place,
		productDuration: packages?.productDuration,
		productPrice: packages?.productPrice,
		tourDate: packages?.tourDate,
		orderTime: packages?.orderTime,
        orderStatus: "Pending",
	};
	console.log(details); */
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		console.log(data);
		axios
			.put(
				`https://morning-garden-49984.herokuapp.com/pendingconfirm/${data?.id}`,
				{
					orderStatus: "Confirm",
				},
			)
			.then(function (response) {
				alert("Successfully Updated");
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
				<h2 className='text-color-1'>Manage Orders</h2>
			</div>
			<Table striped bordered hover className='align-middle'>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Going To</th>
						<th>Tour Status</th>
						{user?.email === "suny.w68@gmail.com" && <th>Delete(Admin)</th>}
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
													<Button className='py-0 ms-2' type='submit'>
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
							{user?.email === "suny.w68@gmail.com" && (
								<td>
									<Button
										onClick={() => deleted(package1?._id)}
										className='py-0 ms-2'>
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
