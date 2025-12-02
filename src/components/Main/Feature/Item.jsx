// C:/Users/saipr/OneDrive/Desktop/HealthDesk/frontend/src/components/Main/Commitment/CommitmentItem.jsx

import React from 'react';


const Item = ({ title, subtitle, description, image, alignLeft }) => {
    

    const layoutClass = alignLeft ? '' : 'image-right';

    return (
        <div className={`commitment-item ${layoutClass}`}>
            
            {/* 1. Image Wrapper */}
            <div className="commitment-image-wrapper">
                <img src={image} alt={title} className="commitment-image" />
            </div>

            {/* 2. Text Content */}
            <div className="commitment-text-content">
                <p className="commitment-subtitle">{subtitle}</p>
                <h3 className="commitment-title">{title}</h3>
                <p className="commitment-description">{description}</p>
                <button className="commitment-learn-more">Learn More</button>
            </div>
        </div>
    );
};

export default Item;