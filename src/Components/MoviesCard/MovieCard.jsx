import React from 'react';
import { Star } from 'lucide-react'; // lightweight rating icon

const MovieCard = ({ movie }) => {
    const { title, genre, image, rating, synopsis } = movie;

    return (
        <div className="relative bg-gray-800 text-white rounded-2xl overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl w-80">
            {/* Poster Image */}
            <div className="h-88 w-full overflow-hidden">
                <img
                    src={image}
                    alt={`${title} Poster`}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
            </div>

            {/* Movie Info */}
            <div className="p-5 flex flex-col gap-2">
                <h2 className="text-xl font-bold line-clamp-1">{title}</h2>
                <p className="text-sm text-gray-300 italic">{genre}</p>

                <div className="flex items-center gap-1">
                    <Star className="text-yellow-400 w-5 h-5 fill-yellow-400" />
                    <span className="font-semibold">{rating}/10</span>
                </div>

                <p className="text-sm text-gray-300 line-clamp-3">{synopsis}</p>
            </div>

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"></div>
        </div>
    );
};

export default MovieCard;
