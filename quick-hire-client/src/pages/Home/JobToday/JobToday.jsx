import React from 'react';
import dashboard from '../../../assets/Dash.png'

const JobToday = () => {
    return (
        <div className='bg-primary max-w-7xl mx-auto w-11/12 pt-17 px-17 flex flex-col md:flex-row justify-between items-center gap-10'>
            <div className='text-white'>
                <h1 className='font-semibold text-5xl '>Start posting <br /> jobs today</h1>
                <p className='my-6'>Start posting jobs for only $10.</p>
                <button className='btn bg-white text-primary font-bold px-6 py-3 rounded-none'>Sign Up For Free</button>
            </div>
            <img src={dashboard} alt="Dashboard" />
        </div>
    );
};

export default JobToday;