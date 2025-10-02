import React from 'react';

const List = () => {
    return (
        <div className=' border p-8 absolut -(top-16) top-15 rounded-xl'>
            <ul className='flex flex-col gap-4 text-xl'>
                <li className='btn transform transition duration-300 hover:scale-110 border-none shadow-sm'>All Movies</li>
                <li className='btn transform transition duration-300 hover:scale-110 border-none shadow-sm'>Marvel Movies</li>
                <li className='btn transform transition duration-300 hover:scale-110 border-none shadow-sm'>Tamil Movies</li>
                <li className='btn transform transition duration-300 hover:scale-110 border-none shadow-sm'>Animated Movies</li>
            </ul>
        </div>
    );
};

export default List;