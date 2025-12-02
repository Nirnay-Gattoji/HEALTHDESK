import React from 'react';
import './Footer.css';
import logo from '../../assets/footer/health-desk-clinic-logo.png'; 
import mastercard from '../../assets/footer/mastercard.png';
import discover from '../../assets/footer/discover.png';
import visa from '../../assets/footer/visa.png';
import amex from '../../assets/footer/amex.png';

const Footer = () => {
    // Data for the Product Columns
    const productColumn1 = ['Vita Renew', 'Testobites', 'Audizen', 'Nerve Flow', 'Uro flow'];
    const productColumn2 = ['Vita Renew', 'Testobites', 'Audizen', 'Nerve Flow', 'Memof'];
    const productColumn3 = ['Vita Renew', 'Testobites', 'Audizen', 'Nerve Flow', 'Derma care'];
    const productColumn4 = ['Vita Renew', 'Testobites', 'Audizen', 'Nerve Flow', 'TestoZen'];
    const productColumn5 = ['Vita Renew', 'Testobites', 'Audizen', 'Nerve Flow', 'True Fem'];

    return (
        <footer className="footer-container">
            <div className="footer-content-wrapper">

                {/* --- 1. Contact & Address Column --- */}
                <div className="footer-column footer-contact">
                    <img src={logo} alt="Health Care Desk Logo" className="footer-logo" />
                    <p className="footer-address">
                        Address: 7823 Red Oak Trail, Austin,<br/>
                        TX, 78745, United States
                    </p>
                    <p className="footer-contact-detail">Phone: (512) 555-2376</p>
                    <p className="footer-contact-detail">Email: Ereforce@outlook.com</p>
                </div>

                {/* --- 2. Product Links (Five Columns) --- */}
                <div className="footer-products-wrapper">
                    <h4 className="footer-heading footer-heading-products">Our Products</h4>

                    {/* Column 2A: Vita Renew, Testobites, Audizen, Nerve Flow, Uro flow */}
                    <div className="footer-column footer-product-list">
                        <ul className="footer-links">
                            {productColumn1.map((item, index) => (
                                <li key={index}><a href={`/product/${item.toLowerCase().replace(/\s/g, '-')}`}>{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2B: Vita Renew, Testobites, Audizen, Nerve Flow, Memof */}
                    <div className="footer-column footer-product-list">
                        <ul className="footer-links">
                            {productColumn2.map((item, index) => (
                                <li key={index}><a href={`/product/${item.toLowerCase().replace(/\s/g, '-')}`}>{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2C: Vita Renew, Testobites, Audizen, Nerve Flow, Derma care */}
                    <div className="footer-column footer-product-list">
                        <ul className="footer-links">
                             {productColumn3.map((item, index) => (
                                <li key={index}><a href={`/product/${item.toLowerCase().replace(/\s/g, '-')}`}>{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2D: Vita Renew, Testobites, Audizen, Nerve Flow, TestoZen */}
                    <div className="footer-column footer-product-list">
                        <ul className="footer-links">
                            {productColumn4.map((item, index) => (
                                <li key={index}><a href={`/product/${item.toLowerCase().replace(/\s/g, '-')}`}>{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2E: Vita Renew, Testobites, Audizen, Nerve Flow, True Fem */}
                    <div className="footer-column footer-product-list">
                        <ul className="footer-links">
                            {productColumn5.map((item, index) => (
                                <li key={index}><a href={`/product/${item.toLowerCase().replace(/\s/g, '-')}`}>{item}</a></li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>

            {/* --- Legal / Disclaimer Section --- */}
            <div className="footer-disclaimer-wrapper">
                <p className="footer-disclaimer-text">
                    These statements have not been evaluated by the Food and Drug Administration.
                    These products are not intended to diagnose, treat, cure or prevent any disease. Individual results may vary.
                </p>
                <div className="footer-payment-icons">
                    <img src={mastercard} alt="Mastercard" className="payment-icon" />
                    <img src={discover} alt="Discover" className="payment-icon" />
                    <img src={visa} alt="Visa" className="payment-icon" />
                    <img src={amex} alt="American Express" className="payment-icon" />
                </div>
            </div>

            {/* --- Copyright Bar --- */}
            <div className="footer-copyright-bar">
                <p>&copy; {new Date().getFullYear()}, Health Desk Clinic. All Rights Reserved.</p>
                <div className="footer-policies">
                    <a href="/terms">Terms And Conditions</a> |
                    <a href="/privacy">Privacy Policy</a> |
                    <a href="/contact">Contact Us</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;