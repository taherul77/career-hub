import React from 'react';
import image from '../../assets/hardy.png'
const SlideBar = () => {
  return (
    <div className=" bg-slate-100 mx-auto sm:max-w-xl  md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className=" lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className=" space-y-4 text-center lg:text-left px-5 md:px-0 max-w-xl mb-6">

            <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold ">
              One Step
              <br className="hidden md:block" />
              Closer To Your{' '}
              <br />
              <span className="inline-block text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
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
              className="px-6 py-2 font-bold text-cyan-50 border-md rounded-md bg-blue-500  bg-gradient-to-r from-blue-400 to-purple-500"
            >
              <span className="mr-3">Start Shopping</span>

            </a>

          </div>
        </div>
        <div className="relative lg:w-1/2">
          <img
            className="h-[25.5rem]"
            src={image}
            alt=""
          />

        </div>
      </div>
    </div>
  );
};

export default SlideBar;
