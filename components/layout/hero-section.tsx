// components/layout/hero-section.tsx
'use client';

import SearchBar from "@/components/ui/search-bar";

const backgroundImages = [
    '/images/concert-bg.jpg',
    '/images/party-bg.jpg',
    '/images/sports-bg.jpg',
    '/images/show-bg.jpg'
];

export default function HeroSection({ children }) {

    return (
        <section className="hero-container">
            {/* Background image carousel */}
            <div className="hero-background">

                {/* Dark overlay */}
                <div className="hero-overlay"></div>
            </div>

            {/* Stadium lights - left and right */}
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