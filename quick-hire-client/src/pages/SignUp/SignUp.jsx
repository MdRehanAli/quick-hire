import React from 'react';

const SignUp = () => {
    return (
        <div className='border border-primary/20 hover:border-primary rounded-xl w-11/12 max-w-sm mx-auto my-20 shrink-0 shadow-2xl'>
            <div className="card-body p-8 text-primary border border-primary/50 rounded-xl">
                <h1 className='text-center text-4xl font-bold'>Sign Up</h1>
                <fieldset className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" className="input w-full border border-primary outline-primary" placeholder="Enter your Name" />
                    <label className="label">Email</label>
                    <input type="email" className="input w-full border border-primary outline-primary" placeholder="Email" />
                    <label className="label">Age</label>
                    <input type="number" className="input w-full border border-primary outline-primary" placeholder="Enter Your Age" />
                    <label className="label">Password</label>
                    <input type="password" className="input w-full border border-primary outline-primary" placeholder="Password" />
                    <button className="btn btn-primary mt-4">Sign Up</button>
                </fieldset>
            </div>
        </div>
    );
};

export default SignUp;