import React, { useEffect, useState } from "react";
import { Card, Col, Container, Placeholder, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const News = () => {
	const [news, setNews] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:5000/news`)
			.then((res) => res.json())
			.then((data) => setNews(data));
	}, []);
	return (
		<Container className='my-5'>
			<div className='section-head my-4'>
				<h2 className='text-color-1'>News And Blogs</h2>
				<h5>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
					molestias.
				</h5>
			</div>

			{news.length > 0 ? (
				<Row xs={1} md={2} lg={3} className='g-4'>
					{news?.map((news1) => (
						<Col key={news1?._id} className='text-start'>
							<Card className=' border-11' style={{ borderRadius: "19px" }}>
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

export default News;
