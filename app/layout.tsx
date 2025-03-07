// app/layout.tsx
import '@/app/globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import React from "react";

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
        <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
        </body>
        </html>
    );
}