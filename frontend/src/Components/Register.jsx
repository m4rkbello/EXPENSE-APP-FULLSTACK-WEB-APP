import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerUserPost } from '../redux/actions/loginActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from 'react-hot-toast';
import { useNavigate, Link } from 'react-router-dom';

const Register = ({registerUserPost}) => {
    const [localName, setLocalName] = useState("");
    const [localEmail, setLocalEmail] = useState("");
    const [localPassword, setLocalPassword] = useState("");
    const [localConfirmPassword, setLocalConfirmPassword] = useState("");
    const navigate = useNavigate();
  
    const handleUserPost = async (event) => {
      event.preventDefault();
      try {
        await registerUserPost({name: localName, email: localEmail, password: localPassword, password_confirmation: localConfirmPassword });
        // Navigate to home page upon successful login
     
   
        
      } catch (error) {
        toast.error("Email and password are incorrect!");
      }
    };


  return (
    <div>
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">

      </div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:flex">
        <form className="card-body">
        <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" value={localName} onChange={(e) => setLocalName(e.target.value)} placeholder="name" className="input input-bordered" required />
        <span className="text-red-500 text-xs">error</span>
      </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" value={localEmail} onChange={(e) => setLocalEmail(e.target.value)} placeholder="email" className="input input-bordered" required />
            <label className="label">
            <span className="text-red-500 text-xs">error</span>
          </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" value={localPassword} onChange={(e) => setLocalPassword(e.target.value)} placeholder="password" className="input input-bordered" required />
            <span className="text-red-500 text-xs">error</span>
          </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" value={localConfirmPassword} onChange={(e) => setLocalConfirmPassword(e.target.value)} placeholder="password" className="input input-bordered" required />
          <span className="text-red-500 text-xs">error</span>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
          <div className="form-control mt-6">
            <button onClick={handleUserPost} className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
    </div>
  )
}

export default connect(null, { registerUserPost })(Register);