import React, { useEffect, useState } from "react";
import { Card, Col, Button, Container, Placeholder } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const DoYouKnow = () => {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		speed: 700,
		autoplaySpeed: 4000,
		cssEase: "linear",
		adaptiveHeight: true,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					adaptiveHeight: true,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					adaptiveHeight: true,
				},
			},
		],
	};
	const [knowledges, setKnowledges] = useState([]);
	useEffect(() => {
		fetch(`https://morning-garden-49984.herokuapp.com/knowledge`)
			.then((res) => res.json())
			.then((data) => setKnowledges(data));
	}, []);

	return (
		<Container className='mt-5  overflow-hidden'>
			<div className='section-head m-4'>
				<h2 className='text-color-1'>DID YOU KNOW?</h2>
				<h5>
					What are the things you should always do on a trip? Plan a trip with
					us and we will tell you all about it.
				</h5>
			</div>
			{knowledges.length > 0 ? (
				<Slider {...settings}>
					{knowledges?.map((knowledge) => (
						<Col key={knowledge?._id}>
							<Card style={{ maxWidth: "18rem" }} className='border-0  mx-auto'>
								<Card.Img
									style={{ maxWidth: "200px" }}
									variant='top'
									src={knowledge?.photoLink}
									className='rounded-circle mx-auto'
								/>
								<Card.Body className='text-center'>
									<Card.Title className='text-color-1'>
										{(knowledge?.title).slice(0, 40)}....
									</Card.Title>
									<Card.Text>{(knowledge?.description).slice(0, 60)}</Card.Text>
									<Button variant='primary' className='bg-1 border-0'>
										<Link
											className='text-decoration-none text-light'
											to={`/knowledges/${knowledge?._id}`}>
											Read More
										</Link>
									</Button>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Slider>
			) : (
				<>
					<Placeholder as='p' animation='glow'>
						<Placeholder xs={12} />
					</Placeholder>
					<Placeholder as='p' animation='glow'>
						<Placeholder xs={12} />
					</Placeholder>
				</>
			)}
		</Container>
	);
};

export default DoYouKnow;
