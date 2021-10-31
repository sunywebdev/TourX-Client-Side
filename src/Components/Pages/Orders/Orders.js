import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import useAuth from "../../../context/useAuth";

const Orders = () => {
	const { user } = useAuth();
	const [packages, setPackages] = useState([]);
	const [state, setState] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:5000/confirmed/${user?.uid}`)
			.then((res) => res.json())
			.then((data) => setPackages(data));
	}, [state, user?.uid]);

	const deleted = (id) => {
		const proceed = window.confirm("Are you sure you want to delete");
		if (proceed) {
			axios
				.delete(`http://localhost:5000/delete/${id}`)
				.then(function (response) {
					alert("Successfully deleted");
					setState(id);
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
						<th>Delete Order</th>
					</tr>
				</thead>
				<tbody>
					{packages?.map((package1) => (
						<>
							{package1.orderStatus === "Confirm" ? (
								<tr>
									<td>{key++}</td>
									<td>{package1?.name}</td>
									<td>{package1?.productPlace}</td>
									<td>
										<Button
											onClick={() => deleted(package1?._id)}
											className='py-0 ms-2 bg-1 border-11'>
											Delete
										</Button>
									</td>
								</tr>
							) : (
								""
							)}
						</>
					))}
				</tbody>
			</Table>
		</Container>
	);
};

export default Orders;
