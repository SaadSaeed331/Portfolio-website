import React, { useState } from 'react';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#051923] fixed w-full top-0 z-10 p-4 ">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-[#00A6FB] text-2xl font-bold">My Portfolio</div>
                <div className="block lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className=" text-[#00A6FB]  focus:outline-none"
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
                    <ul className="lg:flex lg:justify-between text-[#00A6FB]">
                        <li className="lg:mx-4 my-2 lg:my-0">
                            <a href="#landsec" className="hover:text-gray-200 duration-200">
                                Home
                            </a>
                        </li>
                        <li className="lg:mx-4 my-2 lg:my-0">
                            <a href="#about" className="hover:text-gray-200 duration-200">
                                About
                            </a>
                        </li>
                        <li className="lg:mx-4 my-2 lg:my-0">
                            <a href="#projects" className="hover:text-gray-200 duration-200">
                                Projects
                            </a>
                        </li>
                        <li className="lg:mx-4 my-2 lg:my-0">
                            <a href="#contact" className="hover:text-gray-200 duration-200">
                                Contact
                            </a>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;