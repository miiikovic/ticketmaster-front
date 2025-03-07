// src/components/layout/hero-section.tsx
import SearchBar from "@/components/ui/search-bar";

export default function HeroSection() {
    return (
        <section className="relative bg-black h-screen flex flex-col items-center justify-center text-white">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/stadium-bg.jpg"
                    alt="Stadium"
                    className="w-full h-full object-cover opacity-40"
                />
            </div>

            <div className="relative z-10 text-center px-4 max-w-md mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">Let there be live</h1>
                <p className="text-xl mb-8">Your next best-night-ever is waiting</p>

                <SearchBar />
            </div>
        </section>
    );
}