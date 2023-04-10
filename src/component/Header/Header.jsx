import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div>
            <div className="text-gray-100">
                <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="relative flex items-center justify-between">
                        <Link className="ml-2 text-xl font-bold tracking-wide text-gray-900 uppercase" to="/">Company</Link>

                        <ul className="flex items-center hidden space-x-8 lg:flex">
                            <li>

                                <Link className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400" to="/statistics">Statistics</Link>

                            </li>
                            <li>
                                <Link className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400" to="/applied-jobs">Applied Jobs</Link>
                            </li>
                            <li>
                                <Link className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400" to="/blog">Blog</Link>
                            </li>

                        </ul>
                        <ul className="flex items-center hidden space-x-8 lg:flex">
                            <li>
                                <Link className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-700 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none" to="/apply">Star Applying</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </div>
            <div>
                <Banner></Banner>
            </div>

        </div>
    );
};

export default Header;


