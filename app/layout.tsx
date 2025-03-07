import '@/app/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'SeatGeek Clone - Find Tickets for Sports, Concerts & More',
    description: 'Buy and sell tickets for sports, concerts, theater, and more events.',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={`${inter.className} bg-black text-white`}>
        <Navbar />
        {children}
        <Footer />
        </body>
        </html>
    );
}