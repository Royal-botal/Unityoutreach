import React from 'react';
import './Founders.css';

const Founders = () => {
    const founders = [
        {
            id: 1,
            name: "Dr. Sarah Johnson",
            role: "Executive Director & Co-Founder",
            image: "👩‍⚕️",
            bio: "A passionate humanitarian with over 15 years of experience in international development. Dr. Johnson holds a PhD in Public Health and has worked in over 20 countries.",
            achievements: ["Led 50+ community health initiatives", "Established 15 medical clinics", "Trained 500+ healthcare workers"],
            expertise: ["Public Health", "Community Development", "Healthcare Systems"],
            quote: "Every life we touch is a step toward a better world."
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Chief Operations Officer & Co-Founder",
            image: "👨‍💼",
            bio: "Former corporate executive turned philanthropist, Michael brings strategic vision and operational excellence to Unity Outreach. His business acumen drives sustainable impact.",
            achievements: ["Scaled operations to 15 countries", "Implemented 100+ development projects", "Mobilized $50M in resources"],
            expertise: ["Strategic Planning", "Operations Management", "Resource Mobilization"],
            quote: "Sustainable change requires both heart and strategy."
        },
        {
            id: 3,
            name: "Dr. Amina Hassan",
            role: "Director of Education Programs",
            image: "👩‍🏫",
            bio: "Education specialist with a deep commitment to empowering communities through knowledge. Dr. Hassan has revolutionized educational access in underserved regions.",
            achievements: ["Built 25 schools", "Educated 10,000+ children", "Developed innovative curricula"],
            expertise: ["Education Policy", "Curriculum Development", "Teacher Training"],
            quote: "Education is the foundation of lasting change."
        },
        {
            id: 4,
            name: "David Rodriguez",
            role: "Director of Emergency Response",
            image: "👨‍🚒",
            bio: "Former emergency services professional who coordinates rapid response efforts during crises. David ensures Unity Outreach is always ready to help when disaster strikes.",
            achievements: ["Responded to 30+ disasters", "Provided aid to 100,000+ people", "Established emergency protocols"],
            expertise: ["Emergency Management", "Disaster Response", "Crisis Coordination"],
            quote: "In times of crisis, every second counts."
        }
    ];

    return (
        <div className="founders-page">
            <div className="founders-header">
                <h1>Our Founders</h1>
                <p>Meet the visionary leaders who transformed compassion into a global movement for change.</p>
            </div>

            <div className="founders-intro">
                <div className="intro-content">
                    <h2>The Visionaries Behind Unity Outreach</h2>
                    <p>Our founders bring together diverse expertise in healthcare, education, operations, and emergency response. Their shared vision of a more equitable world drives every initiative we undertake.</p>
                    <div className="intro-stats">
                        <div className="intro-stat">
                            <span className="stat-number">4</span>
                            <span className="stat-text">Founding Leaders</span>
                        </div>
                        <div className="intro-stat">
                            <span className="stat-number">50+</span>
                            <span className="stat-text">Years Combined Experience</span>
                        </div>
                        <div className="intro-stat">
                            <span className="stat-number">100+</span>
                            <span className="stat-text">Countries Impacted</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="founders-grid">
                {founders.map(founder => (
                    <div key={founder.id} className="founder-card">
                        <div className="founder-image">
                            <div className="image-placeholder">{founder.image}</div>
                        </div>
                        <div className="founder-content">
                            <div className="founder-header">
                                <h3>{founder.name}</h3>
                                <span className="founder-role">{founder.role}</span>
                            </div>
                            <p className="founder-bio">{founder.bio}</p>
                            
                            <div className="founder-achievements">
                                <h4>Key Achievements</h4>
                                <ul>
                                    {founder.achievements.map((achievement, index) => (
                                        <li key={index}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="founder-expertise">
                                <h4>Areas of Expertise</h4>
                                <div className="expertise-tags">
                                    {founder.expertise.map((skill, index) => (
                                        <span key={index} className="expertise-tag">{skill}</span>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="founder-quote">
                                <blockquote>"{founder.quote}"</blockquote>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="founders-story">
                <div className="story-content">
                    <h2>Our Story</h2>
                    <p>Unity Outreach began in 2018 when our founders came together with a shared vision: to create sustainable, community-driven solutions to global challenges. What started as a small local initiative has grown into an international organization impacting hundreds of thousands of lives.</p>
                    <p>Today, we continue to be guided by our founders' original principles: transparency, accountability, and unwavering commitment to those we serve.</p>
                </div>
            </div>

            <div className="founders-cta">
                <h2>Join Our Mission</h2>
                <p>Be part of the change our founders envisioned. Support our work and help us continue building a better world for all.</p>
                <div className="cta-buttons">
                    <button className="btn-primary">Support Our Work</button>
                    <button className="btn-secondary">Meet Our Team</button>
                </div>
            </div>
        </div>
    );
};

export default Founders;
