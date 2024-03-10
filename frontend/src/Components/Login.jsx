import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from 'react-hot-toast';

import { loginUserPost} from '../redux/actions/userActions';

const Login = ({ loginUserPost }) => {
  const [localEmail, setLocalEmail] = useState("");
  const [localPassword, setLocalPassword] = useState("");
  const navigate = useNavigate();

  const handleCreateUser = async (event) => {
    event.preventDefault();
    try {
      const postAndResponseUserLogin = await loginUserPost({ email: localEmail, password: localPassword });
      console.log(postAndResponseUserLogin);
      window.location.reload();
      navigate("/home");
    } catch (error) {
      toast.error("Email and password are incorrect!");
    }
  };

  return (
    <div>
    <ToastContainer />
      <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <div className="hero-content flex-col  lg:flex-row-reverse">
        <div className="text-center lg:text-left">
        ...
    </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:flex">
          <form className="card-body">
          <div className="form-control">
          <span className="text-center text-4xl py-3 px-3">LOGIN</span>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" value={localEmail} onChange={(e) => setLocalEmail(e.target.value)} placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" value={localPassword} onChange={(e) => setLocalPassword(e.target.value)} placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <Link to="/register" className="label-text-alt link link-hover">Create an Account?</Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={handleCreateUser}>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { loginUserPost })(Login);