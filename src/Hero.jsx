import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1>Support Hope. Change Lives.</h1>
                <h2 className="hero-subtitle">Your generosity helps us provide education, healthcare, and brighter futures for children and families in need.</h2>
                <p>Together, we can build stronger, healthier communities and create lasting impact.</p>
                <div className="hero-buttons">
                  <a href="#donate" className="btn btn-primary">Donate Now</a>
                  <a href="#about" className="btn btn-secondary">Learn More</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
