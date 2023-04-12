import React from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const allJobData = useLoaderData();
    const currentJobId = window.location.pathname.slice(-2);
    const singleJobData = allJobData.find((e) => e.id === currentJobId);




    const setToLocalStorage = () => {
        const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
        const jobExists = jobs.some((job) => job.id === singleJobData.id);

        if (!jobExists) {
            jobs.push(singleJobData);
            localStorage.setItem("jobs", JSON.stringify(jobs));
            toast.success("Job added successfully!");
        } else {
            toast.error("You already applied this job!");
        }
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
                            <span className="relative text-center">Job Details</span>
                        </span>{' '}
                        
                    </h2>

                </div>

            </div>


            <section className="bg-white  container flex flex-col-reverse mx-auto lg:flex-row">
                <div className="container flex flex-col  lg:flex-row mb-8 p-5 border     mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4 lg:py-4 px-6 py-8 space-y-6 rounded-sm ">

                    <div className="flex flex-col p-5 w-full pr-4 lg:w-2/3 ">
                        <p className="mt-4 text-sm"><b>Job Description :</b> {singleJobData.jobDescription} </p>
                        <p className="mt-4 text-sm"><b>Job Responsibility:</b> {singleJobData.jobResponsibility} </p>
                        <p className="mt-4 text-sm"><b>Educational Requirements:</b> {singleJobData.educationalRequirements} </p>
                        <p className="mt-4 text-sm"><b>Experiences:</b> {singleJobData.experiences} </p>

                    </div>
                    <div className="w-full lg:w-1/3  ">
                        <div className="bg-blue-200 p-4 border-md rounded-md">
                            <h2 className="text-2xl mt-4">Job Details</h2>
                            <p className="mt-4 text-sm"><b>Salary : </b> {singleJobData.salary} </p>
                            <p className="mt-4 text-sm"><b>Job Title : </b> {singleJobData.position} </p>
                            <h2 className="text-2xl mt-4">Contact Information</h2>
                            <hr className='h-[2px] bg-black' />
                            <p className="mt-4 text-sm"><b>Phone : </b> {singleJobData.phone} </p>
                            <p className="mt-4 text-sm"><b>Email : </b> {singleJobData.email} </p>
                            <p className="mt-4 text-sm"><b>Address : </b> {singleJobData.address} </p>
                        </div>
                        <button
                            type="button"
                            className="px-6 py-2 font-bold text-cyan-50 border-md rounded-md  bg-gradient-to-r from-blue-400 to-purple-500 mt-2"
                            onClick={() => setToLocalStorage()}>
                            Apply Now
                        </button>
                    </div>
                </div>


            </section>
        </div>

    );
};

export default JobDetails;

