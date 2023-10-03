import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from '../../shared/Navbar/Navbar';

const LoginForm = () => {
  const { userLogin } = useAuth();
  const navigate = useNavigate();

  const location = useLocation();
  console.log('location in the login page',location);
  
  
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget)
    const email = form.get('email');
    const password = form.get('password');
    userLogin(email,password)
    .then(result => {
      toast.success("Your account Logged in successfully")
      console.log(result.user);
      navigate(location?.state ? location.state : '/');
    })
    .catch(err => {
      toast.error("please enter correct email and password")
    })
  }


    return (
      <>
      <Navbar></Navbar>
        <div className="hero bg-base-200">
        <div className=" flex-col my-10 lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
            <div className="card-body ">
            <h1 className="text-4xl font-bold ">Login your account</h1>
            <hr className='mt-10 mb-3' />
            <form onSubmit={handleLogin} >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Enter your email" name='email' className="input input-bordered placeholder:text-xs" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered placeholder:text-xs" required />
              </div>
              <label className="label">
                <Link className="label-text-alt link link-hover" to="#">Forgot password?</Link>
            </label>
              <div className="form-control ">
                <button type='submit' className="btn btn-primary btn-outline">Login</button>
               <p className='mt-2'>Create a new Account. Visit <Link className='link-success font-semibold' to="/register">Register</Link></p>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
      <Toaster
  position="bottom-center"
  reverseOrder={false}
/>
      </>
    );
};

export default LoginForm;