import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
  
  const {user, userLogout} = useAuth()
  const nagivate = useNavigate()

    const navlinks = <>
        <div className='flex gap-3 flex-wrap'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/career">Career</NavLink>
        </div>
    </>

    const handleLogout = () => {
      userLogout();
      nagivate('/login');

    }

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navlinks}
      </ul>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
  {
            user ? <><label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
            <img title={user?.displayName} src={user?.photoURL} />
            </div>
          </label></> : <></>
  }
    
    {
      user ? <><Link onClick={handleLogout} className="btn btn-sm">Logout</Link></>: <><Link className="btn btn-sm" to="/login">Login</Link></>
    }
  </div>
</div>
    );
};

export default Navbar;