import React, { useEffect, useState } from "react";
import { Carousel, Placeholder } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
	const [slides, setSlides] = useState([]);
	useEffect(() => {
		fetch(`https://morning-garden-49984.herokuapp.com/slides`)
			.then((res) => res.json())
			.then((data) => setSlides(data));
	}, []);
	return (
		<div>
			{slides.length > 0 ? (
				<Carousel fade>
					{slides?.map((slide) => (
						<Carousel.Item
							key={slide?._id}
							className='carousel  position-relative'>
							<img className='d-block w-100' src={slide?.photo} alt='' />
							<Carousel.Caption className='position-absolute '>
								<div className='text-light'>
									<h1 className='display-2 fw-bold'>{slide?.text}</h1>
									<h5>{slide?.subText}</h5>
									<p className='mt-4'>
										<a className='btn btn-lg bg-1 text-light' href='#Packages'>
											Our Packages
										</a>
									</p>
								</div>
							</Carousel.Caption>
						</Carousel.Item>
					))}
				</Carousel>
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
		</div>
	);
};

export default Banner;
