import React from 'react';
import imageUrl from '../../../assets/Pattern.png'
import man from '../../../assets/man.png'
import line from '../../../assets/Line.png'

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${imageUrl})` }} className='bg-[#F8F8FD] bg-right bg-no-repeat'>
            <div className='mx-auto max-w-7xl w-11/12'>
                <div className='flex flex-col md:flex-row gap-16'>
                    <div className='flex-1 pt-20'>
                        <h1 className='text-7xl font-semibold'>Discover more than <span className='text-secondary'>5000+ <br />Jobs</span></h1>
                        <img className='my-5' src={line} alt="Line" />
                        <p className='text-[#515B6F]'>Great platform for the job seeker that searching for new career heights and passionate about startups.</p>
                        <form className='flex flex-col md:flex-row items-center gap-2 w-full overflow-visible my-5 p-4 bg-white'>
                            <input className='w-full border-b-2 pb-1 border-[#20243010]' type="text" name="" id="" placeholder='Job title or keyword' />
                            <select defaultValue="Florence, Italy" className="w-full border-b-2 pb-2 border-[#20243010]">
                                <option disabled={true}>Florence, Italy</option>
                                <option>Milan, Italy</option>
                                <option>Torino, Italy</option>
                                <option>Roma, Italy</option>
                            </select>
                            <button className='btn btn-primary w-full md:w-fit'>Search my job</button>
                        </form>
                        <p className='text-[#202430]'>Popular : UI Designer, UX Researcher, Android, Admin</p>
                    </div>
                    <div className='flex-1'>
                        <img src={man} alt="Man" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;