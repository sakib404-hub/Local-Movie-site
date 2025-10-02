import { List, Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import Lists from './Lists';
import { NavLink, useNavigate } from 'react-router';

const Header = () => {

    const [toogle, setToogle] = useState(true)

    const path = useNavigate();
    const handleButtonClicked = () => {
        path('/tamilmovies')
    }

    return (
        <div className='flex items-center justify-between p-6 bg-[#456882]'>
            <div className='cursor-pointer flex items-center justify-center gap-2 '>
                <div
                    onClick={() => setToogle(!toogle)}>
                    {
                        toogle ? <Menu className={`lg:hidden`}></Menu> : <X className={`lg:hidden`}></X>
                    }
                </div>
                {/* {
                    toogle && <Lists></Lists>
                } */}
                <p className='text-2xl font-bold'>Local-Movies</p>
            </div>
            <div className=''>
                <ul className='hidden gap-8 text-xl lg:flex'>
                    <NavLink className='btn bg-[#234C6A] transform transition duration-300 hover:scale-110 border-none shadow-sm'
                        to='/allmovies'>All Movies</NavLink>
                    <NavLink className='btn bg-[#234C6A] transform transition duration-300 hover:scale-110 border-none shadow-sm'
                        to='/marvelmovies'>Marvel Movies</NavLink>
                    <button onClick={handleButtonClicked}>
                        <NavLink className='btn bg-[#234C6A] transform transition duration-300 hover:scale-110 border-none shadow-sm'
                            to='' >Tamil Movies</NavLink>
                    </button>
                    <NavLink className='btn bg-[#234C6A] transform transition duration-300 hover:scale-110 border-none shadow-sm' to='/animatedmovies'>Animated Movies</NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Header;