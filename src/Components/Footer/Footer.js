import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
	return (
		<div className=' pt-5 bg-dark'>
			<Container className='row g-4 mx-auto'>
				<div className='col-md-6 m-auto'>
					<div className='list-group text-center text-md-start '>
						<h1 className='list-group-item  bg-dark text-color-1  border-0'>
							TourX Agency
						</h1>
						<p className='list-group-item  bg-dark text-light  border-0 mb-0'>
							TourX Agency is a full-service Outbound Tour Operator in
							Bangladesh. The founder of TourX Agency is a 100% tourism
							professional with knowledge of most of the destinations and
							services in the world for people to enjoy. Our specialized
							departments with expertise offer a variety of services.
						</p>
					</div>
				</div>
				<div className='col-md-3'>
					<div className='list-group text-center text-md-start '>
						<a
							href='/'
							className='list-group-item  bg-dark text-light  border-0'>
							About Our Agency
						</a>
						<a
							href='/'
							className='list-group-item  bg-dark text-light  border-0'>
							Read Our Blog
						</a>
						<a
							href='/'
							className='list-group-item  bg-dark text-light  border-0'>
							Sign Up To Enjoy
						</a>
					</div>
				</div>
				<div className='col-md-3'>
					<div className='list-group text-center text-md-start'>
						<a
							href='/'
							className='list-group-item  bg-dark text-light  border-0'>
							Get Help
						</a>
						<a
							href='/'
							className='list-group-item  bg-dark text-light  border-0'>
							Read FAQs
						</a>
						<a
							href='/'
							className='list-group-item  bg-dark text-light  border-0'>
							View All Packages
						</a>
					</div>
				</div>
			</Container>
			<hr className='border border-11 border-light m-0' />
			<p className='m-0 py-2 text-light'>
				Copyright &copy; 2021 All Rights Reserved by <strong className='text-color-1'>TourX Agency</strong>{" "}
			</p>
		</div>
	);
};

export default Footer;
