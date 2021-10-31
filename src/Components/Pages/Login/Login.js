import React from "react";
import { FloatingLabel, Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../context/useAuth";

const Login = () => {
	const { signInUsingGoogle, signInWithEmailPassword, auth, error } = useAuth();
	const location = useLocation();
	const history = useHistory();
	console.log(error);
	const errorMsg =
		error === "Firebase: Error (auth/wrong-password)."
			? "Your password is Worng"
			: "";
	const errorMsg2 =
		error === "Firebase: Error (auth/user-not-found)."
			? "You don't have any account"
			: "";
	const handleGoogleLogin = () => {
		signInUsingGoogle().then((result) => {
			history.push(-1);
		});
	};
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		console.log(data);
		signInWithEmailPassword(auth, data.email, data.password).then((user) => {
			// eslint-disable-next-line no-lone-blocks
			history.push(-1);
			
		});
	};

	return (
		<Container className='mt-5'>
			<h2 className='fw-bold py-4'>Login</h2>
			<Form className='col-md-7 mx-auto' onSubmit={handleSubmit(onSubmit)}>
				<FloatingLabel
					controlId='floatingInput'
					label='Email address'
					className='mb-3'>
					<Form.Control
						type='email'
						placeholder='name@example.com'
						{...register("email", { required: true })}
					/>
				</FloatingLabel>
				<FloatingLabel
					controlId='floatingPassword'
					label='Password'
					className='mb-3'>
					<Form.Control
						type='password'
						placeholder='Password'
						{...register("password", { required: true })}
					/>
				</FloatingLabel>
				<p className='text-danger py-1'>
					{errorMsg}
					{errorMsg2}
				</p>
				<Button type='submit' className='my-2 mx-1'>
					Login
				</Button>
				<Button onClick={handleGoogleLogin} className='my-2 mx-1'>
					Login With Google
				</Button>
				<p>
					Don't Have An Account? <Link to='/signup'>Create An Account</Link>
				</p>
			</Form>
		</Container>
	);
};

export default Login;
