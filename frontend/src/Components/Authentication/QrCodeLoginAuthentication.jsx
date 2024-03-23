import React from 'react'
import { Link } from 'react-router-dom'

function QrCodeLoginAuthentication() {
  return (
    <div>
      <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
        <div className="hero-content flex-col  lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-black md:flex">
            <form className="card-body">
              <div className="form-control">
              <label className='text-2xl text-center py-4 my-4'>
              QR SCANNER MODULE
                
              </label>
                <div class="box-content h-64 w-64 p-4 border-4 bg-fuchsia-50">
                  <h3>
                  </h3>
                </div>
              </div>
              <div className='flex'>
                <center>

                  <label className="text-2xl">
                    <Link to="/login" className="label-text-alt link link-hover">Login instead?</Link>
                  </label>
                  <label className="text-3xl">
                    <Link to="/register" className="label-text-alt link link-hover">Create an Account?</Link>
                  </label>
                </center>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default QrCodeLoginAuthentication