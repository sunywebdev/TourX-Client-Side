import React, { useEffect, useState } from "react";
import { Card, Col, Container, Placeholder, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const News = () => {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
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
	const [news, setNews] = useState([]);
	useEffect(() => {
		fetch(`https://morning-garden-49984.herokuapp.com/news`)
			.then((res) => res.json())
			.then((data) => setNews(data));
	}, []);
	return (
		<Container className='my-5  overflow-hidden'>
			<div className='section-head my-4'>
				<h2 className='text-color-1'>News And Blogs</h2>
				<h5>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
					molestias.
				</h5>
			</div>

			{news.length > 0 ? (
				<Slider {...settings}>
					{news?.map((news1) => (
						<Col key={news1?._id} className='text-start'>
							<Card
								className=' border-11 mx-2'
								style={{ borderRadius: "19px" }}>
								<div className='position-relative'>
									<Card.Img
										variant='top'
										src={news1?.photourl}
										style={{ borderRadius: "19px 19px 0 0" }}
									/>
									<span className='position-absolute bottom-0 start-0  badge m-2 p-2 rounded-pill bg-1'>
										<i className='far fa-user'></i>&nbsp; {news1?.author}
									</span>
									<span className='position-absolute bottom-0 end-0  badge m-2  p-2 rounded-pill bg-1'>
										<i className='far fa-calendar-alt'></i>&nbsp; {news1?.date}
									</span>
								</div>
								<Card.Body>
									<Card.Title className='fw-bold text-color-1'>
										{(news1?.headline).slice(0, 60)}....
									</Card.Title>
									<Card.Text>
										{(news1?.description).slice(0, 111)} ..........
									</Card.Text>
									<Link
										exact
										to={`/news/${news1?._id}`}
										className='float-start text-color-1 fw-bold underline-bold'>
										Read More +
									</Link>
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

export default News;
