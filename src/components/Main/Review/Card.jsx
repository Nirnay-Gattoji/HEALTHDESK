import React from 'react';


const StarRating = ({ count }) => {
   
    const stars = Array(5).fill(0).map((_, i) => (
        <span key={i} className={i < count ? 'star-filled' : 'star-empty'}>★</span>
    ));
    return <div className="review-rating">{stars}</div>;
};

const Card = ({ product, image, rating, review, author }) => {
    return (
        <div className="testimonial-card">
            
            {/* Product Header (Image and Name) */}
            <div className="card-header">
                <img src={image} alt={product} className="product-review-image" />
                <span className="product-review-name">{product}</span>
            </div>
            
            {/* Rating */}
            <StarRating count={rating} />
            
            {/* Review Content */}
            <p className="review-text">{review}</p>
            
            {/* Author */}
            <p className="review-author">- {author}</p>
        </div>
    );
};

export default Card;