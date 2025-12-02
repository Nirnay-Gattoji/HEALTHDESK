import React from 'react';
import './Review.css'; 
import Card from './Card'; 
import testoBitesImg from '../../../assets/Review/rev1.png';
import vitaRenewImg from '../../../assets/Review/rev2.png';
import nerveFreedomImg from '../../../assets/Review/rev3.png';

const Review = () => {
   
    const reviewData = [
        {
            product: 'TestoBites',
            image: testoBitesImg,
            rating: 5,
            review: "TestoBites has been a game changer when it comes to my stamina and energy levels. I can truly feel a difference in my sex drive and virility as well. Highly recommended.",
            author: 'Ryan R.',
        },
        {
            product: 'Vita Renew',
            image: vitaRenewImg,
            rating: 5,
            review: "My pain therapist recommended this product to me and I was surprised by how well it worked. I can see a marked improvement in my Skin Care.",
            author: 'Jamie Fields',
        },
        {
            product: 'Nerve Freedom',
            image: nerveFreedomImg,
            rating: 5,
            review: "I have been an RN for 20 years and love helping people find solutions to their health issues. NF Product is the best natural product for neuropathy pain hands down.",
            author: 'Anonymous',
        },
    ];

    return (
        <div className="testimonials-section-container">
            <h2 className="testimonials-title">Verified Customer Testimonials</h2>
            
            <div className="testimonials-grid-wrapper">
                {reviewData.map((testimonial, index) => (
                    <Card
                        key={index}
                        product={testimonial.product}
                        image={testimonial.image}
                        rating={testimonial.rating}
                        review={testimonial.review}
                        author={testimonial.author}
                    />
                ))}
            </div>
        </div>
    );
};

export default Review;