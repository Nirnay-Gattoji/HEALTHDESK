// C:/Users/saipr/OneDrive/Desktop/HealthDesk/frontend/src/components/Main/Commitment/CommitmentSection.jsx (or Feature.jsx)

import React from 'react';
import './Feature.css'; // Assuming your CSS is named Feature.css
import CommitmentItem from './Item'; 

import naturalComponentsImg from "../../../assets/Commitment/sec1.png.png";
import researchBackedImg from "../../../assets/Commitment/sec2.png.png";
import ecoConsciousImg from "../../../assets/Commitment/sec3.png.png";

const Feature = () => {
    const commitments = [
        {
            title: '100% Natural Components',
            subtitle: 'Nature-Powered Wellness You Can Trust',
            description: 'We harness the goodness of nature to create supplements enriched with premium, superfood-backed superfood extracts. Each formula is carefully crafted to promote overall vitality and deliver proven health benefits. At Health Desk Care, we uphold the highest standards of quality, safety, and regulatory compliance, ensuring every product you choose is both effective and trustworthy.',
            image: naturalComponentsImg,
            // The original alignLeft values here are IGNORED due to the map logic below
        },
        {
            title: 'Research-Backed Formulations',
            subtitle: 'Formulated with Clinically Tested Ingredients',
            description: 'We combine the expertise of our physicians with the latest health data and medical research, ensuring every supplement is thoughtfully formulated for maximum benefit.',
            image: researchBackedImg,
        },
        {
            title: 'Eco-Conscious Manufacturing',
            subtitle: 'Sustainable from Source to Shelf',
            description: 'Our supplements are crafted in certified facilities that meet and exceed industry standards — ensuring exceptional quality while minimizing environmental impact. Through eco-friendly processes and a commitment to reducing our carbon footprint, we create wellness solutions that are as good for the planet as they are for you.',
            image: ecoConsciousImg,
        },
    ];

    return (
        <div className="commitment-section-container">
            <h1 className="section-main-title">Health Care Desk <br />The Future Of Smart Health</h1>
            
            <p className="section-intro-text">
                At Health Care Desk, we are committed to producing supplements that harness the power of all-natural superfoods. Our products help support the body's natural processes, improving our customers' quality of life.
            </p>

            <div className="commitment-items-list">
                {commitments.map((item, index) => (
                    <CommitmentItem
                        key={index}
                        title={item.title}
                        subtitle={item.subtitle}
                        description={item.description}
                        image={item.image}
                        
                        // 🚨 CRITICAL FIX: Alternating layout logic 
                        // Index 0, 2, 4... (Even) -> alignLeft=true (Image first)
                        // Index 1, 3, 5... (Odd) -> alignLeft=false (Text first)
                        alignLeft={index % 2 === 0} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Feature;