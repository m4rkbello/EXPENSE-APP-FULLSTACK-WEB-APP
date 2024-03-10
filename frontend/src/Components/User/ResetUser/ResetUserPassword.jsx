import React from 'react'

function ResetUserPassword() {
  return (
    <div>
    <div>
    <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
    <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
                            ...
                        </div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:flex">
        <form className="card-body">
        <span className="text-center text-3xl py-3 px-3">REGISTER</span>
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
    
    </div>
  )
}

export default ResetUserPassword