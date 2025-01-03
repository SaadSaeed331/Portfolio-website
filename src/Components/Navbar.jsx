import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">My Portfolio</div>
                <div className="block lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div
                    className={`${isOpen ? 'block' : 'hidden'
                        } w-full lg:flex lg:items-center lg:w-auto`}
                >
                    <ul className="lg:flex lg:justify-between text-white">
                        <li className="lg:mx-4 my-2 lg:my-0">
                            <Link to="/" className="hover:text-gray-400">
                                Home
                            </Link>
                        </li>
                        <li className="lg:mx-4 my-2 lg:my-0">
                            <Link to="/about" className="hover:text-gray-400">
                                About
                            </Link>
                        </li>
                        <li className="lg:mx-4 my-2 lg:my-0">
                            <Link to="/about" className="hover:text-gray-400">
                                services
                            </Link>
                        </li>
                        <li className="lg:mx-4 my-2 lg:my-0">
                            <Link to="/about" className="hover:text-gray-400">
                                Contact
                            </Link>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;