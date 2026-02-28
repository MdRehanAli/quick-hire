import React, { use } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import JobCard from '../../component/JobCard';
import LatestJobCard from './LatestJobCard';


const LatestJobs = ({ jobsPromise }) => {

    const jobs = use(jobsPromise);

    return (
        <div className="max-w-298.5 mx-auto w-11/12 my-12 mt-18">
            <div className="flex justify-between items-center">
                <h1 className='mb-12 text-5xl font-semibold'>Latest<span className='text-secondary'> jobs open</span></h1>
                <button className="text-primary font-medium flex items-center gap-4 hover:underline">
                    Show all jobs <FaArrowRight className='text-black' />
                </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    jobs.map(job => <LatestJobCard key={job.id} job={job}></LatestJobCard>)
                }
            </div>
        </div>
    );
};

export default LatestJobs;