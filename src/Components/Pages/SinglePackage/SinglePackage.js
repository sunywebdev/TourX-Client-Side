import axios from "axios";
import React, { useEffect, useState } from "react";
import DatePicker from "react-date-picker";
import {
	ListGroup,
	Button,
	Card,
	Container,
	Table,
	Form,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import { useHistory, useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../context/useAuth";

const SinglePackage = () => {
	const { user } = useAuth();
	const { productId } = useParams();
	const location = useLocation();
	const [tourDate, onChange] = useState(new Date());
	const history = useHistory();
	const [adultQuantity, setAdultQuantity] = useState(0);
	const [childQuantity, setChildQuantity] = useState(0);
	const [packages, setPackages] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:5000/packages/${productId}`)
			.then((res) => res.json())
			.then((data) => setPackages(data));
	}, []);
	const { register, handleSubmit, reset } = useForm();
	const details = {
		adultQuantity: adultQuantity,
		childQuantity: childQuantity,
		userId: user?.uid,
		name: user?.displayName,
		email: user?.email,
		phoneNumber: "",
		address: "",
		specialRequirements: "",
		productId: packages?.productId,
		productName: packages?.productName,
		productPlace: packages?.place,
		productDuration: packages?.productDuration,
		productPrice: packages?.productPrice,
		tourDate: tourDate,
		orderTime: new Date().toLocaleString() + "",
		orderStatus: "Pending",
	};
	console.log(details);
	const onSubmit = (data) => {
		axios
			.post("http://localhost:5000/pending", details)
			.then(function (response) {
				alert("Successfully added, Going to preview Or Update page");
				history.push(`/order/${packages?.productId}`);
				reset();
			})
			.catch(function (error) {
				console.log(error);
			});
	};
	return (
		<Container className=' text-start mt-2'>
			<div className='row'>
				<div className='col-md-9'>
					<img variant='top' src={packages?.photo} alt='' className='w-100' />
					<div className='row py-3 gy-3 '>
						<div className='col-md-8'>
							<h2>{packages?.productName}</h2>
							<p className='mb-1'>
								<i className='fas fa-map-marker-alt'></i> {packages?.place}
							</p>
						</div>
						<div className='col-md-4'>
							<p className='mb-1'>
								<Rating
									initialRating={packages?.productReviewAvg}
									emptySymbol='far fa-star '
									fullSymbol='fas fa-star '
									readonly
								/>
								&nbsp;
								<span className='fw-bold ms-1 h6'>
									{packages?.productReviewAvg} / 5
								</span>
							</p>
							<h6> By {packages?.productReviewCount} People</h6>
						</div>
					</div>
					<hr />
					<div className='row gy-3 justify-content-around'>
						<div className='col-6 col-md-2'>
							<Table className='border-0 align-middle '>
								<tbody className='border-0'>
									<tr>
										<td className='border-0 p-0 text-center' rowSpan='2'>
											<i className='far fa-clock fa-2x'></i>
										</td>
										<td className='border-0 p-0 fw-bold'>Duration</td>
									</tr>

									<tr>
										<td className='border-0 p-0'>
											{packages?.productDuration} Days
										</td>
									</tr>
								</tbody>
							</Table>
						</div>
						<div className='col-6 col-md-3'>
							<Table className='border-0 align-middle '>
								<tbody className='border-0'>
									<tr>
										<td className='border-0 p-0 text-center' rowSpan='2'>
											<i class='fas fa-shoe-prints fa-2x'></i>
										</td>
										<td className='border-0 p-0 fw-bold'>Tour Type</td>
									</tr>

									<tr>
										<td className='border-0 p-0'>Daily Tour</td>
									</tr>
								</tbody>
							</Table>
						</div>
						<div className='col-6 col-md-3'>
							<Table className='border-0 align-middle '>
								<tbody className='border-0'>
									<tr>
										<td className='border-0 p-0 text-center' rowSpan='2'>
											<i class='fas fa-language fa-2x'></i>
										</td>
										<td className='border-0 p-0 fw-bold'>Language</td>
									</tr>

									<tr>
										<td className='border-0 p-0'>English</td>
									</tr>
								</tbody>
							</Table>
						</div>
						<div className='col-6 col-md-3'>
							<Table className='border-0 align-middle '>
								<tbody className='border-0'>
									<tr>
										<td className='border-0 p-0 text-center' rowSpan='2'>
											<i class='fas fa-users fa-2x'></i>
										</td>
										<td className='border-0 p-0 fw-bold'>Group Size</td>
									</tr>

									<tr>
										<td className='border-0 p-0'>10 People</td>
									</tr>
								</tbody>
							</Table>
						</div>
					</div>
					<hr className='mt-0' />
					<h2>Overview</h2>
					<p>{packages?.description}</p>
				</div>
				<div className='col-md-3'>
					<Form onSubmit={handleSubmit(onSubmit)} className=' sticky-md-top'>
						<Card className='cart text-center align-items-center'>
							<ListGroup variant='flush' className='border-0'>
								<ListGroup.Item className='border-0'>
									<h4 className='fw-bold'>
										Starts From ${packages?.productPrice}
									</h4>
								</ListGroup.Item>
								<ListGroup.Item>
									<h6>
										<i class='far fa-calendar-alt'></i> Tour Date
									</h6>
									<span>
										<DatePicker
											onChange={onChange}
											value={tourDate}
											required={true}
										/>
									</span>
								</ListGroup.Item>
								<ListGroup.Item>
									<h6>
										<i class='fas fa-user-alt'></i> Adult
									</h6>
									<span>
										<ListGroup horizontal className='border-0'>
											<ListGroup.Item>
												<i
													onClick={() =>
														adultQuantity > 0 &&
														setAdultQuantity(adultQuantity - 1)
													}
													class='fas fa-minus-circle fa-2x text-danger '></i>
											</ListGroup.Item>
											<ListGroup.Item>
												<input
													className='border-0 text-center fs-5 fw-bold'
													type='number'
													value={adultQuantity}
													style={{ width: "3rem" }}
													{...register("adultQuantity", { required: true })}
												/>
											</ListGroup.Item>
											<ListGroup.Item>
												<i
													onClick={() => setAdultQuantity(adultQuantity + 1)}
													class='fas fa-plus-circle fa-2x text-danger'></i>
											</ListGroup.Item>
										</ListGroup>
									</span>
								</ListGroup.Item>
							</ListGroup>
							<ListGroup.Item className='border-0'>
								<h6>
									<i class='fas fa-baby'></i> Child
								</h6>
								<span>
									<ListGroup horizontal className='border-0'>
										<ListGroup.Item>
											<i
												onClick={() =>
													childQuantity > 0 &&
													setChildQuantity(childQuantity - 1)
												}
												class='fas fa-minus-circle fa-2x text-danger '></i>
										</ListGroup.Item>
										<ListGroup.Item>
											<input
												className='border-0 text-center fs-5 fw-bold'
												type='number'
												value={childQuantity}
												style={{ width: "3rem" }}
												{...register("childQuantity", { required: true })}
											/>
										</ListGroup.Item>
										<ListGroup.Item>
											<i
												onClick={() => setChildQuantity(childQuantity + 1)}
												class='fas fa-plus-circle fa-2x text-danger'></i>
										</ListGroup.Item>
									</ListGroup>
								</span>
							</ListGroup.Item>
							<ListGroup.Item className='border-0'>
								<Button className='w-100' type='submit'>
									Book Now
								</Button>
							</ListGroup.Item>
						</Card>
					</Form>
				</div>
			</div>
		</Container>
	);
};

export default SinglePackage;
