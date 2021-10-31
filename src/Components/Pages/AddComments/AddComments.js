import axios from "axios";
import React from "react";
import { FloatingLabel, Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../context/useAuth";

const AddPackage = () => {
	const { user } = useAuth();
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		console.log(data);
		axios
			.post("https://morning-garden-49984.herokuapp.com/comments", data)
			.then(function (response) {
				alert("Successfully added");
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<Container>
			<h2 className='fw-bold py-4 text-color-1'>Add a new Comment</h2>
			<Form className='col-md-7 mx-auto' onSubmit={handleSubmit(onSubmit)}>
				<FloatingLabel
					controlId='floatingInput'
					label='User ID'
					className='mb-3 '>
					<Form.Control
						className='border-11'
						defaultValue={user?.uid}
						type='text'
						placeholder='User ID'
						{...register("userId", { required: true })}
					/>
				</FloatingLabel>
				<FloatingLabel
					controlId='floatingInput'
					label='User Photo link'
					className='mb-3'>
					<Form.Control
						className='border-11'
						type='text'
						placeholder='User Photo link'
						{...register("photoLink", { required: true })}
					/>
				</FloatingLabel>
				<FloatingLabel
					controlId='floatingInput'
					label='User Name'
					className='mb-3'>
					<Form.Control
						className='border-11'
						type='text'
						placeholder='User Name'
						{...register("userName", { required: true })}
					/>
				</FloatingLabel>
				<FloatingLabel controlId='floatingInput' label='Star' className='mb-3'>
					<Form.Control
						className='border-11'
						type='number'
						placeholder='Star'
						{...register("star", { required: true })}
					/>
				</FloatingLabel>
				<FloatingLabel
					controlId='floatingTextarea2'
					label='Comment'
					className='mb-3'>
					<Form.Control
						className='border-11'
						type='text'
						as='textarea'
						placeholder='Comment'
						style={{ height: "100px" }}
						{...register("comment", { required: true })}
					/>
				</FloatingLabel>
				<Button type='submit' className='my-2 mx-1 bg-1 border-11'>
					Add Comment
				</Button>
			</Form>
		</Container>
	);
};

export default AddPackage;
