import axios from "axios";
import React from "react";
import { FloatingLabel, Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddPackage = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		axios
			.post("https://morning-garden-49984.herokuapp.com/packages", data)
			.then(function (response) {
				alert("Successfully added");
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<Container>
			<h2 className='fw-bold py-4 text-color-1'>Add a new Package</h2>
			<Form className='col-md-7 mx-auto' onSubmit={handleSubmit(onSubmit)}>
				<FloatingLabel
					controlId='floatingInput'
					label='Product ID'
					className='mb-3'>
					<Form.Control
						className='border-11'
						type='text'
						placeholder='Product ID'
						{...register("productId", { required: true })}
					/>
				</FloatingLabel>
				<FloatingLabel controlId='floatingInput' label='Place' className='mb-3'>
					<Form.Control
						className='border-11'
						type='text'
						placeholder='Place'
						{...register("place", { required: true })}
					/>
				</FloatingLabel>
				<FloatingLabel
					controlId='floatingInput'
					label='Product Photo URL'
					className='mb-3'>
					<Form.Control
						className='border-11'
						type='text'
						placeholder='Product Photo URL'
						{...register("photo", { required: true })}
					/>
				</FloatingLabel>
				<FloatingLabel
					controlId='floatingInput'
					label='Product Name'
					className='mb-3'>
					<Form.Control
						className='border-11'
						type='text'
						placeholder='Product Name'
						{...register("productName", { required: true })}
					/>
				</FloatingLabel>
				<FloatingLabel
					controlId='floatingInput'
					label='Product Price'
					className='mb-3'>
					<Form.Control
						className='border-11'
						type='number'
						placeholder='Product Price'
						{...register("productPrice", { required: true })}
					/>
				</FloatingLabel>
				<FloatingLabel
					controlId='floatingInput'
					label='Product Duration'
					className='mb-3'>
					<Form.Control
						className='border-11'
						type='text'
						placeholder='Product Duration'
						{...register("productDuration", { required: true })}
					/>
				</FloatingLabel>
				<FloatingLabel
					controlId='floatingInput'
					label='Product Review Avrage'
					className='mb-3'>
					<Form.Control
						className='border-11'
						type='number'
						placeholder='Product Review Avrage'
						{...register("productReviewAvg", { required: true })}
					/>
				</FloatingLabel>
				<FloatingLabel
					controlId='floatingInput'
					label='Product Review Count'
					className='mb-3'>
					<Form.Control
						className='border-11'
						type='text'
						placeholder='Product Review Count'
						{...register("productReviewCount", { required: true })}
					/>
				</FloatingLabel>
				<FloatingLabel
					controlId='floatingTextarea2'
					label='Product Description'
					className='mb-3'>
					<Form.Control
						className='border-11'
						type='text'
						as='textarea'
						placeholder='Product Description'
						style={{ height: "100px" }}
						{...register("description", { required: true })}
					/>
				</FloatingLabel>
				<Button type='submit' className='my-2 mx-1 bg-1 border-11'>
					Add Product
				</Button>
			</Form>
		</Container>
	);
};

export default AddPackage;
