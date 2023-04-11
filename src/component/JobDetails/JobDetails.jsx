import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const allJobData = useLoaderData();
    const currentJobId = window.location.pathname.slice(-2);
    const singleJobData = allJobData.find((e) => e.id === currentJobId);
    console.log(singleJobData);
    return (
        <section className="dark:bg-gray-800 ">
            <div className="container flex flex-col mx-auto lg:flex-row mb-8">

                <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
                    <p className="mt-4 text-sm"><b>Job Description :</b> {singleJobData.jobDescription} </p>
                    <p className="mt-4 text-sm"><b>Job Responsibility:</b> {singleJobData.jobResponsibility} </p>
                    <p className="mt-4 text-sm"><b>Educational Requirements:</b> {singleJobData.educationalRequirements} </p>
                    <p className="mt-4 text-sm"><b>Experiences:</b> {singleJobData.experiences} </p>

                </div>
                <div className="w-full lg:w-1/3  ">
                    <div className="bg-blue-200 p-4 mr-5">
                        <h2 className="text-2xl mt-4">Job Details</h2>
                        <p className="mt-4 text-sm"><b>Salary : </b> {singleJobData.salary} </p>
                        <p className="mt-4 text-sm"><b>Job Title : </b> {singleJobData.position} </p>
                        <h2 className="text-2xl mt-4">Contact Information</h2>
                        <hr />
                        <p className="mt-4 text-sm"><b>Phone : </b> {singleJobData.phone} </p>
                        <p className="mt-4 text-sm"><b>Email : </b> {singleJobData.email} </p>
                        <p className="mt-4 text-sm"><b>Address : </b> {singleJobData.address} </p>
                    </div>
                    <button
                        type="button"
                        className="px-6 py-2 font-bold text-cyan-50 border rounded-md bg-blue-500 mt-2"
                    >
                        Apply Now
                    </button>
                </div>
            </div>


        </section>


    );
};

export default JobDetails;