import React from 'react';
import './SocialFollow.css';

// --- Placeholder Icon Imports ---
// 🚨 IMPORTANT: Replace these with actual imports of your SVG or PNG icons
import logo from '../../../assets/Social/health-desk-clinic-logo.png'; 
import facebookIcon from '../../../assets/Social/facebook-blue.png';
import twitterIcon from '../../../assets/Social/twitter-blue.png';
import telegramIcon from '../../../assets/Social/telegram-blue.jpeg'; // Assuming the third icon is Telegram or a similar chat icon
import linkedinIcon from '../../../assets/Social/linkedin-blue.jpeg';

const SocialFollow = () => {
    return (
        <div className="social-follow-container">
            {/* Logo */}
            <div className="social-logo-wrapper">
                <img src={logo} alt="Health Desk Clinic Logo" className="social-logo" />
            </div>

            {/* Follow Us Button */}
            <button className="follow-us-button">
                Follow Us
            </button>

            {/* Social Icons */}
            <div className="social-icons-wrapper">
                {/* Ensure these links are updated to your actual social media URLs */}
                <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <img src={facebookIcon} alt="Facebook" className="social-icon" />
                </a>
                <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <img src={twitterIcon} alt="Twitter" className="social-icon" />
                </a>
                <a href="https://t.me/yourchannel" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                    <img src={telegramIcon} alt="Telegram" className="social-icon" />
                </a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
                </a>
            </div>
        </div>
    );
};

export default SocialFollow;