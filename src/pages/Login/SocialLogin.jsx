import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const SocialLogin = () => {

    const {userLoginWithGoogle, userLoginWithGithub} = useAuth()

    const navigate = useNavigate()

    const handleGoogleLogin = () => {
        userLoginWithGoogle()
        .then(result => {
            toast.success("Login success with Google");
            navigate('/about')
            console.log(result.user);
        
        })
        .catch(err =>{
            toast.error("Failed Login with Google");
            console.log(err.message);
        })
    }

    const handleGithubLogin = () => {
        userLoginWithGithub()
        .then(result => {
            toast.success("Login success with Github");
            navigate('/about')
            console.log(result.user);
        
        })
        .catch(err =>{
            toast.error("Failed Login with Github");
            console.log(err.message);
        })
    }

    return (
        <>
           <h2 className='text-2xl font-semibold'>Login With</h2>
                <div className='space-y-2 my-3'>
                    <button onClick={handleGoogleLogin}
                    className='btn btn-outline w-full btn-sm capitalize flex items-center '
                    >
                    <FaGoogle></FaGoogle>Login with Google</button>
                    <button onClick={handleGithubLogin}
                    className='btn btn-outline w-full btn-sm capitalize '
                    >
                <FaGithub></FaGithub> Login with Github</button>
        </div> 
        </>
    );
};

export default SocialLogin;