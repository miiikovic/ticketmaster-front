'use client';

import { useState } from 'react';
import SearchBar from '@/components/ui/search-bar';

export default function HeroSection() {
    return (
        <div className="relative h-screen">
            {/* Background - dark with stadium lighting */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-0 bg-black">
                <div className="absolute inset-0 bg-[url('/images/stadium-bg.jpg')] bg-no-repeat bg-cover bg-center opacity-40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4">
                    Let there be live
                </h1>
                <p className="text-xl sm:text-2xl text-white mb-8">
                    Your next best-night-ever is waiting
                </p>
                <div className="w-full max-w-xl">
                    <SearchBar />
                </div>
            </div>
        </div>
    );
}