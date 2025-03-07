// app/page.tsx
import HeroSection from '@/components/layout/hero-section';
import TrendingEvents from '@/components/events/trending-events';
import SpotifyConnect from '@/components/layout/spotify-connect';
import BrowseEventsSection from '@/components/events/browse-events-section';

export default function Home() {
    return (
        <>
            <HeroSection />
            <div className="bg-black px-4 py-8">
                <div className="max-w-7xl mx-auto">
                    <TrendingEvents />
                    <SpotifyConnect />
                    <BrowseEventsSection />
                </div>
            </div>
        </>
    );
}