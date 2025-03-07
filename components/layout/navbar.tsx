// components/layout/navbar.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="absolute top-0 left-0 right-0 z-40">
            <div className="bg-black py-4 px-4">
                <div className="flex items-center justify-between">
                    {/* Mobile menu toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <FiMenu size={24} />
                    </button>

                    {/* Logo */}
                    <div className="text-[#ff5b49] font-bold text-xl">
                        TICKETMASTER
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex gap-12">
                        <Link href="/sports" className="text-white">Sports</Link>
                        <Link href="/music" className="text-white">Music</Link>
                        <Link href="/shows" className="text-white">Shows</Link>
                        <Link href="/cities" className="text-white">Cities</Link>
                    </nav>

                    {/* Sign in button */}
                    <Link href="/login" className="bg-white text-black px-4 py-2 rounded-md">
                        Sign in
                    </Link>
                </div>

                {/* Mobile menu dropdown */}
                {menuOpen && (
                    <div className="md:hidden mt-4 pt-4 border-t border-gray-700">
                        <nav className="flex flex-col space-y-4">
                            <Link href="/sports" className="text-white">Sports</Link>
                            <Link href="/music" className="text-white">Music</Link>
                            <Link href="/shows" className="text-white">Shows</Link>
                            <Link href="/cities" className="text-white">Cities</Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}