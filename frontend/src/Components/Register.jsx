import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

    const [localName, setLocalName] = useState('');
    const [localEmail, setLocalEmail] = useState("");
    const [localPassword, setLocalPassword] = useState("");
    const [localPasswordConfirmation, setLocalPasswordConfirmation] = useState('');
  
    const navigate = useNavigate();
  
    const handleRegisterUser = async (event) => {
      event.preventDefault();
      try {
        await loginUserPost({name: localName,  email: localEmail, password: localPassword,  password_confirmation: localPasswordConfirmation});
       
        window.location.reload();
        navigate("/home");
      } catch (error) {
        toast.error("Email and password is incorrect!");
      }
    };

  return (
    <div>

    <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
    <div className="hero-content flex-col lg:flex-row-reverse">
  
      <div className="card min-[320px]:text-center max-[600px]:bg-sky-300 shadow-2xl bg-base-100 md:flex">
        <form onSubmit={handleRegister} className="card-body">
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
            <input type="password" value={localPassword} onChange={(e) => setLocalPassword(e.target.value)} placeholder="Password" className="input input-bordered" required />
          </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" value={localPasswordConfirmation} onChange={(e) => setLocalPasswordConfirmation(e.target.value)} placeholder="Retype password" className="input input-bordered" required />
     
          <label className="label">
            <Link to="/" className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>
          <div className="form-control mt-6">
            <button onClick={handleRegisterUser} className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
    </div>
  )
}




export default Register
