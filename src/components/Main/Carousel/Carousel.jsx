import React from 'react';
import Card from './Card';
import './Carousel.css'; 

import weightLossIcon from '../../../assets/icons/weight-loss-icon.png'; 
import nervePainIcon from '../../../assets/icons/nerve-pain-icon.png';
import skinCareIcon from '../../../assets/icons/skin-care-icon.png';
import mensHealthIcon from '../../../assets/icons/mens-health-icon.jpeg';
import womensHealthIcon from '../../../assets/icons/womens-health-icon.png';


const Carousel = () => {
  // Define your card data
  const categories = [
    {
      iconSrc: weightLossIcon,
      title: 'Weight Loss',
      description: 'Shop trusted weight loss products that help boost metabolism and support your journey to a healthier you.',
    },
    {
      iconSrc: nervePainIcon,
      title: 'Nerve Pain',
      description: 'Find relief with nerve pain products formulated to soothe discomfort and support healthy nerve function.',
    },
    {
      iconSrc: skinCareIcon,
      title: 'Skin Care',
      description: 'Explore premium skincare products that nourish, protect, and enhance your natural glow.',
    },
    {
      iconSrc: mensHealthIcon,
      title: "Men's Health",
      description: 'Discover men\'s health products designed to boost energy, strength, and overall well-being.',
    },
    {
      iconSrc: womensHealthIcon,
      title: "Women's Health",
      description: 'Explore women\'s health supplements to support hormonal balance and overall wellness.',
    },
    // Add more categories as needed
  ];

  return (
    <div className="category-section-container">
      <div className="category-cards-wrapper">
        {categories.map((category, index) => (
          <Card 
            key={index} // A unique key is important for lists in React
            iconSrc={category.iconSrc}
            title={category.title}
            description={category.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;