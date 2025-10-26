import React from 'react';
import { useLoaderData } from 'react-router';
import MovieCard from '../MoviesCard/MovieCard';

const TamilMovies = () => {
    const tamilMovies = useLoaderData();
    return (
        <div className='flex items-center justify-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-10 p-10'>
                {
                    tamilMovies.map((movie) => <MovieCard
                        movie={movie}
                        key={movie.id}></MovieCard>)
                }
            </div>
        </div>
    );
};

export default TamilMovies;