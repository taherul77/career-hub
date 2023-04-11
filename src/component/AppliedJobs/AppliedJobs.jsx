import React from 'react';
import { Link } from 'react-router-dom';

const AppliedJobs = ({ data }) => {
    const { logo, position, companyName, jobType, location, salary,id} = data;
    return (
        <div className="my-5">

            <div className="mx-52 flex justify-between items-center border p-5 ">
                <div className="flex gap-10">
                    <div className="">
                        <img className="h-24" src={logo} alt="" />
                    </div>
                    <div className="">
                        <h1 className="font-bold mb-2">{position}</h1>
                        <p className="mb-1">{companyName}</p>
                        <div className="flex gap-2 ">
                            <button className="px-2 py-1  border rounded-md text-blue-600">{jobType}</button>
                            <button className="px-2 py-1  border rounded-md text-blue-600">Full Time</button>
                        </div>
                        <div className="flex gap-5 mt-1">
                            <p>{location}</p>
                            <p className="">{salary}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to={`/job-details/${id}`}>
                    <button
                        type="button"
                        className="px-6 py-2 font-bold text-cyan-50 border-md rounded-md bg-blue-500  bg-gradient-to-r from-purple-500 to-blue-400"
                    >
                        View Details
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;