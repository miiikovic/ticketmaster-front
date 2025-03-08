'use client';

import { useState, useEffect } from 'react';

export default function SpotifyConnectHero() {
    const [isMobile, setIsMobile] = useState(false);

    // Check if we're on mobile
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        checkIfMobile();

        // Add event listener for resize
        window.addEventListener('resize', checkIfMobile);

        // Cleanup
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    return (
        <div className="spotify-section">
            {isMobile ? (
                // Mobile design (like SeatGeek)
                <div className="spotify-container-mobile">
                    <div className="artist-images-row">
                        {[1, 2, 3, 4, 5].map((index) => (
                            <div key={index} className="artist-image">
                                <img
                                    src={`/images/artist-${index}.jpg`}
                                    alt={`Artist ${index}`}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="spotify-text-mobile">
                        <h3>Connect to Spotify</h3>
                        <p>Be the first to know when your favorite artists play nearby.</p>
                    </div>
                    <button className="spotify-button-mobile">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="spotify-icon">
                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                        </svg>
                        Connect
                    </button>
                </div>
            ) : (
                // Desktop design (original)
                <div className="spotify-container">
                    <div className="spotify-content">
                        <div className="artist-avatars">
                            {[1, 2, 3, 4, 5].map((index) => (
                                <div
                                    key={index}
                                    className="artist-avatar"
                                    style={{ zIndex: 5 - index }}
                                >
                                    <img
                                        src={`/images/artist-${index}.jpg`}
                                        alt={`Artist ${index}`}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="spotify-text">
                            <h3>Connect to Spotify</h3>
                            <p>Be the first to know when your favorite artists play nearby.</p>
                        </div>
                    </div>
                    <button className="spotify-button">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="spotify-icon">
                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                        </svg>
                        Connect
                    </button>
                </div>
            )}
        </div>
    );
}