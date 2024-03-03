import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../Services/Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', { email, password });
      
      console.log("LOGIN SUCCESS!:", response.data);
      window.location.reload();
      navigate("/home");
      // Check if login was successful
      if (response.data && response.data.success) {
        const { token } = response.data;
  
        // Save token to localStorage
        localStorage.setItem('M4rkbelloFullstackPersonalAccessToken', token);
  
        // Save token to cookie
        document.cookie = `M4rkbelloFullstackPersonalAccessToken=${token}; expires=${new Date(Date.now() + 86400 * 1000).toUTCString()}; path=/`;
  
        // Clear email and password fields
        setEmail("");
        setPassword("");
       
        // Navigate to the desired route
      
      } 
      toast.success("Login successful!");


    } catch (error) {
      console.log("ERROR SA PAG LOGIN", error);
      // Handle network or other errors
      toast.error("ERROR KOL!!");
    }
  };

  return (
    <div>
    <ToastContainer />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"></div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:flex">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" className="input input-bordered" required />
                <span className="text-red-500 text-xs">error</span>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" className="input input-bordered" required />
                <span className="text-red-500 text-xs">error</span>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
