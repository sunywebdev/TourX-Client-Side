import React, { useEffect, useState } from "react";
import { Container, Placeholder, Button } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const Reviews = () => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		speed: 700,
		autoplaySpeed: 4000,
		cssEase: "linear",
		adaptiveHeight: false,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					adaptiveHeight: false,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
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

	const [comments, setComments] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:5000/comments`)
			.then((res) => res.json())
			.then((data) => setComments(data));
	}, []);
	return (
		<Container className='mt-5 overflow-hidden'>
			<div className='section-head my-4'>
				<h2 className='text-color-1'>Our Traveller Say</h2>
				<h5>What Our Traveller Say About Us</h5>
			</div>
			{comments.length > 0 ? (
				<Slider {...settings}>
					{comments.map((comment) => (
						<div key={comment?._id} className='mb-3 p-2 p-md-3 '>
							<div
								className='p-4 border border-2'
								style={{ borderRadius: "19px" }}>
								<div className='d-flex justify-content-between align-items-center my-2'>
									<div>
										<img
											src={comment?.photoLink}
											alt=''
											className='rounded-circle border border-5 border-11'
											style={{ width: "95px" }}
										/>
									</div>
									<div className='rating'>
										<h5 className='text-1 fw-bold'>{comment?.userName}</h5>
										<Rating
											className='fs-6 text-warning text-start'
											emptySymbol='far fa-star '
											fullSymbol='fas fa-star '
											initialRating={comment?.star}
											readonly
										/>
									</div>
									<div>
										<i className='fas fa-quote-right fa-3x'></i>
									</div>
								</div>
								<div className='text-start'>
									<p>{comment?.comment}</p>
								</div>
							</div>
						</div>
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
			<Link to='/addcomments' className='text-decoration-none text-light'>
				<Button className='my-4 px-5 bg-1 border-11'>
					Share Your Experiance
				</Button>
			</Link>
		</Container>
	);
};

export default Reviews;
