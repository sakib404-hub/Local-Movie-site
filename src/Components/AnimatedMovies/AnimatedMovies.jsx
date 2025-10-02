import React from 'react';
import { useLoaderData } from 'react-router';
import MovieCard from '../MoviesCard/MovieCard';

const AnimatedMovies = () => {
    const animatedMovies = useLoaderData();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 p-10'>
            {
                animatedMovies.map((movie) => <MovieCard
                    movie={movie}
                    key={movie.id}></MovieCard>)
            }
        </div>
    );
};

export default AnimatedMovies;