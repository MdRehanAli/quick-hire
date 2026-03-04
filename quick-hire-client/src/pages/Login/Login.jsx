import React from 'react';

const Login = () => {
    return (
        <div className='border border-primary/20 hover:border-primary rounded-xl w-11/12 max-w-sm mx-auto my-20 shrink-0 shadow-2xl'>
            <div className="card-body p-8 text-primary border border-primary/50 rounded-xl">
                <h1 className='text-center text-4xl font-bold'>Login</h1>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input w-full" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input w-full" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </div>
        </div>
    );
};

export default Login;