import React from 'react';

const SlideBar = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6">
              
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              One Step 
                <br className="hidden md:block" />
                Closer To Your{' '}
                <br />
                <span className="inline-block text-indigo-700">
                Dream Job
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
              Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-indigo-700 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                <span className="mr-3">Start Shopping</span>
                
              </a>
              
            </div>
          </div>
          <div className="relative lg:w-1/2">
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt=""
            />
            
          </div>
        </div>
      </div>
    );
};

export default SlideBar;
