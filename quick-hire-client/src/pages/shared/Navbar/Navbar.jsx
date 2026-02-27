import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../../assets/logo.png'

const Navbar = () => {

    const links = <>
        {/* <li><NavLink to="/">Home</NavLink></li> */}
        <li><NavLink to="/find-jobs">Find Jobs</NavLink></li>
        <li><NavLink to="/browse-companies">Browse Companies</NavLink></li>
        <li><NavLink className="lg:hidden" to="/login">Login</NavLink></li>
        <li><NavLink className="lg:hidden" to="/signUp">Sign Up</NavLink></li>
    </>
    return (
        <div className="sticky top-0 z-50 w-full backdrop-blur-xl shadow-sm left-0">
            <div className="navbar max-w-7xl mx-auto w-11/12 px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <Link to="/" className="flex font-bold items-center gap-2 text-xl">
                        <img src={logo} alt="" />
                        <span>QuickHire</span>
                    </Link>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                links
                            }
                        </ul>
                    </div>
                </div>

                <div className="navbar-end hidden lg:flex">
                    <div className='flex gap-3 items-center'>
                        <Link to='/login' className=" px-6 py-2 text-primary font-bold border-r border-[#D6DDEB]">Login</Link>
                        <Link to='/signUp' className="btn btn-primary">Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;