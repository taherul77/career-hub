import React from 'react';
import { Link } from 'react-router-dom';




const Header = () => {

    return (
        <div>

            <div className="bg-slate-100 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4 py-5 md:py-0">
                <div className="md:flex md:justify-around md:items-center space-y-3 md:space-y-0 md:h-20">
                    <div className="flex justify-center md:justify-start">
                        <Link
                            to={"/"}
                            className="text-4xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
                        >
                            Perfect Career
                        </Link>
                    </div>

                    <div className="flex justify-center gap-5 md:flex md:justify-between md:items-center md:gap-4 font-medium">
                        <div>
                            <Link
                                to={"/"}
                                className={({ isActive }) =>
                                    isActive ? "active" : "default"
                                }
                            >
                                Home
                            </Link>
                        </div>

                        <div>
                            <Link
                                to={"/statistics"}
                                className={({ isActive }) =>
                                    isActive ? "active" : "default"
                                }
                            >
                                Statistics
                            </Link>
                        </div>

                        <div>
                            <Link
                                to={"/applied-job"}
                                className={({ isActive }) =>
                                    isActive ? "active" : "default"
                                }
                            >
                                Applied Jobs
                            </Link>
                        </div>

                        <div>
                            <Link
                                to={"/blog"}
                                className={({ isActive }) =>
                                    isActive ? "active" : "default"
                                }
                            >
                                Blog
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:flex justify-center md:justify-end">
                        <button
                            type="button"
                            className="px-6 py-2 font-bold text-cyan-50 border-md rounded-md  bg-gradient-to-r from-blue-400 to-purple-500 "
                        >
                            Star Applying
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;




