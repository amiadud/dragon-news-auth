import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { updateProfile } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';

const RegisterForm = () => {
  const [success, setSuccess] = useState('')
  const [showpass, setShowPass] = useState(false)

  const navigate = useNavigate()


  const { createUser } = useAuth() ;
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const photoURL = e.target.imgurl.value
        const email = e.target.email.value
        const password = e.target.password.value
        const terms = e.target.terms.checked
        e.target.reset();
        //reset error
        setSuccess('')
        if (password.length < 6 ){
          toast.error(' Password should be at least 6 characters or longer');
          return;
      }
      else if (!/[A-Z]/.test(password)){
        toast.error('Your password should have at least one uppercase characters.');
          return;
      }
      else if (!terms){
        toast.error("Please accepted our terms and condition");
          return;
      }

        createUser(email, password)
        .then(res => {
          updateProfile(res.user, {
            displayName:name,
            photoURL:photoURL
          })
          .then(() => {
            toast.success('Successfully Registration!')
            navigate('/')
          })
        })
    }

    return (
        <div>
            <div className="hero bg-base-200">
  <div className=" flex-col my-10 lg:flex-row-reverse">
    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
      <div className="card-body ">
      <h1 className="text-4xl font-bold ">Register your account</h1>
      <hr className='mt-10 mb-3' />
      <form onSubmit={handleRegister}>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" placeholder="Enter Your Name" name='name' className="input input-bordered placeholder:text-xs" required />
    </div>
    <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Image URL" name='imgurl' className="input input-bordered placeholder:text-xs" required />
    </div>
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
        <div className=" my-2">
        <input type="checkbox" name="terms" id="" />
        <label className="ml-2" htmlFor="terms">Accept <Link className='font-semibold' to="#">Term and Condition</Link></label>
        </div>
        <div className="form-control ">
          <button type='submit' className="btn btn-primary btn-outline">Register</button>
         <p className='mt-2'>Have a account? Please <Link className='link-success font-semibold' to="/login">Login</Link></p>
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
        </div>
    );
};

export default RegisterForm;