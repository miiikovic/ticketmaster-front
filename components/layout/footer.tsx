'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

export default function Footer() {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle the phone number submission
        console.log('Sending link to:', phoneNumber);
        setPhoneNumber('');
    };

    return (
        <footer className="bg-white text-gray-800 mt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Desktop footer */}
                <div className="hidden md:grid grid-cols-4 gap-8">
                    <div>
                        <h3 className="font-bold text-lg mb-6">Download the App</h3>
                        <form onSubmit={handleSubmit} className="mb-4">
                            <div className="relative flex items-center max-w-md">
                                <input
                                    type="text"
                                    className="w-full rounded-lg border border-gray-300 py-3 px-4 pr-10 text-sm focus:outline-none"
                                    placeholder="Enter phone number to send a link"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 text-gray-600 hover:text-gray-900"
                                >
                                    <FiArrowRight className="h-5 w-5" />
                                </button>
                            </div>
                        </form>
                        <p className="text-sm text-gray-500 mb-4">Message and data rates may apply.</p>
                        <div className="flex space-x-4">
                            <Link href="https://apps.apple.com/app/ticketmaster" className="block">
                                <Image
                                    src="/images/app-store.png"
                                    alt="Download on the App Store"
                                    width={140}
                                    height={42}
                                    className="h-10 w-auto"
                                />
                            </Link>
                            <Link href="https://play.google.com/store/apps/details?id=com.ticketmaster" className="block">
                                <Image
                                    src="/images/google-play.png"
                                    alt="Get it on Google Play"
                                    width={140}
                                    height={42}
                                    className="h-10 w-auto"
                                />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-6">Resources</h3>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
                            <li><Link href="/press" className="text-gray-600 hover:text-gray-900">Press</Link></li>
                            <li><Link href="/jobs" className="text-gray-600 hover:text-gray-900">Jobs</Link></li>
                            <li><Link href="/inclusion" className="text-gray-600 hover:text-gray-900">Inclusion</Link></li>
                            <li><Link href="/accessibility" className="text-gray-600 hover:text-gray-900">Digital Accessibility</Link></li>
                            <li><Link href="/blog" className="text-gray-600 hover:text-gray-900">Ticketmaster Blog</Link></li>
                            <li><Link href="/support" className="text-gray-600 hover:text-gray-900">Help & Support</Link></li>
                            <li><Link href="/sell" className="text-gray-600 hover:text-gray-900">Sell on Ticketmaster</Link></li>
                            <li><Link href="/enterprise" className="text-gray-600 hover:text-gray-900">Ticketmaster Enterprise</Link></li>
                            <li><Link href="/creators" className="text-gray-600 hover:text-gray-900">Ticketmaster Creators</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-6">Social</h3>
                        <ul className="space-y-3">
                            <li><Link href="https://twitter.com/ticketmaster" className="text-gray-600 hover:text-gray-900">Twitter</Link></li>
                            <li><Link href="https://facebook.com/ticketmaster" className="text-gray-600 hover:text-gray-900">Facebook</Link></li>
                            <li><Link href="https://instagram.com/ticketmaster" className="text-gray-600 hover:text-gray-900">Instagram</Link></li>
                            <li><Link href="https://tiktok.com/@ticketmaster" className="text-gray-600 hover:text-gray-900">TikTok</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-6">Developers</h3>
                        <ul className="space-y-3">
                            <li><Link href="/platform" className="text-gray-600 hover:text-gray-900">Platform</Link></li>
                            <li><Link href="/dev-blog" className="text-gray-600 hover:text-gray-900">Developer Blog</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Mobile footer */}
                <div className="md:hidden space-y-8">
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg">Resources</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
                            <li><Link href="/press" className="text-gray-600 hover:text-gray-900">Press</Link></li>
                            <li><Link href="/jobs" className="text-gray-600 hover:text-gray-900">Jobs</Link></li>
                            <li><Link href="/inclusion" className="text-gray-600 hover:text-gray-900">Inclusion</Link></li>
                            <li><Link href="/accessibility" className="text-gray-600 hover:text-gray-900">Digital Accessibility</Link></li>
                            <li><Link href="/blog" className="text-gray-600 hover:text-gray-900">Ticketmaster Blog</Link></li>
                            <li><Link href="/support" className="text-gray-600 hover:text-gray-900">Help & Support</Link></li>
                            <li><Link href="/sell" className="text-gray-600 hover:text-gray-900">Sell on Ticketmaster</Link></li>
                            <li><Link href="/enterprise" className="text-gray-600 hover:text-gray-900">Ticketmaster Enterprise</Link></li>
                            <li><Link href="/creators" className="text-gray-600 hover:text-gray-900">Ticketmaster Creators</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-bold text-lg">Social</h3>
                        <ul className="space-y-2">
                            <li><Link href="https://twitter.com/ticketmaster" className="text-gray-600 hover:text-gray-900">Twitter</Link></li>
                            <li><Link href="https://facebook.com/ticketmaster" className="text-gray-600 hover:text-gray-900">Facebook</Link></li>
                            <li><Link href="https://instagram.com/ticketmaster" className="text-gray-600 hover:text-gray-900">Instagram</Link></li>
                            <li><Link href="https://tiktok.com/@ticketmaster" className="text-gray-600 hover:text-gray-900">TikTok</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-bold text-lg">Developers</h3>
                        <ul className="space-y-2">
                            <li><Link href="/platform" className="text-gray-600 hover:text-gray-900">Platform</Link></li>
                            <li><Link href="/dev-blog" className="text-gray-600 hover:text-gray-900">Developer Blog</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <div className="flex space-x-4">
                            <Link href="https://apps.apple.com/app/ticketmaster" className="block">
                                <Image
                                    src="/images/app-store.png"
                                    alt="Download on the App Store"
                                    width={140}
                                    height={42}
                                    className="h-10 w-auto"
                                />
                            </Link>
                            <Link href="https://play.google.com/store/apps/details?id=com.ticketmaster" className="block">
                                <Image
                                    src="/images/google-play.png"
                                    alt="Get it on Google Play"
                                    width={140}
                                    height={42}
                                    className="h-10 w-auto"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom section with logo and links */}
                <div className="pt-8 mt-8 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row items-center md:items-start justify-between space-y-4 md:space-y-0">
                        <div className="flex flex-col items-center md:items-start space-y-2">
                            <Link href="/" className="block">
                                <div className="w-36 h-12 relative">
                                    <span className="font-bold text-xl text-[#ff5b49]">TICKETMASTER</span>
                                </div>
                            </Link>
                            <p className="text-sm text-gray-500">© 2025 Ticketmaster. All rights reserved.</p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4 text-sm">
                            <div className="flex items-center">
                                <span className="mr-1">🇺🇸</span>
                                <span>USD</span>
                            </div>
                            <Link href="/privacy-choices" className="text-gray-600 hover:text-gray-900 flex items-center">
                                <span className="mr-1 text-blue-600">✓</span>
                                Your privacy choices
                            </Link>
                            <Link href="/terms" className="text-gray-600 hover:text-gray-900">Terms</Link>
                            <Link href="/privacy" className="text-gray-600 hover:text-gray-900">Privacy</Link>
                            <Link href="/site-map" className="text-gray-600 hover:text-gray-900">Site map</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}