import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const BreakingNews = () => {
    return (
        <div className='flex'>
            <button className='btn btn-secondary btn-sm' >Latest</button>
            <Marquee speed={100}>
                <Link className='mr-5' to="/"> I can be a React component....</Link>
                <Link className='mr-5' to="/"> I can be a React component....</Link>
                <Link className='mr-5' to="/"> I can be a React component....</Link>
                <Link className='mr-5' to="/"> I can be a React component....</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;