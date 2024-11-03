import React from 'react';
import './ContactUs.css'; // Import custom styles

const ContactUs = () => {
    return (
        <div className="contact-us">
            <h1>Contact Us</h1>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" required></textarea>
                </div>
                <button type="submit" className="submit-button">Send</button>
            </form>
        </div>
    );
};

export default ContactUs;
