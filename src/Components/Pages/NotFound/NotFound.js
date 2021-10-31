import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<Container>
			<div className='mx-auto py-5 my-5'>
				<h2 className='fs-1 fw-bold mt-5 text-color-1'>404 Not Found</h2>
				<p className='mb-1 text-color-1 fw-bold'>
					Make sure you entered a correct url
				</p>
			</div>
			<Link to='/' className='text-decoration-none text-light'>
				<Button className='my-5 px-5 bg-1 border-11'>
					<i className='fas fa-arrow-circle-left me-3'></i>Back To Home
				</Button>
			</Link>
		</Container>
	);
};

export default NotFound;
