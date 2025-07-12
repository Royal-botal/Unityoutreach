import React from 'react';
import './About.css';

const About = ({ summaryOnly }) => {
    if (summaryOnly) {
        return (
            <div className="about-summary">
                <h2>About Unity Outreach</h2>
                <p>
                  Unity Outreach is a non-profit organization dedicated to empowering communities through education, healthcare, and sustainable development. Join us in making a lasting impact and transform the society.
                </p>
            </div>
        );
    }
    return (
        <section className="about">
            <h2>About Unity Outreach</h2>
            <p>
                Unity Outreach is a registered charity committed to creating brighter futures for children and families in need. Our mission is to provide access to quality education, essential healthcare, and sustainable resources for underserved communities. We believe in the power of unity and compassion to transform lives and build stronger, healthier societies.
            </p>
            <p>
                Since our founding, we have impacted thousands of lives through our programs, thanks to the generosity of our supporters and volunteers. We invite you to join our mission—together, we can make a difference that lasts for generations.
            </p>
        </section>
    );
};

export default About;
