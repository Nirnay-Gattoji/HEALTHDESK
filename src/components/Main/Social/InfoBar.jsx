import React from 'react';
import './InfoBar.css';

const InfoBar = () => {
    return (
        // 🚨 Changed: cta-bar-container -> infobar-container
        <div className="infobar-container">
            {/* 🚨 Changed: cta-text-content -> infobar-text-content */}
            <div className="infobar-text-content">
                <h2 className="cta-title">Let's Grow Together</h2>
                <p className="cta-subtitle">
                    We'll keep it simple. Only the news and updates you need.
                </p>
            </div>
            {/* 🚨 Changed: cta-form-wrapper -> infobar-form-wrapper */}
            <div className="infobar-form-wrapper">
                {/* 🚨 Changed: cta-form -> infobar-form */}
                <form className="infobar-form">
                    <input 
                        type="email" 
                        placeholder="Please Enter Your Email" 
                        className="email-input"
                        required 
                    />
                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default InfoBar;