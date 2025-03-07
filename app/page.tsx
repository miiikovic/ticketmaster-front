import HeroSection from '@/components/layout/hero-section';
import TrendingEvents from '@/components/events/trending-events';
import SpotifyConnect from '@/components/layout/spotify-connect';
import BrowseEventsSection from '@/components/events/browse-events-section';

export default function Home() {
  return (
      <main className="min-h-screen">
        <HeroSection />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <TrendingEvents />
          <SpotifyConnect />
          <BrowseEventsSection />
        </div>
      </main>
  );
}