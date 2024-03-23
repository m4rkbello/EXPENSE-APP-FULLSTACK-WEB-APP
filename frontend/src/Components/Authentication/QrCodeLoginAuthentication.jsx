import React from 'react'


function QrCodeLoginAuthentication() {
  return (
    <div>
    <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
    <div className="hero-content flex-col  lg:flex-row-reverse">
    <div className="text-center lg:text-left">
    ...
    </div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:flex">
      <form className="card-body">
      <div className="form-control">
      <span className="text-center text-4xl py-3 px-3">SCAN YOUR QR CODE</span>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email"  />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="text"  />
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
  )
}

export default QrCodeLoginAuthentication