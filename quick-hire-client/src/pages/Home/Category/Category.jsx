import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { HiOutlinePaintBrush, HiOutlinePresentationChartBar, HiOutlineMegaphone, HiOutlineBanknotes, HiOutlineComputerDesktop, HiOutlineCodeBracket, HiOutlineBriefcase, HiOutlineUsers } from "react-icons/hi2";

const Category = () => {

    const categories = [
        { id: 1, title: "Design", jobs: 235, icon: HiOutlinePaintBrush },
        { id: 2, title: "Sales", jobs: 756, icon: HiOutlinePresentationChartBar },
        { id: 3, title: "Marketing", jobs: 140, icon: HiOutlineMegaphone },
        { id: 4, title: "Finance", jobs: 325, icon: HiOutlineBanknotes },
        { id: 5, title: "Technology", jobs: 436, icon: HiOutlineComputerDesktop },
        { id: 6, title: "Engineering", jobs: 542, icon: HiOutlineCodeBracket },
        { id: 7, title: "Business", jobs: 211, icon: HiOutlineBriefcase },
        { id: 8, title: "Human Resource", jobs: 346, icon: HiOutlineUsers },
    ];

    return (
        <div className="max-w-7xl mx-auto w-11/12 py-12">
            <div className="flex justify-between items-center mb-10">
                <h1 className='mb-12 text-5xl font-semibold'>Explore by <span className='text-secondary'>category</span></h1>
                <button className="text-primary font-medium flex items-center gap-4 hover:underline">
                    Show all jobs <FaArrowRight className='text-black'/>
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categories.map((item) => (
                    <div
                        key={item.id}
                        className="group p-8 border border-slate-100 transition-all duration-300 cursor-pointer hover:shadow-xl hover:bg-primary hover:text-white hover:border-[#4640DE]"
                    >
                        <div className="mb-8 text-4xl text-black">
                            <item.icon />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>

                        <div className="flex justify-between items-center">
                            <p className='text-info group-hover:text-white'>
                                {item.jobs} jobs available
                            </p>
                            <FaArrowRight className="transition-transform group-hover:translate-x-1  text-black"/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;