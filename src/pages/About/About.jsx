import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../../shared/Navbar/Navbar';
import Header from '../../shared/Header/Header';
import useAuth from '../../hooks/useAuth';
import RightBar from '../../shared/RightBar/RightBar';

const About = () => {

    const {user} = useAuth()

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            
            <div className='grid grid-cols-4'>
            <div className='col-span-3'>
            {
                user ? <><h2 className='text-5xl text-center'>I am {user?.displayName}</h2>
                <img src={user?.photoURL} alt="" /></> : <></>
            }
                </div>
                <div><RightBar></RightBar></div>
            </div>
        </div>
    );
};

export default About;