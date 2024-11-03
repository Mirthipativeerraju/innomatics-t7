// Footer.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="bg-light-orange text-dark text-center py-4">
            <div className="container">
                <p className="mb-0">© {new Date().getFullYear()} Book Hive. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
