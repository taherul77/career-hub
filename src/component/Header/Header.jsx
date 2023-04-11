import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div>
            <div className=" bg-slate-100 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4">
                <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="relative flex items-center justify-between">
                        <Link className="ml-2   tracking-wide text-3xl font-bold  text-gray-900 uppercase" to="/">MY CAREER</Link>

                        <ul className="flex items-center hidden space-x-8 lg:flex">
                            <li>

                                <Link className="" to="/statistics">Statistics</Link>

                            </li>
                            <li>
                                <Link className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400" to="/applied-job">Applied Jobs</Link>
                            </li>
                            <li>
                                <Link className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400" to="/blog">Blog</Link>
                            </li>

                        </ul>
                        <ul className="flex items-center hidden space-x-8 lg:flex">
                            <li>
                                <Link className="px-6 py-2 font-bold text-cyan-50 border-md rounded-md bg-blue-500  bg-gradient-to-r from-blue-400 to-purple-500" to="/apply">Star Applying</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </div>
            <div>
               
            </div>

        </div>
    );
};

export default Header;


