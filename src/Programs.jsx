import React from 'react';
import './Programs.css';

const Programs = () => {
    const programs = [
        {
            id: 1,
            title: "Education for All",
            icon: "📚",
            description: "Providing quality education to underserved communities through school construction, teacher training, and educational materials.",
            impact: "10,000+ children educated",
            features: ["School Construction", "Teacher Training", "Educational Materials", "Scholarship Programs"],
            status: "Active"
        },
        {
            id: 2,
            title: "Healthcare Access",
            icon: "🏥",
            description: "Improving healthcare access through mobile clinics, medical supplies, and health education programs.",
            impact: "25,000+ patients served",
            features: ["Mobile Clinics", "Medical Supplies", "Health Education", "Vaccination Drives"],
            status: "Active"
        },
        {
            id: 3,
            title: "Community Development",
            icon: "🏘️",
            description: "Empowering communities through sustainable development projects, clean water initiatives, and economic empowerment.",
            impact: "50+ communities transformed",
            features: ["Clean Water Projects", "Economic Empowerment", "Infrastructure Development", "Skills Training"],
            status: "Active"
        },
        {
            id: 4,
            title: "Emergency Relief",
            icon: "🚨",
            description: "Providing immediate assistance during natural disasters and humanitarian crises.",
            impact: "100,000+ lives impacted",
            features: ["Emergency Shelter", "Food Distribution", "Medical Aid", "Reconstruction"],
            status: "On-Demand"
        },
        {
            id: 5,
            title: "Youth Empowerment",
            icon: "🌟",
            description: "Supporting young people through leadership training, career development, and mentorship programs.",
            impact: "5,000+ youth empowered",
            features: ["Leadership Training", "Career Development", "Mentorship", "Entrepreneurship"],
            status: "Active"
        },
        {
            id: 6,
            title: "Environmental Conservation",
            icon: "🌱",
            description: "Protecting our planet through reforestation, waste management, and environmental education.",
            impact: "1,000+ trees planted",
            features: ["Reforestation", "Waste Management", "Environmental Education", "Clean Energy"],
            status: "Active"
        }
    ];

    return (
        <div className="programs-page">
            <div className="programs-header">
                <h1>Our Programs</h1>
                <p>We tackle critical global challenges through targeted, sustainable programs that address root causes and create lasting change.</p>
            </div>

            <div className="programs-stats">
                <div className="stat-card">
                    <div className="stat-number">6</div>
                    <div className="stat-label">Active Programs</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">15+</div>
                    <div className="stat-label">Countries Served</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">100K+</div>
                    <div className="stat-label">Lives Impacted</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">95%</div>
                    <div className="stat-label">Success Rate</div>
                </div>
            </div>

            <div className="programs-grid">
                {programs.map(program => (
                    <div key={program.id} className="program-card">
                        <div className="program-icon">{program.icon}</div>
                        <div className="program-content">
                            <div className="program-header">
                                <h3>{program.title}</h3>
                                <span className={`status-badge ${program.status.toLowerCase()}`}>
                                    {program.status}
                                </span>
                            </div>
                            <p className="program-description">{program.description}</p>
                            <div className="program-impact">
                                <span className="impact-text">📈 {program.impact}</span>
                            </div>
                            <div className="program-features">
                                <h4>Key Features:</h4>
                                <ul>
                                    {program.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                            <button className="learn-more-btn">Learn More</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="programs-cta">
                <h2>Support Our Programs</h2>
                <p>Your donation helps us continue these vital programs and expand our impact to reach more communities in need.</p>
                <div className="cta-buttons">
                    <button className="btn-primary">Donate Now</button>
                    <button className="btn-secondary">Volunteer</button>
                </div>
            </div>
        </div>
    );
};

export default Programs;
