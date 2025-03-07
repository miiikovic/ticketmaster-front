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
        <form onSubmit={handleSubmit} style={{
            width: '100%',
            maxWidth: '600px',
            margin: '0 auto'
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '0 16px',
                height: '56px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
            }}>
                <FiSearch style={{
                    color: '#888',
                    width: '20px',
                    height: '20px',
                    marginRight: '12px'
                }} />

                <input
                    type="text"
                    placeholder="What do you want to see live?"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    style={{
                        flex: '1',
                        border: 'none',
                        padding: '0',
                        fontSize: '16px',
                        outline: 'none',
                        backgroundColor: 'transparent'
                    }}
                />
            </div>
        </form>
    );
}