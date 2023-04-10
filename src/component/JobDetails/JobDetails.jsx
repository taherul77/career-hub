import React from 'react';

const JobDetails = () => {
    return (
        <div>
            <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <div>
                            <p>Job Description: </p>
                            <p>Job Responsibility:</p>
                            <p>Educational Requirements:</p>
                            <p>Experiences:</p>
                        </div>
                     
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                            <span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
                            <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
                            <p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                            <button type="button" className="self-start">Action</button>
                        </div>
                    </div>
                  
                    
                </div>
            </section>
        </div>
    );
};

export default JobDetails;