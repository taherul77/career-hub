import React from 'react';

import { Link } from 'react-router-dom';

const JobFeatured = ({ job }) => {

    const { logo, position, companyName, jobType, location, salary, id } = job;

  
    return (

        <div className="p-8 space-y-3 border-2 border-blue-400rounded-xl">
            <span className="inline-block text-blue-500 ">
                <img src={logo} alt="" />
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">{position}</h1>
            <p > {companyName}</p>
            <div className="flex items-center gap-2">
                <button className="px-2 py-1  border rounded-md ">
                    {jobType}
                </button>
                <button className="px-2 py-1  border rounded-md ">
                    Full Time
                </button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-2">
                <p>{location}</p>
                <p>{salary}</p>
            </div>
            <Link to={`/job-details/${id}`}>
                <button
                    type="button"
                    className="px-6 py-2 font-bold text-cyan-50 border-md rounded-md bg-blue-500  bg-gradient-to-r from-blue-400 to-purple-500"
                   >
                    View Details
                </button>
            </Link>
        </div>
    );
};

export default JobFeatured;