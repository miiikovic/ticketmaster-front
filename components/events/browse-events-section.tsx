'use client';

import { useState } from 'react';
import { FiHeart, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styles from '../../styles/browse-events-section.module.css';
import Divider from "@/components/ui/divider";

// Simple Category Card component for browse section
function CategoryCard({ category }) {
    return (
        <div className={styles.categoryCard}>
            <div className={styles.categoryImage}>
                <img src={category.imageUrl} alt={category.title} />
            </div>
            <div className={styles.categoryTitle}>
                <h3>{category.title}</h3>
            </div>
        </div>
    );
}

// Artist Card with favorite button
function ArtistCard({ artist }) {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <div className={styles.artistCard}>
            <div className={styles.artistImage}>
                <img src={artist.imageUrl} alt={artist.name} />
                <button
                    className={styles.favoriteButton}
                    onClick={() => setIsFavorite(!isFavorite)}
                >
                    <FiHeart style={{ fill: isFavorite ? '#ff5b49' : 'none' }} />
                </button>
            </div>
            <div className={styles.artistDetails}>
                <h3 className={styles.artistName}>{artist.name}</h3>
            </div>
        </div>
    );
}

// Pagination Controls
function PaginationControls({ currentPage, totalPages, onPageChange }) {
    return (
        <div className={styles.paginationControls}>
            <span className={styles.pageIndicator}>{currentPage} of {totalPages}</span>
            <div className={styles.paginationButtons}>
                <button
                    onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className={styles.paginationButton}
                >
                    <FiChevronLeft />
                </button>
                <button
                    onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className={styles.paginationButton}
                >
                    <FiChevronRight />
                </button>
            </div>
        </div>
    );
}

const BrowseEventsSection = () => {

    const [categoryPage, setCategoryPage] = useState(1);
    const [artistPage, setArtistPage] = useState(1);

    // Sample category data
    const categories = [
        { id: 1, title: 'Concerts', imageUrl: '/images/concerts.webp' },
        { id: 2, title: 'NBA', imageUrl: '/images/nba.jpeg' },
        { id: 3, title: 'MLB Baseball', imageUrl: '/images/baseball.jpeg' },
        { id: 4, title: 'NCAA Men\'s Basketball', imageUrl: '/images/ncaa.jpg' }
    ];

    // Sample artist data
    const artists = [
        { id: 1, name: 'Kendrick Lamar', imageUrl: '/images/kendrick-sza.webp' },
        { id: 2, name: 'Post Malone', imageUrl: '/images/postmalone.webp' },
        { id: 3, name: 'The Millennium Tour', imageUrl: '/images/millenium.jpg' }
    ];

    return (
        <section className={styles.browseEventsSection}>
            <div className={styles.browseEventsContainer}>
                {/* Location header with browse events title */}
                <div className={styles.header}>
                    <div className={styles.browseLabel}>
                        <span>Browse Events</span>
                    </div>
                    <div className={styles.locationRow}>
                        <h2 className={styles.locationTitle}>Wien, 7th March</h2>
                        <div className={styles.locationButtons}>
                            <button className={styles.filterButton}>
                                Change Location
                            </button>
                            <button className={styles.filterButton}>
                                Filter by Date
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Divider/>
            <div className={styles.browseEventsContainer}>


                {/* Categories section */}
                <div className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Categories</h2>
                        <PaginationControls
                            currentPage={categoryPage}
                            totalPages={4}
                            onPageChange={setCategoryPage}
                        />
                    </div>
                    <div className={styles.grid}>
                        {categories.map(category => (
                            <CategoryCard key={category.id} category={category} />
                        ))}
                    </div>
                </div>

                {/* Top Artists section */}
                <div className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Top Artists</h2>
                        <PaginationControls
                            currentPage={artistPage}
                            totalPages={7}
                            onPageChange={setArtistPage}
                        />
                    </div>
                    <div className={styles.grid}>
                        {artists.map(artist => (
                            <ArtistCard key={artist.id} artist={artist} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrowseEventsSection;