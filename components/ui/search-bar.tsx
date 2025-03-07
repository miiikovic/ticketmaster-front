'use client';

import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle search logic
        console.log('Searching for:', searchQuery);
    };

    return (
        <form onSubmit={handleSearch} className="relative">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                    type="text"
                    className="block w-full bg-white border-0 py-4 pl-10 pr-3 text-gray-900 placeholder-gray-500 rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:outline-none"
                    placeholder="What do you want to see live?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
        </form>
    );
}