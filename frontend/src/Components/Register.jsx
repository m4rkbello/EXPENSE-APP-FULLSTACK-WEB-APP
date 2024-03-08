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
     
   
      window.location.reload();
      navigate("/login");
      } catch (error) {
        toast.error("Email and password are incorrect!");
      }
    };

  return (
    <div>
    <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
ha
      </div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:flex">
        <form className="card-body">
        <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" value={localName} onChange={(e) => setLocalName(e.target.value)} placeholder="name" className="input input-bordered" required />
    
      </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" value={localEmail} onChange={(e) => setLocalEmail(e.target.value)} placeholder="email" className="input input-bordered" required />
            <label className="label">
        
          </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" value={localPassword} onChange={(e) => setLocalPassword(e.target.value)} placeholder="password" className="input input-bordered" required />
        
          </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" value={localConfirmPassword} onChange={(e) => setLocalConfirmPassword(e.target.value)} placeholder="password" className="input input-bordered" required />
      
          <label className="label">
            <Link to="/resetpassword" className="label-text-alt link link-hover">Forgot password?</Link>
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