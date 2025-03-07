// app/layout.tsx

import '@/app/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import React from "react";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Ticketmaster - Find Tickets for Sports, Concerts & More',
    description: 'Buy and sell tickets for sports, concerts, theater, and more events.',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} bg-black text-white`}
                suppressHydrationWarning
            >
            <Navbar />
            {children}
            <Footer />
            </body>
        </html>
    );
}