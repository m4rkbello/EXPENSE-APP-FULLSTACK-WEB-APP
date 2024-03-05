import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { createUserPost } from '../redux/actions/loginActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ createUserPost }) => {
  const [localEmail, setLocalEmail] = useState("");
  const [localPassword, setLocalPassword] = useState("");

  const navigate = useNavigate();

  const toastOptions = {
    position: 'top-right', // Position of the toasts
    duration: 5000, // Duration in milliseconds
    style: {
      // Customize the style of the toasts
    },
    // Other options...
  };

  const handleCreateUser = async (event) => {
    event.preventDefault();
    try {
      await createUserPost({ email: localEmail, password: localPassword });
     
      window.location.reload();
      navigate("/home");
    } catch (error) {
      toast.error("Email and password is incorrect!");
    }
  };
  
  return (
    <div>
<ToastContainer />
      <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">login</div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:flex">
            <form className="card-body">
              <div className="form-control">
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
                  <Link to="/home" className="label-text-alt link link-hover">Forgot password?</Link>
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
  )
}

const mapStateToProps = (state) => ({
  // email: state.login.email, // Assuming you have a reducer called 'login' that holds email and password
  // password: state.login.password,
});

const mapDispatchToProps = (dispatch) => ({
  createUserPost: (userData) => dispatch(createUserPost(userData))
});

export default connect(null, mapDispatchToProps)(Login);
