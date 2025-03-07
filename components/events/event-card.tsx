'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiHeart } from 'react-icons/fi';

interface EventCardProps {
    event: {
        id: number;
        title: string;
        date: string;
        price: string;
        imageUrl: string;
    };
}

export default function EventCard({ event }: EventCardProps) {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <div className="relative rounded-lg overflow-hidden bg-gray-900">
            <Link href={`/events/${event.id}`}>
                <div className="relative h-48 w-full">
                    <Image
                        src={event.imageUrl}
                        alt={event.title}
                        fill
                        className="object-cover"
                    />
                </div>
            </Link>

            <button
                className="absolute top-2 right-2 p-2 rounded-full bg-black bg-opacity-50 text-white"
                onClick={() => setIsFavorite(!isFavorite)}
            >
                <FiHeart
                    className={`w-5 h-5 ${isFavorite ? 'fill-current text-red-500' : ''}`}
                />
            </button>

            <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{event.title}</h3>
                <p className="text-sm text-gray-400">{event.date}</p>
                <p className="text-sm text-gray-400">{event.price}</p>
            </div>
        </div>
    );
}