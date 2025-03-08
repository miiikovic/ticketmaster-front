'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll events to add background to navbar when scrolled
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-content container">
                {/* Left side - Logo and navigation */}
                <div className="navbar-left">
                    {/* Logo */}
                    <Link href="/" className="logo">
                        TM
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="nav-links">
                        <Link href="/concerts">Concerts</Link>
                        <Link href="/parties">Parties</Link>
                        <Link href="/sports">Sports</Link>
                        <Link href="/shows">Shows</Link>
                    </nav>
                </div>

                {/* Right side - Utility links */}
                <div className="navbar-right">
                    {/* Utility links - desktop only */}
                    <div className="utility-links">
                        <Link href="/sell">Sell</Link>
                        <Link href="/support">Support</Link>
                        <Link href="/login" className="login-button">
                            Log in
                        </Link>
                    </div>

                    {/* Mobile menu toggle */}
                    <button
                        className="menu-toggle"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                    >
                        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`mobile-menu ${menuOpen ? 'mobile-menu-open' : ''}`}>
                <nav>
                    <Link href="/concerts" onClick={() => setMenuOpen(false)}>Concerts</Link>
                    <Link href="/parties" onClick={() => setMenuOpen(false)}>Parties</Link>
                    <Link href="/sports" onClick={() => setMenuOpen(false)}>Sports</Link>
                    <Link href="/shows" onClick={() => setMenuOpen(false)}>Shows</Link>
                    <Link href="/sell" onClick={() => setMenuOpen(false)}>Sell</Link>
                    <Link href="/support" onClick={() => setMenuOpen(false)}>Support</Link>
                    <Link href="/login" onClick={() => setMenuOpen(false)} className="mobile-login">
                        Log in
                    </Link>
                </nav>
            </div>
        </header>
    );
}