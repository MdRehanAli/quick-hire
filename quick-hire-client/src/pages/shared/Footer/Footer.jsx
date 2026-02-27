import React from 'react';
import { Link } from 'react-router';
import logo from '../../../assets/logo.png'
import { FaDribbble, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#202430] text-white py-16">
            <div className='max-w-7xl mx-auto w-11/12'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5'>
                    <div className='flex flex-col gap-4 col-span-2'>
                        <Link to="/" className="flex font-bold items-center gap-2 text-xl ">
                            <img src={logo} alt="" />
                            <span>QuickHire</span>
                        </Link>
                        <p>Great platform for the job seeker that passionate about startups. Find your dream job easier.</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h6 className="footer-title">About</h6>
                        <Link className="link link-hover">Companies</Link>
                        <Link className="link link-hover">Pricing</Link>
                        <Link className="link link-hover">Terms</Link>
                        <Link className="link link-hover">Advice</Link>
                        <Link className="link link-hover">Privacy Policy</Link>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h6 className="footer-title">Resources</h6>
                        <Link className="link link-hover">Help Docs</Link>
                        <Link className="link link-hover">Guide</Link>
                        <Link className="link link-hover">Updates</Link>
                        <Link className="link link-hover">Contact Us</Link>
                    </div>
                    <div className='flex flex-col gap-2 col-span-2'>
                        <h6 className="footer-title">Get job notifications</h6>
                        <p>The latest job news, articles, sent to your inbox weekly.</p>
                        <form>
                            <fieldset className="w-full">
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="Email Address"
                                        className="input input-bordered text-[#A8ADB7] rounded-none" />
                                    <button className="btn btn-primary">Subscribe</button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
                <div className='flex md:flex-row flex-col justify-between items-center mt-20 pt-10 border-t border-[#FFFFFF10] gap-5'>
                    <p>2021 @ QuickHire. All rights reserved.</p>
                    <div className='flex gap-2 md:gap-6 flex-wrap'>
                        <Link className='p-4 rounded-full bg-[#ffffff15]'>
                            <FaFacebookF />
                        </Link>
                        <Link className='p-4 rounded-full bg-[#ffffff15]'>
                            <FaInstagram />
                        </Link>
                        <Link className='p-4 rounded-full bg-[#ffffff15]'>
                            <FaDribbble />
                        </Link>
                        <Link className='p-4 rounded-full bg-[#ffffff15]'>
                            <FaLinkedinIn />
                        </Link>
                        <Link className='p-4 rounded-full bg-[#ffffff15]'>
                            <FaTwitter />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;