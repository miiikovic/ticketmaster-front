'use client';

import { FiSearch } from 'react-icons/fi';
import React, { useState } from 'react';

export default function SearchBar() {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle search
        console.log('Searching for:', query);
    };

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <div className="search-wrapper">
                <div className="search-icon-container">
                    <FiSearch className="search-icon" />
                </div>
                <input
                    type="text"
                    placeholder="What do you want to see live?"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="search-input"
                />
            </div>
        </form>
    );
}