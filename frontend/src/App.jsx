import React, { useState, useEffect } from 'react';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import NotFound from './Components/Pages/404';

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
    <div className='bg-red-200 min-h-screen'>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">pullsnack</Link>
        </div>
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
      <ul className="menu menu-horizontal px-1">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        {/**
      
        <li>
          <details>
            <summary>OHAHA</summary>
            <ul className="p-2 bg-base-100 rounded-t-none">
              <li>Link 1</li>
              <li>Link 2</li>
            </ul>
          </details>
        </li>
        */}
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
              <Route path="*" element={<NotFound />} />
          
            </>
          )}
        </Routes>
      </div>
    </div>
  );
}

export default App;
