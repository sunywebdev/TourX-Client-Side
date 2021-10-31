import axios from "axios";
import React from "react";
import { FloatingLabel, Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddSlide = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		console.log(data);
		axios
			.post("https://morning-garden-49984.herokuapp.com/slides", data)
			.then(function (response) {
				alert("Successfully added");
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<Container>
			<h2 className='fw-bold py-4 text-color-1'>Add a new Slide</h2>
			<Form className='col-md-7 mx-auto' onSubmit={handleSubmit(onSubmit)}>
				<FloatingLabel controlId='floatingInput' label='text' className='mb-3'>
					<Form.Control
						className='border-11'
						type='text'
						placeholder='text'
						{...register("text", { required: true })}
					/>
				</FloatingLabel>
				<FloatingLabel
					controlId='floatingInput'
					label='subText'
					className='mb-3'>
					<Form.Control
						className='border-11'
						type='text'
						placeholder='subText'
						{...register("subText", { required: true })}
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
				<Button type='submit' className='my-2 mx-1 bg-1 border-11'>
					Add Slide
				</Button>
			</Form>
		</Container>
	);
};

export default AddSlide;
