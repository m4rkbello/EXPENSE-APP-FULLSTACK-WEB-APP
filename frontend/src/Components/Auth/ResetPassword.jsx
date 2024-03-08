import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests

function ResetPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/resetpassword', { email });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response.data.message);
        }
    };

    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            reset password
                        </div>
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:flex">
                            <form className="card-body" onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input 
                                        type="email" 
                                        placeholder="Enter your email" 
                                        className="input input-bordered" 
                                        required 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-primary">Reset</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {message && <div>{message}</div>} {/* Display the message from the backend */}
        </div>
    );
}

export default ResetPassword;
