import React from 'react';
import logo from '../assets/images/Logo.png'
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <div className='text-center h-full w-2/4 bg-white py-10 border rounded-lg'>
            <div className='flex justify-center'>
                <img src={logo} alt="company-logo" />
            </div>
            <div className='my-4'>
                <h1 className='text-3xl font-bold mb-2'>Login</h1>
                <p>Login to your account with your credentials</p>
            </div>
            <div>
                <button className='btn btn-ghost w-full max-w-xs mx-auto px-10 bg-white border-1 border-black rounded-3xl flex justify-center items-center gap-2'><span className='text-2xl'><FcGoogle></FcGoogle></span> Login with Google</button>
            </div>
            <div className="divider">Or Sign in with Email</div>
            {/* form */}
            <form className='flex justify-center items-center' action="">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold">Email Adress <div className="rating rating-xs"><input type="radio" name="rating-5" className="mask mask-star-2 bg-rose-600" checked /></div></span>
                    </label>
                    <input type="text" placeholder="mail@gmail.com" className="input input-bordered w-full rounded-3xl max-w-xs" required />
                    <label className="label">
                        <span className="label-text font-bold">Password <div className="rating rating-xs"><input type="radio" name="rating-5" className="mask mask-star-2 bg-rose-600" checked /></div></span>
                    </label>
                    <input type="text" placeholder="**********" className="input input-bordered w-full rounded-3xl max-w-xs" required />
                    <div className='flex justify-between my-2'>
                        <label className="cursor-pointer label">
                            <input type="checkbox" checked="checked" className="checkbox checkbox-primary" />
                            <span className="label-text mx-2">Remember me</span>
                        </label>
                        <button className='text-blue-700'>Forget password?</button>
                    </div>
                    <button className='btn btn-ghost w-full mx-auto px-10 text-white hover:text-black bg-green-400 border rounded-3xl flex justify-center items-center gap-2 mt-4'>Login</button>
                </div>
            </form>
            <div className='my-4'>
                <p>Not registered? <button className='text-blue-700'>Create an account</button></p>
            </div>
            <div className='h-20 bg-slate-300 flex justify-center items-end'>
                <p>©2023 r3achout.ai all rights reserved</p>
            </div>
        </div >
    );
};

export default Login;