import React from 'react';

import Navbar from './components/Header/Navbar/Navbar'; 
import Banner from './components/Main/Banner/Banner'; 
import Heading from './components/Main/Carousel/Heading';
import Carousel from './components/Main/Carousel/Carousel';
import BestSellers from './components/Main/BestSeller/BestSeller';
import TrustBanner from './components/Main/Banner/TrustBanner';
import Feature from './components/Main/Feature/Feature';
import CharityBanner from './components/Main/Banner/CharityBanner';
import Review from './components/Main/Review/Review';
import Social from './components/Main/Social/Social'; 
import Footer from './components/Footer/Footer';

import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <div className="App">

      <Navbar />

      {/* Wrap each section in center container */}
      <div className="section-container">
        <Banner />
      </div>

      <div className="section-container">
        <Heading />
      </div>

      <div className="section-container">
        <Carousel />
      </div>

      <div className="section-container">
        <BestSellers />
      </div>

      <div className="section-container">
        <TrustBanner />
      </div>

      <div className="section-container">
        <Feature />
      </div>

      <div className="section-container">
        <CharityBanner />
      </div>

      <div className="section-container">
        <Review />
      </div>

      <div className="section-container">
        <Social />
      </div>

      <Footer />

    </div>
  );
}

export default App;
