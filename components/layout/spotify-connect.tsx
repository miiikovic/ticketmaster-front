import Image from 'next/image';

export default function SpotifyConnect() {
    return (
        <div className="my-12 bg-gray-900 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
                <div className="relative w-24 h-24 mr-4">
                    <Image
                        src="/images/spotify-artists.jpg"
                        alt="Artists collage"
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">Connect to Spotify</h3>
                    <p className="text-gray-400">Be the first to know when your favorite artists play nearby.</p>
                </div>
            </div>

            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                Connect
            </button>
        </div>
    );
}