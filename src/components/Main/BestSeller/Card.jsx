import React from 'react';
import './Card.css'; 
// Assuming a star component or using a simple loop for stars
    
const StarRating = ({ count }) => {
    // Check array mapping syntax
    const stars = Array(5).fill(0).map((_, i) => (
        <span key={i} className={i < count ? 'star-filled' : 'star-empty'}>★</span>
    )); // <--- Check that this parenthesis and semicolon are correct
    return <div className="product-rating">{stars}</div>;
};


const Card = ({ productName, imageSrc, rating }) => {
  return (
    <div className="product-card">
      <div className="product-image-area">
        <img src={imageSrc} alt={productName} className="product-image" />
      </div>
      
      <h3 className="product-name">{productName}</h3>
      
      <StarRating count={rating} />

      <button className="product-button">Shop Now</button>
    </div>
  );
};

export default Card;