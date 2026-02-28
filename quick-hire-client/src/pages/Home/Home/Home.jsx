import React from 'react';
import Banner from '../Banner/Banner';
import Companies from '../Companies/Companies';
import Category from '../Category/Category';
import JobToday from '../JobToday/JobToday';
import FeaturedJobs from '../../FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Companies></Companies>
            <Category></Category>
            <JobToday></JobToday>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;