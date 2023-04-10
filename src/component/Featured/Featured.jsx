import React, { useEffect, useState } from 'react';
import JobDetails from '../JobDetails/JobDetails';

const Featured = () => {


    const [feature,setFeature]= useState([]);
    const [seeAll, setSeeAll] = useState(false);

    useEffect(()=>{
        fetch('job.json')
        .then(res => res.json())
        .then(data =>setFeature(data))
    },[])
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        Featured Jobs
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Explore thousands of job opportunities with all the information you need. Its your future
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-2">
                        {
                            feature.slice(0,seeAll ? feature.length : 4)
                            .sort(()=>Math.random() -0.5)
                            .map((job)=>(
                                <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                            <span className="inline-block text-blue-500 dark:text-blue-400">
                                <img src={job.logo} alt="" />
                            </span>

                            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">{job.position}</h1>
                            <p > {job.companyName}</p>
                            <div className="flex items-center gap-2">
                                    <button className="px-2 py-1  border rounded-md ">
                                        {job.jobType}
                                    </button>
                                    <button className="px-2 py-1  border rounded-md ">
                                        Full Time
                                    </button>
                                </div>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-2">
                                <p>{job.location}</p>
                                <p>{job.salary}</p>
                            </div>
                            
                            <button
                                    type="button"
                                    className="px-6 py-2 font-bold text-cyan-50 border rounded-md bg-blue-500 mt-2"
                                >
                                    View Details
                                </button>

                            
                        </div>

                            ))
                        }
                           
                    </div>
                    <div className="flex justify-center w-full my-5">
                    <button
                        onClick={() => setSeeAll(!seeAll)}
                        type="button"
                        className="px-6 py-2 font-bold text-cyan-50 border rounded-md bg-blue-500 mt-2"
                    >
                        {seeAll ? "See Less" : "See All"}
                    </button>
                </div>
                </div>
            </section>

        </div>
    );
};

export default Featured;



