import React, { useEffect, useState } from 'react';

import JobFeatured from './JobFeatured';

const Featured = () => {


    const [feature, setFeature] = useState([]);
    const [seeAll, setSeeAll] = useState(false);
    

    useEffect(() => {
        fetch('job.json')
            .then(res => res.json())
            .then(data => setFeature(data))
    }, [])
    return (
        <div>
            <section className="bg-white">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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
                            feature.slice(0, seeAll ? feature.length : 4)
                                .sort(() => Math.random() - 0.5)
                                .map((job,index) => (
                                    <JobFeatured 
                                    key={index}
                                    job={job}
                                    id={job.id}
                                    ></JobFeatured>

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



