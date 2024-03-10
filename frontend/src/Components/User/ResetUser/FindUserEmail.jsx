import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { findUserEmailPost } from '../../../redux/actions/userActions';


function FindUserEmail({findUserEmailPost}) {
    const [localEmail, setLocalEmail] = useState('');

        const navigate = useNavigate();
      
        const handleFindUserEmail = async (event) => {
          event.preventDefault();
          try {
             await findUserEmailPost({ email: localEmail });
          
            window.location.reload();
            navigate("/home");
          } catch (error) {
            toast.error("Email and password are incorrect!");
          }
        };
      
    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            ...
                        </div>
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:flex">
                            <form className="card-body" onSubmit={handleFindUserEmail}>
                            <div className='text-3xl text-center'>Find account</div>
                                <div className="form-control">
                                    <label className="label">
                                  
                                        <span className="label-text">Email</span>

                                    </label>
                                    <input 
                                        type="email" 
                                        placeholder="Enter your email" 
                                        className="input input-bordered" 
                                        required 
                                        value={localEmail}
                                        onChange={(e) => setLocalEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" onClick={handleFindUserEmail} className="btn btn-primary">Find</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
    );
}

export default connect(null, { findUserEmailPost })(FindUserEmail);
