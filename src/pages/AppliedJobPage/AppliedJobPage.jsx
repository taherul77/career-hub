import React, { useEffect, useState } from "react";
import AppliedJobs from "../../component/AppliedJobs/AppliedJobs";


const AppliedJobPage = () => {


  const [jobs, setJobs] = useState([]);
  const [selectedJobType, setSelectedJobType] = useState("");
 
  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem('jobs') || '[]');
    setJobs(storedJobs);
  }, [])
  const filteredJobs = jobs.filter((job) => job.jobType === selectedJobType);

    const handleClearFilter = () => {
        setSelectedJobType("");
    };

    const handleOnsiteClick = () => {
        setSelectedJobType("Onsite");
    };

    const handleRemoteClick = () => {
        setSelectedJobType("Remote");
    };





  return (
    <div>
         <div className=" bg-slate-100 px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative text-center ">Applied Jobs</span>
                        </span>{' '}
                        
                    </h2>

                </div>

            </div>

  
    <div className="max-w-2xl mx-auto py-5">
  
    {jobs.length > 0 && (
        <div className="flex justify-center md:justify-end items-center gap-2 px-5 md:px-0">
            <button
                onClick={handleClearFilter}
                className="px-2 py-1 font-bold text-cyan-50 border-md rounded-md bg-blue-500 bg-gradient-to-r from-purple-500 to-blue-400 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500  delay-75 duration-100 transition-all"
            >
                Clear Filter
            </button>
            <button
                onClick={handleRemoteClick}
                className="px-2 py-1 font-bold text-cyan-50 border-md rounded-md bg-blue-500 bg-gradient-to-r from-purple-500 to-blue-400 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500  delay-75 duration-100 transition-all"
            >
                Remote Job
            </button>
            <button
                onClick={handleOnsiteClick}
                className="px-2 py-1 font-bold text-cyan-50 border-md rounded-md bg-blue-500 bg-gradient-to-r from-purple-500 to-blue-400 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500  delay-75 duration-100 transition-all"
            >
                Onsite Job
            </button>
        </div>
    )}
    {jobs.length === 0 ? (
        <h1 className="text-center font-bold text-4xl mt-10 text-[#3B82F6]">
            You don't applied any job yet!
        </h1>
    ) : selectedJobType.length > 0 ? (
        filteredJobs.map((data, index) => (
            <AppliedJobs data={data} key={index} />
        ))
    ) : (
        jobs.map((data, index) => (
            <AppliedJobs data={data} key={index} />
        ))
    )}
</div>
</div>
  );
};

export default AppliedJobPage;
