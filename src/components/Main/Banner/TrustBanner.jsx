import React from 'react';
import './TrustBanner.css'; 

import trustBannerImage from '../../../assets/Banner/trust-banner.png'; 

const TrustBanner = () => {
    return (
        <div className="trust-banner-container">
            {/* Display the pre-designed image directly */}
            <img 
                src={trustBannerImage} 
                alt="A Brand That You Can Trust" 
                className="trust-banner-image" 
            />
        </div>
    );
};

export default TrustBanner;