import React, { useEffect, useState } from 'react';
import JobCategory from './JobCategory';

const Category = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])



    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4 lg:py-8">

                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        Job Category List
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Explore thousands of job opportunities with all the information you need. Its your future
                    </p>
                </div>
                <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {categories.map((category,index) =>
                 (
                   <JobCategory
                   Key={index}
                   category={category}
                   ></JobCategory>
                    
                     ))}

                </div>




            </div>
        </div >
    );
};

export default Category;
