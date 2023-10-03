import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'
import useAuth from '../../hooks/useAuth';

const RightBar = () => {

    const {user} = useAuth();
    return (
        <div >
            <div>
                {user ? <></> : <><h2 className='text-2xl font-semibold'>Login With</h2>
                <div className='space-y-2 my-3'>
                    <button 
                    className='btn btn-outline w-full btn-sm capitalize flex items-center '
                    >
                    <FaGoogle></FaGoogle>Login with Google</button>
                    <button 
                    className='btn btn-outline w-full btn-sm capitalize '
                    >
                     <FaGithub></FaGithub> Login with Github</button>
                </div></>}
            </div>
            <div className='my-5'>
                <h2 className='text-2xl font-semibold'>Find Out on</h2>
                <div >
                    <Link className='flex items-center gap-2 text-xl p-4 border rounded-t-md '> 
                    <FaFacebook className='mr-2 '></FaFacebook> 
                    <span>Facebook</span>
                    </Link>
                    <Link className='flex items-center gap-2 text-xl p-4 border-x '> 
                    <FaTwitter className='mr-2'></FaTwitter> 
                    <span>Twitter</span>
                    </Link>
                    <Link className='flex items-center gap-2 text-xl p-4 border rounded-b-md '> 
                    <FaTwitter className='mr-2'></FaTwitter> 
                    <span>Twitter</span>
                    </Link>
                </div>
            </div>
            <div className='bg-gray-100 p-2'>
                <h2 className='text-xl font-bold'>Q-zone</h2>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>

            <div >
                <h2>Create an <br />Amazing <br />Newspaper</h2>
                <p>Discover thousands of <br />options, easy to <br />customize layouts, one-<br />click to import demo <br />and much more.</p>
                <button className='btn btn-primary btn-sm'>Learn More</button>
                <img src="" alt="" />
            </div>
        </div>

    );
};

export default RightBar;  