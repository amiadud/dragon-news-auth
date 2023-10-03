import React from 'react';
import logo from '../../assets/logo.png';
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center space-y-4'>
            <img className='mx-auto' src={logo} alt="" />
            <p>Journalism Without Fear or Favor</p>
            {moment().format("dddd, MMMM DD, YYYY")}
        </div>
    );
};

export default Header;