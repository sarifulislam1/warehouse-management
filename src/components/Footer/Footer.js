import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaTwitter, FaGoogle, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <footer className='bg-success'>
            <div className=' row bg-success p-5 text-light fs-6 w-100'>
                <div className='col-lg-6 text-start'>
                    <h4>Who We Are</h4>
                    <p>Grocery Life is a ‘come-as-you-are’ catalog where the worlds of Fresh Grocery.

                        Passing time? On a product-hunt? Just passing through? Regardless, we’ve got something for you! With Grocery warehouse in Bangladesh has never been so easy.</p>
                </div>
                <div className='col-lg-6 text-light'>
                    <h4>Connect</h4>
                    <div className='d-flex justify-content-evenly align-items-center mt-3'>

                        <h2> <FaFacebookSquare /></h2>
                        <h2> <FaInstagramSquare /></h2>
                        <h2> <FaTwitter /></h2>
                        <h2> <FaGoogle /></h2>
                        <h2> <FaLinkedin /></h2>

                    </div>



                </div>
                <p className='mt-4 mb-0'>All rights reserved<small>&copy; {date}</small></p>
            </div>
        </footer>
    );
};

export default Footer;