import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../Services/Api';


const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register', { name, email, password, password_confirmation });

      // Check if login was successful
      if (response.data && response.data.success) {
        toast.success("User has been registered!");
        window.location.reload();
        navigate("/home");
      }
 
    } catch (error) {
      console.log("ERROR SA PAG LOGIN", error);
      // Handle network or other errors
      toast.error("ERROR KOL!!");
    }
  };

  return (
    <div>

    <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
      Register
      </div>
      <div className="card min-[320px]:text-center max-[600px]:bg-sky-300 shadow-2xl bg-base-100 md:flex">
        <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="name" className="input input-bordered" required />
      </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" className="input input-bordered" required />
            <label className="label">
          </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="input input-bordered" required />
          </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" value={password_confirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="Retype password" className="input input-bordered" required />
     
          <label className="label">
            <Link to="/" className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Register
