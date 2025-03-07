'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black bg-opacity-80 backdrop-blur-sm fixed w-full z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link href="/">
                                <span className="text-orange-500 font-bold text-xl">SEAT GEEK</span>
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link href="/sports" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                                    Sports
                                </Link>
                                <Link href="/music" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                                    Music
                                </Link>
                                <Link href="/shows" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                                    Shows
                                </Link>
                                <Link href="/cities" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                                    Cities
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            <button className="bg-transparent text-white px-3 py-2 text-sm">
                                <span className="flag-icon">🇺🇸</span> USD
                            </button>
                            <Link href="/sell" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                                Sell
                            </Link>
                            <Link href="/support" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                                Support
                            </Link>
                            <Link href="/login" className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium ml-3">
                                Log in
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}