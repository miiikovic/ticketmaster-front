// components/layout/footer.tsx
'use client';

import Link from 'next/link';
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
        <footer className="footer">
            <div className="container">
                {/* Desktop footer */}
                <div className="footer-grid">
                    <div className="footer-column">
                        <h3 className="footer-heading">Download the App</h3>
                        <form onSubmit={handleSubmit} className="phone-form">
                            <div className="phone-input-container">
                                <input
                                    type="text"
                                    className="phone-input"
                                    placeholder="Enter phone number to send a link"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="input-button"
                                >
                                    <FiArrowRight />
                                </button>
                            </div>
                        </form>
                        <p className="text-note">Message and data rates may apply.</p>
                        <div className="app-buttons">
                            <Link href="https://apps.apple.com/app/ticketmaster" className="app-button">
                                <img
                                    src="/images/app-store.png"
                                    alt="Download on the App Store"
                                    className="app-button-image"
                                />
                            </Link>
                            <Link href="https://play.google.com/store/apps/details?id=com.ticketmaster" className="app-button">
                                <img
                                    src="/images/google-play.png"
                                    alt="Get it on Google Play"
                                    className="app-button-image"
                                />
                            </Link>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h3 className="footer-heading">Resources</h3>
                        <ul className="footer-links">
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/press">Press</Link></li>
                            <li><Link href="/jobs">Jobs</Link></li>
                            <li><Link href="/inclusion">Inclusion</Link></li>
                            <li><Link href="/accessibility">Digital Accessibility</Link></li>
                            <li><Link href="/blog">Ticketmaster Blog</Link></li>
                            <li><Link href="/support">Help & Support</Link></li>
                            <li><Link href="/sell">Sell on Ticketmaster</Link></li>
                            <li><Link href="/enterprise">Ticketmaster Enterprise</Link></li>
                            <li><Link href="/creators">Ticketmaster Creators</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3 className="footer-heading">Social</h3>
                        <ul className="footer-links">
                            <li><Link href="https://twitter.com/ticketmaster">Twitter</Link></li>
                            <li><Link href="https://facebook.com/ticketmaster">Facebook</Link></li>
                            <li><Link href="https://instagram.com/ticketmaster">Instagram</Link></li>
                            <li><Link href="https://tiktok.com/@ticketmaster">TikTok</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3 className="footer-heading">Developers</h3>
                        <ul className="footer-links">
                            <li><Link href="/platform">Platform</Link></li>
                            <li><Link href="/dev-blog">Developer Blog</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Mobile footer */}
                <div className="footer-mobile">
                    <div className="mobile-section">
                        <h3 className="footer-heading">Resources</h3>
                        <ul className="footer-links">
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/press">Press</Link></li>
                            <li><Link href="/jobs">Jobs</Link></li>
                            <li><Link href="/inclusion">Inclusion</Link></li>
                            <li><Link href="/accessibility">Digital Accessibility</Link></li>
                            <li><Link href="/blog">Ticketmaster Blog</Link></li>
                            <li><Link href="/support">Help & Support</Link></li>
                            <li><Link href="/sell">Sell on Ticketmaster</Link></li>
                            <li><Link href="/enterprise">Ticketmaster Enterprise</Link></li>
                            <li><Link href="/creators">Ticketmaster Creators</Link></li>
                        </ul>
                    </div>

                    <div className="mobile-section">
                        <h3 className="footer-heading">Social</h3>
                        <ul className="footer-links">
                            <li><Link href="https://twitter.com/ticketmaster">Twitter</Link></li>
                            <li><Link href="https://facebook.com/ticketmaster">Facebook</Link></li>
                            <li><Link href="https://instagram.com/ticketmaster">Instagram</Link></li>
                            <li><Link href="https://tiktok.com/@ticketmaster">TikTok</Link></li>
                        </ul>
                    </div>

                    <div className="mobile-section">
                        <h3 className="footer-heading">Developers</h3>
                        <ul className="footer-links">
                            <li><Link href="/platform">Platform</Link></li>
                            <li><Link href="/dev-blog">Developer Blog</Link></li>
                        </ul>
                    </div>

                    <div className="mobile-section">
                        <div className="app-buttons">
                            <Link href="https://apps.apple.com/app/ticketmaster" className="app-button">
                                <img
                                    src="/images/app-store.png"
                                    alt="Download on the App Store"
                                    className="app-button-image"
                                />
                            </Link>
                            <Link href="https://play.google.com/store/apps/details?id=com.ticketmaster" className="app-button">
                                <img
                                    src="/images/google-play.png"
                                    alt="Get it on Google Play"
                                    className="app-button-image"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom section with logo and links */}
                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <div className="footer-logo-section">
                            <Link href="/" className="footer-logo">
                                <span>TICKETMASTER</span>
                            </Link>
                            <p className="copyright">© 2025 Ticketmaster. All rights reserved.</p>
                        </div>

                        <div className="footer-meta-links">
                            <div className="currency-selector">
                                <span className="flag">🇺🇸</span>
                                <span>USD</span>
                            </div>
                            <Link href="/privacy-choices" className="meta-link privacy-choices">
                                <span className="checkmark">✓</span>
                                Your privacy choices
                            </Link>
                            <Link href="/terms" className="meta-link">Terms</Link>
                            <Link href="/privacy" className="meta-link">Privacy</Link>
                            <Link href="/site-map" className="meta-link">Site map</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}