import React, { useEffect, useState } from "react";
import {
	Card,
	Col,
	Container,
	ListGroup,
	Row,
	Button,
	Placeholder,
} from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const Package = () => {
	const [packages, setPackages] = useState([]);
	useEffect(() => {
		fetch(`https://morning-garden-49984.herokuapp.com/packages`)
			.then((res) => res.json())
			.then((data) => setPackages(data));
	}, []);
	console.log(packages);
	return (
		<Container className='mt-5' id='Packages'>
			<div className='section-head my-4'>
				<h2 className='text-color-1'>Choose Your Package</h2>
				<h5>Select Your best Package For Your Travel</h5>
			</div>

			{packages.length > 0 ? (
				<Row xs={1} md={2} lg={4} className='g-3'>
					{packages?.map((package1) => (
						<Col key={package1?._id}>
							<Card
								className=' position-relative pCard'
								style={{ borderRadius: "15px" }}>
								<span className='position-absolute top-0 start-0 mt-2 ms-2 badge rounded-pill bg-danger'>
									Featured
								</span>
								<span className='position-absolute top-0 end-0 mt-2 me-2 badge rounded-pill bg-danger'>
									-20%
								</span>
								<Card.Img
									variant='top'
									src={package1?.photo}
									style={{ borderRadius: "15px 15px 0 0" }}
								/>
								<Card.Body className='text-start'>
									<p>
										<i className='fas fa-map-marker-alt'></i> {package1?.place}
									</p>
									<h5>{(package1?.productName).slice(0, 40)}...</h5>
									<p>
										<Rating
											initialRating={package1?.productReviewAvg}
											emptySymbol='far fa-star '
											fullSymbol='fas fa-star '
											readonly
										/>
										&nbsp;
										<span> {package1?.productReviewCount} Reviews</span>
									</p>
									<ListGroup
										horizontal
										className='justify-content-between align-items-center'>
										<ListGroup.Item className='border-0 p-0'>
											<i className='far fa-clock'></i>{" "}
											{package1?.productDuration} Days
										</ListGroup.Item>
										<ListGroup.Item className='border-0 p-0'>
											<i className='fas fa-bolt'></i> from&nbsp;
											<span className='fs-4 fw-bold'>
												${package1?.productPrice}
											</span>
										</ListGroup.Item>
									</ListGroup>
								</Card.Body>
								<Button
									className='w-100'
									style={{ borderRadius: "0 0 15px 15px " }}>
									<Link to={`/packages/${package1?._id}`}>Book Now</Link>
								</Button>
							</Card>
						</Col>
					))}
				</Row>
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

export default Package;
