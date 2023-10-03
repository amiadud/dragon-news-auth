import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

const LeftBar = () => {

    const [catagories,setCatagories ] = useState([])

    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCatagories(data))
    },[])

    return (

        <div>
            <h2 className='text-lg my-4'>All Category</h2>
            <div>
                {
                    catagories.map( 
                        catagory => 
                        <NavLink to={`/categories/${catagory.id}`} 
                        className='px-5 py-4 my-2 bg-slate-200 rounded block' 
                        key={catagory.id} 
                        >
                        {catagory.name}   
                        </NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftBar;