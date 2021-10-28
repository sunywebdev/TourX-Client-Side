import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../context/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    let { user, isLoading } = useAuth();
    if (isLoading) {
        return <>
            <Spinner animation="border" className='mx-2 mt-5 text-1' />
            <Spinner animation="border" className='mx-2 text-1' />
            <Spinner animation="border" className='mx-2 text-1' />
            <Spinner animation="border" className='mx-2 text-1' />
            <Spinner animation="border" className='mx-2 text-1' />
            <h2 className="fs-1 py-3 mb-5 fw-bold text-1">Loading</h2>
        </>

    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/Login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}
export default PrivateRoute;