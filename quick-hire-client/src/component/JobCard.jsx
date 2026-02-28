import React from 'react';

const JobCard = ({ job }) => {
    return (
        <div className="bg-white border border-[#D6DDEB] p-6 ">
            <div className="flex justify-between items-center mb-5">
                <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
                    <img
                        src={job.logoUrl}
                        alt="Logo"
                    />
                </div>

                <span className="text-[10px] uppercase tracking-wider text-primary border border-primary px-3 py-1.5 ">
                    Full Time
                </span>
            </div>

            <h3 className="text-lg font-extrabold text-[#515B6F] mb-1 leading-tight">
                {job.role}
            </h3>

            <div className="flex items-center text-sm font-medium text-slate-400 mb-4 space-x-1">
                <span className="text-slate-500">{job.company}</span>
                <span className="px-1">•</span>
                <span className="truncate">{job.location}</span>
            </div>

            <p className="text-sm text-slate-400 mb-6 leading-relaxed line-clamp-2">
                {job.description}
            </p>

            <div className="flex flex-wrap gap-2">
                {job.tags.map(tag => (
                    <span
                        key={tag}
                        className={`px-3 py-1 rounded-4xl text-[11px] font-bold
                            ${tag === 'Marketing' ? 'bg-orange-50 text-orange-500' :
                                tag === 'Design' ? 'bg-emerald-50 text-emerald-500' :
                                    tag === 'Technology' ? 'bg-rose-50 text-rose-500' :
                                        'bg-blue-50 text-blue-500'}`}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default JobCard;