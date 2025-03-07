// components/events/trending-events-hero.tsx
'use client';

import { FiHeart, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useState } from 'react';

// Sample event data
const events = [
    {
        id: 1,
        title: 'Warriors at Nets',
        date: 'Mar 6',
        price: 'From $205',
        imageUrl: '/images/warriors-nets.jpg',
    },
    {
        id: 2,
        title: 'Blue Jackets at Panthers',
        date: 'Mar 6',
        price: 'From $24',
        imageUrl: '/images/hockey-game.jpg',
    },
    {
        id: 3,
        title: 'Grand National Tour: Kendrick Lamar and SZA',
        date: 'Apr 26',
        price: 'From $120',
        imageUrl: '/images/kendrick-sza.webp',
    },
    {
        id: 4,
        title: 'Monster Jam',
        date: 'Mar 8',
        price: 'From $50',
        imageUrl: '/images/monsterjam.jpg',
    },
];

export default function TrendingEventsHero() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 4; // Example value

    return (
        <section className="events-section-hero">
            <h2>
                Trending Events
                <div className="pagination-controls">
                    <span className="pagination-text">{currentPage} of {totalPages}</span>
                    <button
                        className="control-button"
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                    >
                        <FiChevronLeft />
                    </button>
                    <button
                        className="control-button"
                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                    >
                        <FiChevronRight />
                    </button>
                </div>
            </h2>

            <div className="events-grid">
                {events.map((event) => (
                    <EventCardHero key={event.id} event={event} />
                ))}
            </div>
        </section>
    );
}

function EventCardHero({ event }) {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <div className="event-card-hero">
            <div className="event-image-hero">
                <img src={event.imageUrl} alt={event.title} />
                <button
                    className="favorite-button"
                    onClick={() => setIsFavorite(!isFavorite)}
                >
                    <FiHeart style={{ fill: isFavorite ? '#ff5b49' : 'none' }} />
                </button>
            </div>

            <div className="event-details-hero">
                <h3>{event.title}</h3>
                <p>{event.date}</p>
                <p>{event.price}</p>
            </div>
        </div>
    );
}