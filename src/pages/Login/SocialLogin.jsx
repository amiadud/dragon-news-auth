import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <>
           <h2 className='text-2xl font-semibold'>Login With</h2>
                <div className='space-y-2 my-3'>
                    <button 
                    className='btn btn-outline w-full btn-sm capitalize flex items-center '
                    >
                    <FaGoogle></FaGoogle>Login with Google</button>
                    <button 
                    className='btn btn-outline w-full btn-sm capitalize '
                    >
                <FaGithub></FaGithub> Login with Github</button>
        </div> 
        </>
    );
};

export default SocialLogin;