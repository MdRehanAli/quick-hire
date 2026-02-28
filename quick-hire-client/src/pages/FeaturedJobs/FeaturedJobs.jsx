import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useLoaderData } from 'react-router';
import JobCard from '../../component/JobCard';

const FeaturedJobs = () => {

    const jobs = useLoaderData()

    return (
        <div className="max-w-298.5 mx-auto w-11/12 my-12 mt-18">
            <div className="flex justify-between items-center">
                <h1 className='mb-12 text-5xl font-semibold'>Explore by <span className='text-secondary'>category</span></h1>
                <button className="text-primary font-medium flex items-center gap-4 hover:underline">
                    Show all jobs <FaArrowRight className='text-black' />
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    jobs.map(job => <JobCard key={job.id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;