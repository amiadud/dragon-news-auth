import React from 'react';
import RightBar from '../../shared/RightBar/RightBar';
import Header from '../../shared/Header/Header';
import { useLocation, useParams } from 'react-router-dom';
import Navbar from '../../shared/Navbar/Navbar';

const NewsDetails = () => {
        const {id} = useParams()
        const location = useLocation()
        console.log(location);

    return (
        <>
        <Header></Header>
        <Navbar></Navbar>
        <div className='grid md:grid-cols-4'>
            <div className='col-span-3'>
            <h2 className=''>News Details</h2>
            <p>{id}</p>
            </div>
            <div><RightBar></RightBar></div>
        </div>
        </>
    );
};

export default NewsDetails;