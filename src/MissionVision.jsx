import React from 'react';
import './MissionVision.css';

const MissionVision = () => {
    const coreValues = [
        {
            id: 1,
            title: "Compassion",
            icon: "❤️",
            description: "We lead with empathy and understanding, treating every individual with dignity and respect."
        },
        {
            id: 2,
            title: "Integrity",
            icon: "🤝",
            description: "We maintain the highest standards of transparency, accountability, and ethical conduct."
        },
        {
            id: 3,
            title: "Innovation",
            icon: "💡",
            description: "We embrace creative solutions and cutting-edge approaches to address complex challenges."
        },
        {
            id: 4,
            title: "Sustainability",
            icon: "🌱",
            description: "We create lasting impact through environmentally conscious and economically viable solutions."
        },
        {
            id: 5,
            title: "Collaboration",
            icon: "🤲",
            description: "We believe in the power of partnerships and community-driven approaches to change."
        },
        {
            id: 6,
            title: "Excellence",
            icon: "⭐",
            description: "We strive for the highest quality in everything we do, from programs to partnerships."
        }
    ];

    const goals = [
        {
            id: 1,
            title: "Education for All",
            target: "100,000+ children",
            description: "Provide quality education to underserved communities worldwide",
            progress: 75
        },
        {
            id: 2,
            title: "Healthcare Access",
            target: "500,000+ people",
            description: "Ensure basic healthcare services reach remote and vulnerable populations",
            progress: 60
        },
        {
            id: 3,
            title: "Community Development",
            target: "1,000+ communities",
            description: "Transform communities through sustainable development initiatives",
            progress: 45
        },
        {
            id: 4,
            title: "Environmental Impact",
            target: "10,000+ trees",
            description: "Create positive environmental impact through conservation efforts",
            progress: 80
        }
    ];

    return (
        <div className="mission-vision-page">
            <div className="mission-vision-header">
                <h1>Our Mission & Vision</h1>
                <p>Guided by compassion and driven by innovation, we're building a world where every community has the resources and opportunities to thrive.</p>
            </div>

            <div className="mission-section">
                <div className="mission-content">
                    <div className="mission-card">
                        <div className="mission-icon">🎯</div>
                        <h2>Our Mission</h2>
                        <p>To empower underserved communities worldwide through sustainable solutions in education, healthcare, and economic development. We believe that every individual deserves access to the resources and opportunities needed to build a better future.</p>
                        <div className="mission-highlights">
                            <div className="highlight">
                                <span className="highlight-icon">📚</span>
                                <span>Quality Education</span>
                            </div>
                            <div className="highlight">
                                <span className="highlight-icon">🏥</span>
                                <span>Healthcare Access</span>
                            </div>
                            <div className="highlight">
                                <span className="highlight-icon">💼</span>
                                <span>Economic Empowerment</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="vision-section">
                <div className="vision-content">
                    <div className="vision-card">
                        <div className="vision-icon">🔮</div>
                        <h2>Our Vision</h2>
                        <p>A world where every community, regardless of location or circumstance, has the tools, knowledge, and support needed to create sustainable, thriving societies. We envision a future where compassion drives innovation and unity creates lasting change.</p>
                        <div className="vision-aspirations">
                            <div className="aspiration">
                                <h4>Global Impact</h4>
                                <p>Reaching communities across all continents</p>
                            </div>
                            <div className="aspiration">
                                <h4>Sustainable Change</h4>
                                <p>Creating lasting solutions that endure</p>
                            </div>
                            <div className="aspiration">
                                <h4>Community Leadership</h4>
                                <p>Empowering local leaders and changemakers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="values-section">
                <h2>Our Core Values</h2>
                <p>These principles guide every decision we make and every action we take.</p>
                <div className="values-grid">
                    {coreValues.map(value => (
                        <div key={value.id} className="value-card">
                            <div className="value-icon">{value.icon}</div>
                            <h3>{value.title}</h3>
                            <p>{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="goals-section">
                <h2>Our Strategic Goals</h2>
                <p>Measurable objectives that drive our impact and guide our growth.</p>
                <div className="goals-grid">
                    {goals.map(goal => (
                        <div key={goal.id} className="goal-card">
                            <div className="goal-header">
                                <h3>{goal.title}</h3>
                                <span className="goal-target">{goal.target}</span>
                            </div>
                            <p className="goal-description">{goal.description}</p>
                            <div className="progress-container">
                                <div className="progress-bar">
                                    <div 
                                        className="progress-fill" 
                                        style={{ width: `${goal.progress}%` }}
                                    ></div>
                                </div>
                                <span className="progress-text">{goal.progress}% Complete</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="impact-section">
                <div className="impact-content">
                    <h2>Our Impact</h2>
                    <div className="impact-stats">
                        <div className="impact-stat">
                            <div className="stat-number">15+</div>
                            <div className="stat-label">Countries Served</div>
                        </div>
                        <div className="impact-stat">
                            <div className="stat-number">100K+</div>
                            <div className="stat-label">Lives Impacted</div>
                        </div>
                        <div className="impact-stat">
                            <div className="stat-number">500+</div>
                            <div className="stat-label">Projects Completed</div>
                        </div>
                        <div className="impact-stat">
                            <div className="stat-number">95%</div>
                            <div className="stat-label">Success Rate</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mission-cta">
                <h2>Join Our Mission</h2>
                <p>Be part of the change. Together, we can build a world where every community thrives.</p>
                <div className="cta-buttons">
                    <button className="btn-primary">Support Our Work</button>
                    <button className="btn-secondary">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default MissionVision;
