import axios from "axios";
import React, { useEffect, useState } from "react";
import { Accordion, Container, Form, Table, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../context/useAuth";

const Orders = () => {
	const { user } = useAuth();
	const [packages, setPackages] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:5000/confirmed/${user?.uid}`)
			.then((res) => res.json())
			.then((data) => setPackages(data));
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
	const deleted = (id) => {
		const proceed = window.confirm("Are you sure you want to delete");
		if (proceed) {
			axios
				.delete(`http://localhost:5000/delete/${id}`)
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
											className='py-0 ms-2'>
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
