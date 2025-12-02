import React from 'react';
import './BestSeller.css'; 
// CORRECTED PATH: Use './' for files in the same directory
import Card from './Card'; 
import dentPureImg from '../../../assets/products/pht1.png.png';
import trueFemImg from '../../../assets/products/pht2.png.png';
import vitaRenewImg from '../../../assets/products/pht3.png.png';
import prostaZenImg from '../../../assets/products/pht4.png.png';
import nerveFreedomImg from '../../../assets/products/pht5.png.png';
const BestSellers = () => {
    // Hardcoded product data
    const bestSellers = [
        { name: "Dent Pure", image: dentPureImg, rating: 5 },
        { name: "True Fem", image: trueFemImg, rating: 5 },
        { name: "Vita Renew", image: vitaRenewImg, rating: 5 },
        { name: "ProstaZen", image: prostaZenImg, rating: 5 },
        { name: "Nerve Freedom", image: nerveFreedomImg, rating: 5 },
    ];


    const filterTabs = ["Results-Driven", "All-Natural", "Non-GMO", "Cruelty-Free"];
    
    return (
        <div className="best-sellers-section-container">
            <h2 className="best-sellers-title">Our Best Sellers</h2>
            <p className="best-sellers-subtitle">
                Formulated with science-backed all-natural ingredients, our unique supplements support holistic health, healing & wellness.
            </p>

            {/* Filter/Tab Bar */}
            <div className="best-sellers-filters">
                {filterTabs.map((tab, index) => (
                    <span 
                        key={tab} 
                        className={`filter-tab ${index === 0 ? 'active' : ''}`}
                    >
                        {tab}
                    </span>
                ))}
            </div>

            {/* Product List */}
            <div className="product-list-wrapper">
                {bestSellers.map((product) => (
                    <Card
                        key={product.name}
                        productName={product.name}
                        imageSrc={product.image}
                        rating={product.rating}
                    />
                ))}
            </div>
        </div>
    );
};

export default BestSellers;