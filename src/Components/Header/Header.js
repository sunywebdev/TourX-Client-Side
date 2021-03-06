import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../context/useAuth";

const Header = () => {
	const activeStyle = {
		fontWeight: "bold",
		color: "#FF7F47",
	};
	const navbar = {
		color: "white",
	};

	const { user, logOut } = useAuth();
	return (
		<Navbar
			collapseOnSelect
			expand='lg'
			bg='dark'
			variant='dark'
			className='sticky-top px-3 px-md-5'>
			<>
				<Navbar.Brand>
					<Link
						style={navbar}
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
								style={navbar}
								activeStyle={activeStyle}
								className='text-decoration-none '
								exact
								to='/'>
								Home
							</NavLink>
						</Nav.Link>
						<Nav.Link>
							<NavLink
								style={navbar}
								activeStyle={activeStyle}
								className='text-decoration-none '
								exact
								to='/packages'>
								Packages
							</NavLink>
						</Nav.Link>
						{!user?.uid ? (
							<>
								<Nav.Link>
									<NavLink
										style={navbar}
										activeStyle={activeStyle}
										className='text-decoration-none '
										to='/login'>
										Login
									</NavLink>
								</Nav.Link>
							</>
						) : (
							<>
								<Nav.Link>
									<NavLink
										style={navbar}
										activeStyle={activeStyle}
										className='text-decoration-none '
										to='/manageorders'>
										Manage Orders
									</NavLink>
								</Nav.Link>
								<Nav.Link>
									<NavLink
										style={navbar}
										activeStyle={activeStyle}
										className='text-decoration-none '
										to='/orders'>
										My Orders
									</NavLink>
								</Nav.Link>
								<Nav.Link>
									<NavLink
										style={navbar}
										activeStyle={activeStyle}
										className='text-decoration-none '
										to='/addpackage'>
										Add Tour Package
									</NavLink>
								</Nav.Link>
							</>
						)}
						{user?.email === "admin@tourx.com" && (
							<Nav.Link>
								<NavLink
									style={navbar}
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
								<span className='fw-bold me-3 text-1' style={navbar}>
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
			</>
		</Navbar>
	);
};

export default Header;
