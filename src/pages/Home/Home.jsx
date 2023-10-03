import React from 'react';
import Header from '../../shared/Header/Header';
import Navbar from '../../shared/Navbar/Navbar';
import LeftBar from '../../shared/LeftBar/LeftBar';
import RightBar from '../../shared/RightBar/RightBar';
import BreakingNews from './BreakingNews';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                <div>
                    <LeftBar></LeftBar>
                    </div>
                <div className='md:col-span-2'><Outlet></Outlet></div>
                <div><RightBar></RightBar></div>
            </div>
        </div>
    );
};

export default Home;