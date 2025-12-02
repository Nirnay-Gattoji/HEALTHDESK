import React from 'react';
import './Heading.css';

const Heading = () => {
  return (
   
    <div className="heading-container">
      {/* 🚨 FIX: Used <br /> to force a line break exactly where you specified */}
      <h1 className="main-heading">
        Nutrition Solutions <br /> 
        for Your Competitive Well-Being
      </h1>
      
    </div>
  );
}

export default Heading;