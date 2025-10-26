import React, { useState } from 'react';
import { Menu, X, Film } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate();

    const handleButtonClicked = () => {
        navigate('/tamilmovies')
    }
    return (
        <header className="bg-gradient-to-r from-[aliceblue] via-[#e9f3ff] to-[#d8ecff] text-gray-800 shadow-lg sticky top-0 z-50 backdrop-blur-md border-b border-blue-100">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-2 py-4">
                {/* Logo + Menu Toggle */}
                <div className="flex items-center gap-3">
                    <button
                        className="lg:hidden focus:outline-none"
                        onClick={() => setToggle(!toggle)}
                    >
                        {toggle ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    <div
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <Film className="text-blue-500" size={30} />
                        <span className="text-2xl font-extrabold tracking-wide">
                            Local<span className="text-blue-600">Movies</span>
                        </span>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-6 text-lg font-medium">
                    <NavLink
                        to="/allmovies"
                        className="nav-link px-5 py-2 rounded-xl bg-white hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md border border-blue-100"
                    >
                        All Movies
                    </NavLink>
                    <NavLink
                        to="/marvelmovies"
                        className="nav-link px-5 py-2 rounded-xl bg-white hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md border border-blue-100"
                    >
                        Marvel Movies
                    </NavLink>
                    <NavLink
                        to={'/tamilmovies'}
                        className={'px-5 py-2 rounded-xl bg-white hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md border border-blue-100'}>
                        Tamil Movies
                    </NavLink>
                    <NavLink
                        to="/animatedmovies"
                        className="nav-link px-5 py-2 rounded-xl bg-white hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md border border-blue-100"
                    >
                        Animated Movies
                    </NavLink>
                </nav>
                <div className='btn'>
                    Login
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {toggle && (
                <div className="lg:hidden bg-gradient-to-b from-blue-50 to-white text-center py-4 space-y-3 border-t border-blue-100">
                    <NavLink
                        to="/allmovies"
                        className="block hover:text-blue-600 font-medium transition-colors"
                        onClick={() => setToggle(false)}
                    >
                        All Movies
                    </NavLink>
                    <NavLink
                        to="/marvelmovies"
                        className="block hover:text-blue-600 font-medium transition-colors"
                        onClick={() => setToggle(false)}
                    >
                        Marvel Movies
                    </NavLink>
                    <button
                        onClick={() => {
                            handleButtonClicked();
                            setToggle(false);
                        }}
                        className="block hover:text-blue-600 font-medium transition-colors w-full"
                    >
                        Tamil Movies
                    </button>
                    <NavLink
                        to="/animatedmovies"
                        className="block hover:text-blue-600 font-medium transition-colors"
                        onClick={() => setToggle(false)}
                    >
                        Animated Movies
                    </NavLink>
                </div>
            )}
        </header>
    );
};

export default Header;
