import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const SingleKnowledge = () => {
	const { knowledgeId } = useParams();
	const [knowledge, setKnowledge] = useState([]);
	useEffect(() => {
		fetch(`https://morning-garden-49984.herokuapp.com/knowledge/${knowledgeId}`)
			.then((res) => res.json())
			.then((data) => setKnowledge(data));
	}, []);
	console.log(knowledgeId);
	return (
		<Container className=' mt-2'>
			<img
				variant='top'
				src={knowledge?.photoLink}
				alt=''
				className='w-100'
				style={{ maxHeight: "80vh" }}
			/>
			<h2 className='mt-4'>{knowledge?.title}</h2>
			<p>{knowledge?.description}</p>
			<Link to='/' className='text-decoration-none text-light'>
				<Button className='my-4 px-5 bg-1 border-11'>
					<i className='fas fa-arrow-circle-left me-3'></i>Back To Home
				</Button>
			</Link>
		</Container>
	);
};

export default SingleKnowledge;
