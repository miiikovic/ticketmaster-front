// app/page.tsx
import HeroSection from '@/components/layout/hero-section';
import TrendingEventsHero from '@/components/events/trending-events';
import SpotifyConnectHero from '@/components/layout/spotify-connect';
import BrowseEventsSection from '@/components/events/browse-events-section';

export default function Home() {
    return (
        <main>
            <HeroSection>
                <TrendingEventsHero />
                <SpotifyConnectHero />
            </HeroSection>
            <BrowseEventsSection />
        </main>
    );
}