import React from 'react';
import './Card.css'; // Make sure this CSS file exists

const Card = ({ iconSrc, title, description, buttonText = "Buy now" }) => {
  return (
    <div className="category-card">
      <div className="card-icon-wrapper">
        <img src={iconSrc} alt={`${title} icon`} className="card-icon" />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <button className="card-button">{buttonText}</button>
    </div>
  );
};

export default Card;