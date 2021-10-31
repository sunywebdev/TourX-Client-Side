import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../context/useAuth";

const Header = () => {
	const activeStyle = {
		fontWeight: "bold",
		color: "red",
	};

	const { user, logOut } = useAuth();
	console.log(user);
	return (
		<Navbar
			collapseOnSelect
			expand='md'
			bg='dark'
			variant='dark'
			className='sticky-top'>
			<Container>
				<Navbar.Brand>
					<Link
						activeStyle={activeStyle}
						className='text-decoration-none fs-3'
						to='/'>
						TourX Agency
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link>
							<NavLink
								activeStyle={activeStyle}
								className='text-decoration-none '
								exact
								to='/'>
								Home
							</NavLink>
						</Nav.Link>
						{!user?.uid && (
							<>
								<Nav.Link>
									<NavLink
										activeStyle={activeStyle}
										className='text-decoration-none '
										to='/login'>
										Login
									</NavLink>
								</Nav.Link>
								<Nav.Link>
									<NavLink
										activeStyle={activeStyle}
										className='text-decoration-none '
										to='/SignUp'>
										SignUp
									</NavLink>
								</Nav.Link>
							</>
						)}
						<Nav.Link>
							<NavLink
								activeStyle={activeStyle}
								className='text-decoration-none '
								to='/manageorders'>
								Manage Orders
							</NavLink>
						</Nav.Link>
						<Nav.Link>
							<NavLink
								activeStyle={activeStyle}
								className='text-decoration-none '
								to='/orders'>
								My Orders
							</NavLink>
						</Nav.Link>
						<Nav.Link>
							<NavLink
								activeStyle={activeStyle}
								className='text-decoration-none '
								to='/addpackage'>
								Add Tour Package
							</NavLink>
						</Nav.Link>
						{user?.email === "suny.w68@gmail.com" && (
							<Nav.Link>
								<NavLink
									activeStyle={activeStyle}
									className='text-decoration-none '
									to='/admin'>
									Admin
								</NavLink>
							</Nav.Link>
						)}
					</Nav>
					{user?.email && (
						<Nav>
							<Nav.Link>
								<span className='fw-bold me-3 text-1'>
									Welcome, {user?.displayName}
								</span>
							</Nav.Link>

							<Nav.Link>
								<Image
									src={user?.photoURL}
									alt='mdo'
									width='32'
									height='32'
									className='rounded-circle'
								/>
							</Nav.Link>
							<Nav.Link>
								<span>
									<i
										onClick={logOut}
										className='fas fa-sign-out-alt fa-2x text-1 ps-2'></i>
								</span>
							</Nav.Link>
						</Nav>
					)}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
