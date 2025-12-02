import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
    
        <div className="contact-section-container">
            
            {/* Column 1: Have a Question? (FAQ Link) */}
            {/* 🚨 Changed: info-column -> contact-column */}
            <div className="contact-column column-faq">
                {/* 🚨 Changed: info-heading -> contact-heading */}
                <h3 className="contact-heading">Have a Question?</h3>
                {/* 🚨 Changed: info-text -> contact-text */}
                <p className="contact-text">
                    Check out our FAQs where we answer the most commonly asked questions
                </p>
                {/* 🚨 Changed: info-button -> contact-button */}
                <button className="contact-button">Read FAQs</button>
            </div>

            {/* Column 2: Connect With Us (Phone/Shipping) */}
            {/* 🚨 Changed: info-column -> contact-column */}
            <div className="contact-column column-connect">
                {/* 🚨 Changed: info-heading -> contact-heading */}
                <h3 className="contact-heading">Connect With Us</h3>
                {/* 🚨 Changed: info-text -> contact-text */}
                <p className="contact-text">
                    Enjoy free shipping for all orders.
                </p>
                {/* 🚨 Changed: info-phone-number -> contact-phone-number */}
                <p className="contact-phone-number">1-800-822-7777</p>
            </div>

            {/* Column 3: We're Social (Social Media CTA) */}
            {/* 🚨 Changed: info-column -> contact-column */}
            <div className="contact-column column-social">
                {/* 🚨 Changed: info-heading -> contact-heading */}
                <h3 className="contact-heading">We're Social</h3>
                {/* 🚨 Changed: info-text -> contact-text */}
                <p className="contact-text">
                    Like us, love us, follow us!
                </p>
            </div>
        </div>
    );
};

export default ContactUs;