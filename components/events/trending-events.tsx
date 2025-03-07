'use client';

import { useState } from 'react';
import EventCard from './event-card';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

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
    {
        id: 4,
        title: 'Monster Jam',
        date: 'Mar 8',
        price: 'From $50',
        imageUrl: '/images/monster-jam.jpg',
    },
];

export default function TrendingEvents() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 4;

    return (
        <section className="py-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Trending Events</h2>
                <div className="flex items-center">
                    <span className="text-sm text-white mr-2">{currentPage} of {totalPages}</span>
                    <div className="flex space-x-1">
                        <button
                            className="p-1 rounded-full bg-gray-800 text-white hover:bg-gray-700"
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            <FiChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            className="p-1 rounded-full bg-gray-800 text-white hover:bg-gray-700"
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            <FiChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {events.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
        </section>
    );
}