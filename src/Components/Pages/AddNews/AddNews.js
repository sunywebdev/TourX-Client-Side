import axios from "axios";
import React from "react";
import { FloatingLabel, Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddPackage = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		console.log(data);
		axios
			.post("https://morning-garden-49984.herokuapp.com/news", data)
			.then(function (response) {
				alert("Successfully added");
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<Container>
			<h2 className='fw-bold py-4 text-color-1'>Add a new News</h2>
			<Form className='col-md-7 mx-auto' onSubmit={handleSubmit(onSubmit)}>
				<FloatingLabel
					controlId='floatingInput'
					label='News ID'
					className='mb-3'>
					<Form.Control
						className='border-11'
						type='text'
						placeholder='News ID'
						{...register("newsId", { required: true })}
					/>
				</FloatingLabel>
				<FloatingLabel
					controlId='floatingInput'
					label='Photo URL'
					className='mb-3'>
					<Form.Control
						className='border-11'
						type='text'
						placeholder='Photo URL'
						{...register("photourl", { required: true })}
					/>
				</FloatingLabel>
				<FloatingLabel
					controlId='floatingInput'
					label='News Author'
					className='mb-3'>
					<Form.Control
						className='border-11'
						type='text'
						placeholder='News Author'
						{...register("author", { required: true })}
					/>
				</FloatingLabel>
				<FloatingLabel
					controlId='floatingInput'
					label='News Headline'
					className='mb-3'>
					<Form.Control
						className='border-11'
						type='text'
						placeholder='News Headline'
						{...register("headline", { required: true })}
					/>
				</FloatingLabel>
				<FloatingLabel
					controlId='floatingInput'
					label='News Date'
					className='mb-3'>
					<Form.Control
						className='border-11'
						type='date'
						placeholder='News Date'
						{...register("date", { required: true })}
					/>
				</FloatingLabel>
				<FloatingLabel
					controlId='floatingInput'
					label='News Catagory'
					className='mb-3'>
					<Form.Control
						className='border-11'
						type='text'
						placeholder='News Catagory'
						{...register("folder", { required: true })}
					/>
				</FloatingLabel>
				<FloatingLabel
					controlId='floatingTextarea2'
					label='News Description'
					className='mb-3'>
					<Form.Control
						className='border-11'
						type='text'
						as='textarea'
						placeholder='News Description'
						style={{ height: "100px" }}
						{...register("description", { required: true })}
					/>
				</FloatingLabel>
				<Button type='submit' className='my-2 mx-1 bg-1 border-11'>
					Add News
				</Button>
			</Form>
		</Container>
	);
};

export default AddPackage;
