import React from 'react';
import './Banner.css'; 

import doctorImage from "../../../assets/Banner/doctor.png";
const Banner = () => {
  return (
    
    <div className="banner-main-container">
        
        {/* The inner container uses Flexbox to create the two columns */}
        <div className="banner-flex-content">
            
            {/* 1. Left Column: Text and CTA */}
            <div className="banner-text-column">
                <h1 className="banner-heading">Health Desk Clinic: <br />All Natural Supplements</h1>
                <p className="banner-description">
                    Health Care Desk is the premier choice for those seeking wellness through wholesome, 
                    superfood-enriched formulas that actually work. Our all-natural, organic health 
                    supplements are designed to give your body what it needs to thrive and optimize 
                    your health each day!
                </p>
                <button className="shop-now-button">Shop Now</button>
            </div>

            {/* 2. Right Column: Image */}
            
                {/* Ensure the doctorImage variable is pointing to your image file */}
                <img src={doctorImage} alt="Doctor in a lab coat with stethoscope" className="doctor-image" />
            

        </div>
    </div>
  );
};

export default Banner;