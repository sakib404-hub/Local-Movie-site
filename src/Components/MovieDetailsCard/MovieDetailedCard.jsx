import React from "react";
import { Star, Clock, Film, User } from "lucide-react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

const MovieDetailsCard = ({ movie }) => {
    const {
        title,
        genre,
        language,
        releaseYear,
        rating,
        director,
        cast,
        duration,
        synopsis,
        image,
    } = movie;

    // Dummy chart data
    const ratingData = [
        { category: "IMDb", value: 7.3 },
        { category: "Rotten", value: 6.8 },
        { category: "Metacritic", value: 7.1 },
        { category: "Audience", value: 7.9 },
        { category: "Critics", value: 6.5 },
    ];

    return (
        <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto bg-gradient-to-br from-[aliceblue] to-[#eaf6ff] rounded-2xl shadow-xl overflow-hidden border border-blue-100 my-10">
            {/* Poster */}
            <div className="w-full md:w-1/2 h-[450px] overflow-hidden">
                <img
                    src={image}
                    alt={`${title} Poster`}
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                />
            </div>

            {/* Movie Info */}
            <div className="w-full md:w-1/2 p-8 flex flex-col gap-4 text-gray-800">
                <h2 className="text-4xl font-extrabold text-blue-700">{title}</h2>
                <p className="text-sm text-gray-500 italic">
                    {genre} • {language} • {releaseYear}
                </p>

                {/* Rating & Duration */}
                <div className="flex items-center gap-4 text-gray-700 mt-2">
                    <div className="flex items-center gap-1">
                        <Star className="text-yellow-400 fill-yellow-400 w-5 h-5" />
                        <span className="font-semibold">{rating}/10</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="w-5 h-5 text-blue-500" />
                        <span>{duration} min</span>
                    </div>
                </div>

                {/* Director */}
                <div className="flex items-center gap-2 mt-2">
                    <Film className="w-5 h-5 text-blue-600" />
                    <span>
                        <span className="font-semibold">Director:</span> {director}
                    </span>
                </div>

                {/* Cast */}
                <div className="flex items-start gap-2">
                    <User className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                        <span className="font-semibold">Cast:</span>{" "}
                        {cast && cast.length > 0 ? cast.join(", ") : "Not available"}
                    </div>
                </div>

                {/* Synopsis */}
                <p className="text-gray-700 mt-3 leading-relaxed text-justify">
                    {synopsis}
                </p>

                {/* Rating Analysis Chart */}
                <div className="mt-6 w-full h-64 bg-white rounded-xl p-4 shadow-inner border border-blue-100">
                    <h3 className="text-lg font-semibold mb-2 text-blue-700 text-center">
                        Rating Comparison
                    </h3>
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart data={ratingData}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="category" />
                            <PolarRadiusAxis angle={30} domain={[0, 10]} />
                            <Radar
                                name="Ratings"
                                dataKey="value"
                                stroke="#2563eb"
                                fill="#3b82f6"
                                fillOpacity={0.5}
                            />
                            <Tooltip />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>

                <button className="mt-6 self-start px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all shadow-md">
                    Watch Trailer
                </button>
            </div>
        </div>
    );
};

export default MovieDetailsCard;
