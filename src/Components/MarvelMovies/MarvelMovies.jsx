import React from 'react';
import { useLoaderData } from 'react-router';
import MovieCard from '../MoviesCard/MovieCard';

const MarvelMovies = () => {
    const marvelMovies = useLoaderData();
    console.log(marvelMovies);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-10 p-10'>
            {
                marvelMovies.map((movie) => <MovieCard
                    movie={movie}
                    key={movie.id}></MovieCard>)
            }
        </div>
    );
};

export default MarvelMovies;