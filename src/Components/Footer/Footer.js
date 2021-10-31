import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className=' pt-5 bg-dark'>
            <Container className='row g-4 mx-auto'>
                <div className="col-md-6 m-auto">
                    <div className="list-group text-center text-md-start ">
                        <h3 className="list-group-item  bg-dark text-light  border-0">About Our Company</h3>
                        <p className="list-group-item  bg-dark text-light  border-0 mb-0">Bangladesh's most convenient online pharmacy, Bangladesh Pharmacy, is brought to you by the Dadha & Company – one of Bangladesh’s most trusted pharmacies, with over 100 years’ experience in dispensing quality medicines.</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="list-group text-center text-md-start ">
                        <a href="/" className="list-group-item  bg-dark text-light  border-0">About Our Pharmacy</a>
                        <a href="/" className="list-group-item  bg-dark text-light  border-0">Read Our Blog</a>
                        <a href="/" className="list-group-item  bg-dark text-light  border-0">Sign Up To Deliver</a>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="list-group text-center text-md-start">
                        <a href="/" className="list-group-item  bg-dark text-light  border-0">Get Help</a>
                        <a href="/" className="list-group-item  bg-dark text-light  border-0">Read FAQs</a>
                        <a href="/" className="list-group-item  bg-dark text-light  border-0">View All Cities</a>
                    </div>
                </div>
            </Container>
            <hr className="border border-11 border-light" />
            <p className="my-0 text-light">Copyright &copy; 2021 All Rights Reserved by <strong>SUNY</strong> </p>
        </div>
    );
};

export default Footer;