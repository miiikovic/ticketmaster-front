// src/components/events/trending-events.tsx
'use client';

import { useState, useEffect } from 'react';

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
        title: 'Rockets at Pelicans',
        date: 'Mar 6',
        price: 'From $7',
        imageUrl: '/images/basketball-game.jpg',
    },
];

export default function TrendingEvents() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check screen size on mount
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768); // 768px is typical md breakpoint
        };

        // Initial check
        checkScreenSize();

        // Add resize listener
        window.addEventListener('resize', checkScreenSize);

        // Cleanup
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <section className="py-6">
            <h2 className="text-xl font-bold text-white mb-4">Trending Events</h2>

            <div className={isMobile ? "space-y-4" : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"}>
                {events.map((event) => (
                    isMobile ? (
                        <EventCardMobile key={event.id} event={event} />
                    ) : (
                        <EventCardDesktop key={event.id} event={event} />
                    )
                ))}
            </div>
        </section>
    );
}

function EventCardMobile({ event }: { event: any }) {
    return (
        <div className="flex items-center space-x-3">
            <div className="w-20 h-20 flex-shrink-0 relative bg-gray-800 rounded-md">
                <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-full object-cover rounded-md"
                />
            </div>
            <div className="flex-1">
                <h3 className="font-medium text-white">{event.title}</h3>
                <p className="text-sm text-gray-400">{event.price} · {event.date}</p>
            </div>
        </div>
    );
}

function EventCardDesktop({ event }: { event: any }) {
    return (
        <div className="relative rounded-lg overflow-hidden bg-gray-900">
            <div className="relative h-48 w-full">
                <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{event.title}</h3>
                <p className="text-sm text-gray-400">{event.date}</p>
                <p className="text-sm text-gray-400">{event.price}</p>
            </div>
        </div>
    );
}