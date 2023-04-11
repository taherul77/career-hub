import React from 'react';

const JobCategory = ({category}) => {
    
    const { icon, vacancy, title } = category;
    return (

        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">

            <div>
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                    <img src={icon} alt="" />
                </div>
                <h6 className="mb-2 font-semibold leading-5">{title}</h6>
                <p className="mb-3 text-sm text-gray-900">
                    {vacancy}
                </p>
            </div>

        </div>

    );
};

export default JobCategory;