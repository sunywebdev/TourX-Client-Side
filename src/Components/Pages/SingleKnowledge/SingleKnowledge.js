import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const SingleKnowledge = () => {
	const { knowledgeId } = useParams();
	const [knowledge, setKnowledge] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:5000/knowledge/${knowledgeId}`)
			.then((res) => res.json())
			.then((data) => setKnowledge(data));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<Container className='mt-2 text-color-1'>
			<h2 className='fw-bold py-3 mt-2'>{knowledge?.title}</h2>
			<div className='clearfix'>
				<img
					src={knowledge?.photoLink}
					className='col-md-4 mb-2 mx-md-3 rounded float-sm-start w-50'
					alt='...'
				/>
				<p className='text-secondary text-start'>{knowledge?.description}</p>
			</div>

			<Link to='/' className='text-decoration-none text-light'>
				<Button className='my-4 px-5 bg-1 border-11'>
					<i className='fas fa-arrow-circle-left me-3'></i>Back To Home
				</Button>
			</Link>
		</Container>
	);
};

export default SingleKnowledge;
