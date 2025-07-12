import React from 'react';
import './Stats.css';

const Stats = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="stats-card text-center p-8 rounded-lg shadow-lg text-white bg-blue-600">
                        <div className="text-4xl font-bold mb-2">25+</div>
                        <div className="text-lg">Countries Reached</div>
                    </div>
                    <div className="stats-card text-center p-8 rounded-lg shadow-lg text-white bg-blue-600">
                        <div className="text-4xl font-bold mb-2">500K+</div>
                        <div className="text-lg">Lives Impacted</div>
                    </div>
                    <div className="stats-card text-center p-8 rounded-lg shadow-lg text-white bg-blue-600">
                        <div className="text-4xl font-bold mb-2">100+</div>
                        <div className="text-lg">Community Projects</div>
                    </div>
                    <div className="stats-card text-center p-8 rounded-lg shadow-lg text-white bg-blue-600">
                        <div className="text-4xl font-bold mb-2">50+</div>
                        <div className="text-lg">Global Partners</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
