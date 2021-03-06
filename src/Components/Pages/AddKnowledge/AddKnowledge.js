import axios from "axios";
import React from "react";
import { FloatingLabel, Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddPackage = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		axios
			.post("https://morning-garden-49984.herokuapp.com/knowledge", data)
			.then(function (response) {
				alert("Successfully added");
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<Container>
			<h2 className='fw-bold py-4 text-color-1'>Add a new Knowledge</h2>
			<Form className='col-md-7 mx-auto' onSubmit={handleSubmit(onSubmit)}>
				<FloatingLabel
					controlId='floatingInput'
					label='Knowledge ID'
					className='mb-3'>
					<Form.Control
						className='border-11'
						type='text'
						placeholder='Knowledge ID'
						{...register("knowledgeId", { required: true })}
					/>
				</FloatingLabel>
				<FloatingLabel
					controlId='floatingInput'
					label='Knowledge Photo link'
					className='mb-3'>
					<Form.Control
						className='border-11'
						type='text'
						placeholder='Knowledge Photo link'
						{...register("photoLink", { required: true })}
					/>
				</FloatingLabel>
				<FloatingLabel
					controlId='floatingInput'
					label='Knowledge Title'
					className='mb-3'>
					<Form.Control
						className='border-11'
						type='text'
						placeholder='Knowledge Title'
						{...register("title", { required: true })}
					/>
				</FloatingLabel>

				<FloatingLabel
					controlId='floatingTextarea2'
					label='Knowledge Description'
					className='mb-3'>
					<Form.Control
						className='border-11'
						type='text'
						as='textarea'
						placeholder='Knowledge Description'
						style={{ height: "100px" }}
						{...register("description", { required: true })}
					/>
				</FloatingLabel>
				<Button type='submit' className='my-2 mx-1 bg-1 border-11'>
					Add Knowledge
				</Button>
			</Form>
		</Container>
	);
};

export default AddPackage;
