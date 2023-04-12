import React from 'react';

import { Link } from 'react-router-dom';

const JobFeatured = ({ job }) => {

    const { logo, position, companyName, jobType, location, salary, id } = job;


    return (

        <div className="p-8 space-y-3 border-2 border-blue-400 rounded-xl">
            <span className="inline-block text-blue-500 ">
                <img src={logo} alt="" />
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize">{position}</h1>
            <p > {companyName}</p>

            <div className="flex items-center gap-2">
                <div className='border rounded-md bg-gradient-to-r from-blue-300 to-purple-300 p-[2px]'>
                    <div className='items-center border rounded-md justify-center bg-white'>
                        <button className="px-5 py-1 text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 ">
                            {jobType}
                        </button>
                    </div>

                </div>

                <div className='border rounded-md bg-gradient-to-r from-blue-300 to-purple-300 p-[2px]'>
                    <div className='items-center border rounded-md justify-center bg-white'>
                        <button className="px-5 py-1 text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 ">
                        Full Time
                        </button>
                    </div>

                </div>
            </div>

            <div className="grid sm:grid-cols-2  lg:grid-cols-2">
                <p > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                    <span className='ml-2'>{location}</span></p>
                <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                    <span className='ml-2'>{salary}</span></p>
            </div>
            <Link to={`/job-details/${id}`}>
                <div className='py-4'>
                    <button
                        type="button"
                        className="px-6 py-2 font-bold text-cyan-50 border-md rounded-md  bg-gradient-to-r from-blue-400 to-purple-500"
                    >
                        View Details
                    </button>
                </div>
            </Link>
        </div>
    );
};

export default JobFeatured;