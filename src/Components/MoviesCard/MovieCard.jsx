import React from 'react';

const MovieCard = ({ movie }) => {
    const { title, genre, image, rating, synopsis } = movie;
    console.log(image)
    return (
        <div className=' flex flex-col items-center justify-center p-4 rounded-lg bg-gray-600 shadow-2xl'>
            <div className='h-[300px] w-[250px]'>
                <img src={image} alt="ThumNail Image" className='h-full w-full' />
            </div>
            <div className='flex flex-col items-center justify-center text-center'>
                <p className='text-xl font-semibold'>{title}</p>
                <p>{genre}</p>
                <p>IMDB : {rating}</p>
                <p>{synopsis}</p>
            </div>
        </div>
    );
};

export default MovieCard;