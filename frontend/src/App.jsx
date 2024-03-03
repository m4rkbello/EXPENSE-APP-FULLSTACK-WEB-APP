import React, { useState, useEffect } from 'react';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';

import NotFound from './Components/Pages/404';
import { AiOutlineMenu } from "react-icons/ai";

function App() {
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    // Check if token exists in localStorage or cookies
    const token = localStorage.getItem('M4rkbelloFullstackPersonalAccessToken') && getCookie('M4rkbelloFullstackPersonalAccessToken');

    if (token) {
      setHasToken(true);

    }
  }, []);

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  return (
    <div className='shadow-2xl .. bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... min-h-screen'>
      <div className="navbar shadow-2xl .. bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
      {hasToken.length !== 0 && hasToken ? (
        <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button">   <AiOutlineMenu /> Menu</label>

        </div>
        <div className="shadow-2xl drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-black text-base-content">
            {/* Sidebar content here */}
            <Link to="/home"><a>Sidebar Item 1</a></Link>
            <li><a>Sidebar Item 2</a></li>
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>

          </ul>
 

        </div>
        
      </div>

      ) : (
        
        
                <div className="flex-1">
                  <Link to="/" className="btn btn-ghost text-xl">pullsnack</Link>
                </div>

      ) 
    }
      
        


        <div className="flex-none" style={{ display: 'flex' }}>
          <ul className="menu menu-horizontal px-1">
            {hasToken.length !== 0 && hasToken ? (
              <div>
                <ul className="menu menu-horizontal px-1">
                  <li>
                    <details>
                      <summary>OHAHA</summary>
                      <ul className="bg-base-100 rounded-t-none">
                        <li>Link 1</li>
                        <li>Link 2</li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                <ul className="menu menu-horizontal px-1 text-black text-base">
                  <li className='shadow-2xl'>
                    <Link to="/login">Login</Link>
                  </li>
                  <li className='shadow-2xl'>
                    <Link to="/register">Register</Link>
                  </li>
                </ul>
              </div>
            )}
          </ul>

        </div>

      </div>

      <div className='max-w-7xl mx-auto mt-6'>
        <Routes>
          {hasToken ? (
            <Route path="/home" element={<Home />} />
          ) : (
            <>
           
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {/**
              
              <Route path="*" element={<NotFound />} />
              */}

            </>
          )}
        </Routes>
      </div>
    </div>
  );
}

export default App;
