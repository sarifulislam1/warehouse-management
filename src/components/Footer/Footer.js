import React from 'react';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <footer className=' bg-success p-5 text-light fs-6'>
            <p>All copyright<small>&copy; {date}</small></p>
        </footer>
    );
};

export default Footer;