// components/ui/search-bar.tsx
'use client';

import { FiSearch } from 'react-icons/fi';
import React, { useState } from 'react';

export default function SearchBar() {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle search
    };

    return (
        <form onSubmit={handleSubmit} className="relative w-full shadow-xl">
            <div className="flex justify-between items-center w-full">
                <div className="items-center pointer-events-none ">
                    <FiSearch className="text-gray-500 pr-5" size={20} />
                </div>
                <div className="w-full  text-white rounded-lg border-solid border-white-200">
                    <input
                        type="text"
                        placeholder="Performer, event, venue"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full focus:white-indigo-600 focus:outline-hidden"
                    />
                </div>
            </div>
        </form>
    );
}