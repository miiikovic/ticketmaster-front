'use client';

import { useState, useEffect } from 'react';
import SearchBar from "@/components/ui/search-bar";

const backgroundImages = [
    '/images/concert-bg.jpg',
    '/images/party-bg.jpg',
    '/images/sports-bg.jpg',
    '/images/show-bg.jpg'
];

export default function HeroSection({ children }) {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    // Image carousel effect
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveImageIndex((prev) => (prev + 1) % backgroundImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero-container">
            {/* Background image carousel */}
            <div className="hero-background">
                {backgroundImages.map((image, index) => (
                    <div
                        key={index}
                        className={`hero-bg-image ${index === activeImageIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${image})` }}
                    ></div>
                ))}

                {/* Dark overlay */}
                <div className="hero-overlay"></div>
            </div>

            {/* Stadium lights - hidden on small screens */}
            <div className="stadium-light right"></div>
            <div className="stadium-light left"></div>

            <div className="hero-content">
                <h1>Unleash the Night</h1>
                <p>Your next best-night-ever is waiting</p>

                <div className="search-container">
                    <SearchBar />
                </div>

                {/* Trending Events section directly in hero */}
                <div className="hero-bottom-content">
                    {children}
                </div>
            </div>
        </section>
    );
}