import React from 'react'

function ResetPassword() {
    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">

                        </div>
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:flex">
                            <form className="card-body">
                              
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Enter your email" className="input input-bordered" required />
                                    <label className="label">

                                    </label>
                                </div>
                               
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Reset</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword