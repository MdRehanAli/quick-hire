import React from 'react';
import vodafone from '../../../assets/vodafone.png'
import intel from '../../../assets/intel.png'
import tesla from '../../../assets/tesla.png'
import amd from '../../../assets/amd.png'
import talkit from '../../../assets/talkit.png'

const Companies = () => {
    return (
        <div className='max-w-7xl mx-auto w-11/12 py-12'>
            <p className='mb-8 text-[#20243050]'>Companies we helped grow</p>
            <div className='flex justify-between items-center flex-wrap'>
                <img src={vodafone} alt="vodafone" />
                <img src={intel} alt="intel" />
                <img src={tesla} alt="Tesla" />
                <img src={amd} alt="amd" />
                <img src={talkit} alt="talkit" />
            </div>
        </div>
    );
};

export default Companies;