// components/layout/navbar.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            padding: '20px 0'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                {/* Left side - Logo and navigation */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '32px'
                }}>
                    {/* Logo */}
                    <Link href="/" style={{
                        color: '#ff5b49',
                        fontWeight: 'bold',
                        fontSize: '20px',
                        textDecoration: 'none'
                    }}>
                        TM
                    </Link>

                    {/* Desktop Navigation */}
                    <nav style={{
                        display: 'flex',
                        gap: '24px'
                    }}>
                        <Link href="/concerts" style={{
                            color: 'white',
                            textDecoration: 'none',
                            fontSize: '14px'
                        }}>
                            Concerts
                        </Link>
                        <Link href="/parties" style={{
                            color: 'white',
                            textDecoration: 'none',
                            fontSize: '14px'
                        }}>
                            Parties
                        </Link>
                        <Link href="/sports" style={{
                            color: 'white',
                            textDecoration: 'none',
                            fontSize: '14px'
                        }}>
                            Sports
                        </Link>
                        <Link href="/shows" style={{
                            color: 'white',
                            textDecoration: 'none',
                            fontSize: '14px'
                        }}>
                            Shows
                        </Link>
                    </nav>
                </div>

                {/* Right side - Utility links */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px'
                }}>
                    {/* Currency selector */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        color: 'white',
                        fontSize: '14px'
                    }}>

                    </div>

                    {/* Sell link */}
                    <Link href="/sell" style={{
                        color: 'white',
                        textDecoration: 'none',
                        fontSize: '14px'
                    }}>
                        Sell
                    </Link>

                    {/* Support link */}
                    <Link href="/support" style={{
                        color: 'white',
                        textDecoration: 'none',
                        fontSize: '14px'
                    }}>
                        Support
                    </Link>

                    {/* Log in button */}
                    <Link href="/login" style={{
                        backgroundColor: '#333',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        fontSize: '14px'
                    }}>
                        Log in
                    </Link>

                    {/* Mobile menu toggle - only visible on mobile */}
                    <button
                        style={{
                            display: 'none', // Hide on desktop
                            background: 'none',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer'
                        }}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu - only visible when menu is open on mobile */}
            {menuOpen && (
                <div style={{
                    backgroundColor: '#222',
                    padding: '16px',
                    display: 'none' // Hidden by default, would be shown with media queries
                }}>
                    <nav style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px'
                    }}>
                        <Link href="/concerts" style={{
                            color: 'white',
                            textDecoration: 'none'
                        }}>
                            Concerts
                        </Link>
                        <Link href="/parties" style={{
                            color: 'white',
                            textDecoration: 'none'
                        }}>
                            Parties
                        </Link>
                        <Link href="/sports" style={{
                            color: 'white',
                            textDecoration: 'none'
                        }}>
                            Sports
                        </Link>
                        <Link href="/shows" style={{
                            color: 'white',
                            textDecoration: 'none'
                        }}>
                            Shows
                        </Link>
                        <Link href="/sell" style={{
                            color: 'white',
                            textDecoration: 'none'
                        }}>
                            Sell
                        </Link>
                        <Link href="/support" style={{
                            color: 'white',
                            textDecoration: 'none'
                        }}>
                            Support
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}