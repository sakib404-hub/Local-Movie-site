import React, { use } from 'react';
import MovieCard from '../MoviesCard/MovieCard';

const Allmovies = ({ allMovies }) => {

    const allMoviesData = use(allMovies)
    console.log(allMoviesData);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 p-10'>
            {
                allMoviesData.map((movie) => <MovieCard
                    movie={movie}
                    key={movie.id}></MovieCard>)
            }
        </div>
    );
};

export default Allmovies;