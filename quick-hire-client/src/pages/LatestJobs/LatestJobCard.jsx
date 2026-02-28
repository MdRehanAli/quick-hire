import React from 'react';

const LatestJobCard = ({job}) => {
    return (
        <div className="flex items-start bg-white p-6 border border-[#D6DDEB]">
            <div className="mr-5">
                <div className="w-14 h-14 flex items-center justify-center overflow-hidden">
                    <img
                        src={job.logoUrl}
                        alt={`${job.company} logo`}
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>

            <div className="flex-1">
                <h3 className="text-[18px] font-bold text-slate-900 leading-tight">
                    {job.role}
                </h3>

                <div className="flex items-center text-[15px] text-slate-500 mt-1 font-medium italic">
                    <span>{job.company}</span>
                    <span className="mx-2 not-italic text-slate-300">•</span>
                    <span>{job.location}</span>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-4 py-1 bg-emerald-50 text-emerald-500 rounded-full text-[12px] font-bold border border-emerald-100">
                        {job.type}
                    </span>
                    {job.tags.map((tag, index) => (
                        <span
                            key={index}
                            className={`px-4 py-1 bg-white rounded-full text-[12px] font-bold border ${tag === 'Marketing' ? 'text-orange-400 border-orange-200' : 'text-indigo-500 border-indigo-200'
                                }`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LatestJobCard;