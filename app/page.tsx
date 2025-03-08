// app/page.tsx
import HeroSection from '@/components/layout/hero-section';
import TrendingEventsHero from '@/components/events/trending-events';
import SpotifyConnectHero from '@/components/layout/spotify-connect';
import BrowseEventsSection from '@/components/events/browse-events-section';
import Divider from "@/components/ui/divider";
import styles from '../styles/divider-dark.module.css'

export default function Home() {
    return (
        <main>
            <HeroSection>
                <TrendingEventsHero />
                <Divider className={styles.divider} marginY={0} />
                <SpotifyConnectHero />
            </HeroSection>
            <BrowseEventsSection />
        </main>
    );
}