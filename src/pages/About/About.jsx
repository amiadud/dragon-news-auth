import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../../shared/Navbar/Navbar';
import Header from '../../shared/Header/Header';
import useAuth from '../../hooks/useAuth';

const About = () => {

    const {user} = useAuth()

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            {
                user ? <><h2 className='text-5xl text-center'>I am {user?.displayName}</h2>
                <img src={user?.photoURL} alt="" /></> : <></>
            }
        </div>
    );
};

export default About;