import React from 'react';
import './CharityBanner.css'; 
import charityBannerImage from '../../../assets/Banner/charity-banner.png'; 

const CharityBanner = () => {
  return (
    <div className="charity-banner-container">
      {/* The image itself is the main content of this banner */}
      <img 
        src={charityBannerImage} 
        alt="Our Charitable Initiatives - Health Care Desk Gives Back" 
        className="charity-banner-image" 
      />
    </div>
  );
};

export default CharityBanner;