import React from "react";
import { FloatingLabel, Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../context/useAuth";

const SignUp = () => {
	const {
		user,
		createNewUserUsingEmailPassword,
		signInUsingGoogle,
		auth,
		error,
		updateProfiles,
	} = useAuth();
	const { register, handleSubmit } = useForm();
	const history = useHistory();
	const location = useLocation();
	const errorMsg =
		error === "Firebase: Error (auth/email-already-in-use)."
			? "You already have an account"
			: "";
	const errorMsg2 =
		error ===
		"Firebase: Password should be at least 6 characters (auth/weak-password)."
			? "Password must be 6 charactre"
			: "";
	const handleGoogleLogin = () => {
		signInUsingGoogle().then((result) => {
			history.push(location?.state?.from || "/home");
		});
	};
	const onSubmit = (data) => {
		createNewUserUsingEmailPassword(auth, data.email, data.password).then(
			(user) => {
				updateProfiles(auth, data.displayName, data.photoURL);
				// eslint-disable-next-line no-lone-blocks
				{
					user && history?.go(-2);
				}
			},
		);
	};

	return (
		<Container className='mt-5'>
			<h2 className='fw-bold py-4'>Register</h2>
			<Form className='col-md-7 mx-auto' onSubmit={handleSubmit(onSubmit)}>
				<FloatingLabel controlId='floatingInput' label='Name' className='mb-3'>
					<Form.Control
						defaultValue={user?.displayName}
						type='text'
						placeholder='John Doe'
						{...register("displayName", { required: true })}
					/>
				</FloatingLabel>
				<FloatingLabel
					controlId='floatingInput'
					label='Enter Photo URL (Optional)'
					className='mb-3 text-1'>
					<Form.Control
						defaultValue={user?.photoURL}
						className='border-11 text-1'
						type='text'
						placeholder='Enter Photo URL'
						{...register("photoURL", { required: false })}
					/>
				</FloatingLabel>
				<FloatingLabel
					controlId='floatingInput'
					label='Enter Your Email'
					className='mb-3 text-1'>
					<Form.Control
						defaultValue={user?.email}
						className='border-11 text-1'
						type='email'
						placeholder='Enter Your Email'
						{...register("email", { required: true })}
					/>
				</FloatingLabel>
				<FloatingLabel
					controlId='floatingInput'
					label='Enter Your Password'
					className='mb-3 text-1'>
					<Form.Control
						defaultValue={user?.password}
						className='border-11 text-1'
						type='password'
						placeholder='Enter Your Password'
						{...register("password", { required: true })}
					/>
				</FloatingLabel>
				<p className='text-danger py-1'>
					{errorMsg}
					{errorMsg2}
				</p>
				<Button type='submit' className='my-2 mx-1'>
					Register A New Account
				</Button>
				<Button onClick={handleGoogleLogin} className='my-2 mx-1'>
					Register With Google
				</Button>
				<p>
					Already Have An Account?{" "}
					<Link to='/login'>Login To Your Account</Link>
				</p>
			</Form>
		</Container>
	);
};

export default SignUp;
