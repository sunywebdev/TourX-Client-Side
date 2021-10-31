import axios from "axios";
import React, { useEffect, useState } from "react";
import { FloatingLabel, Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useLocation, useParams } from "react-router";
import useAuth from "../../../context/useAuth";

const OrderPage = () => {
	const { user } = useAuth();
	const { productId } = useParams();
	const location = useLocation();
	const history = useHistory();
	const [packages, setPackages] = useState([]);
	console.log(productId);
	useEffect(() => {
		fetch(`http://localhost:5000/pending/${productId}`)
			.then((res) => res.json())
			.then((data) => setPackages(data));
	}, []);

	console.log(packages);
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		console.log(data);
		axios
			.put(`http://localhost:5000/pendings/${packages?._id}`, data)
			.then(function (response) {
				alert("Successfully Updated");
				history.push(`/manageorders`);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<Container>
			<h2 className='fw-bold py-4'>Confirm Order</h2>
			<div className='row gy-4'>
				<div className='col-md-6'>
					<h2>Update User Info</h2>
					<Form
						className='col-md-7 mx-auto w-100'
						onSubmit={handleSubmit(onSubmit)}>
						<FloatingLabel
							controlId='floatingInput'
							label='Name'
							className='mb-3'>
							<Form.Control
								value={user?.displayName}
								type='text'
								placeholder='John Doe'
							/>
						</FloatingLabel>
						<FloatingLabel
							controlId='floatingInput'
							label='Enter Your Email'
							className='mb-3 text-1'>
							<Form.Control
								value={user?.email}
								className='border-11 text-1'
								type='email'
								placeholder='Enter Your Email'
							/>
						</FloatingLabel>
						<FloatingLabel
							controlId='floatingInput'
							label='Phone number'
							className='mb-3'>
							<Form.Control
								defaultValue={packages?.phoneNumber}
								type='number'
								placeholder='Phone number'
								{...register("phoneNumber", { required: true })}
							/>
						</FloatingLabel>
						<FloatingLabel
							controlId='floatingInput'
							label='Full Address'
							className='mb-3'>
							<Form.Control
								defaultValue={packages?.address}
								as='textarea'
								placeholder='Full Address'
								style={{ height: "70px" }}
								{...register("address", { required: true })}
							/>
						</FloatingLabel>
						<FloatingLabel
							controlId='floatingTextarea2'
							label='Special Requirements'>
							<Form.Control
								defaultValue={packages?.specialRequirements}
								as='textarea'
								placeholder='Special Requirements'
								style={{ height: "130px" }}
								{...register("specialRequirements", { required: true })}
								className='mb-3'
							/>
						</FloatingLabel>
						<Button type='submit'>Update And Confirm</Button>
					</Form>
				</div>
				<div className='col-md-6'>
					<h2>Tour Details</h2>
					<Form className='col-md-7 mx-auto w-100'>
						<FloatingLabel
							controlId='floatingInput'
							label='Tour ID'
							className='mb-3'>
							<Form.Control
								value={packages?.productId}
								type='text'
								placeholder='Tour ID'
							/>
						</FloatingLabel>
						<FloatingLabel
							controlId='floatingInput'
							label='Tour Date'
							className='mb-3'>
							<Form.Control
								value={packages?.tourDate}
								type='text'
								placeholder='Tour Date'
							/>
						</FloatingLabel>
						<FloatingLabel
							controlId='floatingInput'
							label='Tour Name'
							className='mb-3'>
							<Form.Control
								value={packages?.productName}
								type='text'
								placeholder='Tour Name'
							/>
						</FloatingLabel>
						<FloatingLabel
							controlId='floatingInput'
							label='Place'
							className='mb-3'>
							<Form.Control
								value={packages?.productPlace}
								type='text'
								placeholder='Place'
							/>
						</FloatingLabel>

						<FloatingLabel
							controlId='floatingInput'
							label='Tour Price'
							className='mb-3'>
							<Form.Control
								value={packages?.productPrice}
								type='number'
								placeholder='Tour Price'
							/>
						</FloatingLabel>
						<FloatingLabel
							controlId='floatingInput'
							label='Total Childs'
							className='mb-3'>
							<Form.Control
								value={packages?.childQuantity}
								type='number'
								placeholder='Total Childs'
							/>
						</FloatingLabel>
						<FloatingLabel
							controlId='floatingInput'
							label='Total Audlts'
							className='mb-3'>
							<Form.Control
								value={packages?.adultQuantity}
								type='number'
								placeholder='Total Audlts'
							/>
						</FloatingLabel>
						<FloatingLabel
							controlId='floatingInput'
							label='Tour Duration'
							className='mb-3'>
							<Form.Control
								value={packages?.productDuration}
								type='text'
								placeholder='Tour Duration'
							/>
						</FloatingLabel>
					</Form>
				</div>
			</div>
		</Container>
	);
};

export default OrderPage;
