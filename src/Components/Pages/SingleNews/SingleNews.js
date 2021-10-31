import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const SingleNews = () => {
	const { newsId } = useParams();
	const [news, setNews] = useState([]);
	useEffect(() => {
		fetch(`https://morning-garden-49984.herokuapp.com/news/${newsId}`)
			.then((res) => res.json())
			.then((data) => setNews(data));
	}, []);
	return (
		<Container className='mt-2 text-color-1'>
			<h2 className='fw-bold py-3 mt-2'>{news?.headline}</h2>
			<div className='clearfix'>
				<img
					src={news?.photourl}
					className='col-md-4 mb-2 mx-md-3 rounded float-sm-start w-50'
					alt='...'
				/>
				<div className='row gx-0 pb-3'>
					<div className='col fw-bold text-color-1'>
						<i className='fas fa-user-alt'></i> &nbsp;
						{news?.author}
					</div>
					<div className='col fw-bold text-color-1'>
						<i className='fas fa-calendar-alt'></i> &nbsp;
						{news?.date}
					</div>
					<div className='col fw-bold text-color-1'>
						<i className='fas fa-folder'></i> &nbsp; {news?.folder}
					</div>
				</div>
				<p className='text-secondary text-start'>{news?.description}</p>
			</div>

			<Link to='/' className='text-decoration-none text-light'>
				<Button className='my-4 px-5 bg-1 border-11'>
					<i className='fas fa-arrow-circle-left me-3'></i>Back To Home
				</Button>
			</Link>
		</Container>
	);
};

export default SingleNews;
