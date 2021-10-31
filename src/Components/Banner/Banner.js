import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
	return (
		<div>
			<Carousel fade>
				{Array.from({ length: 5 }).map((_, idx) => (
					<Carousel.Item className='carousel  position-relative'>
						<img
							className='d-block w-100'
							src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/enjoying-the-view-royalty-free-image-1582838254.jpg'
							alt='First slide'
						/>
						<Carousel.Caption className='position-absolute top-50 '>
							<div className='text-light'>
								<h1 className='display-1 fw-bold'>Love where you're going</h1>
								<h5>Book incredible things to do around the world.</h5>
								<p className='mt-4'>
									<a className='btn btn-lg btn-primary' href='#Packages'>
										Our Packages
									</a>
								</p>
							</div>
						</Carousel.Caption>
					</Carousel.Item>
				))}
			</Carousel>
		</div>
	);
};

export default Banner;
