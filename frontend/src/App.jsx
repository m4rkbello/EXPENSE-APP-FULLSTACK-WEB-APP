import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'


function App() {


  return (
    <div className='bg-red-200 min-h-screen'>
    <div className="navbar bg-base-100">
      <div className="flex-1">
      
      <Link to="/" className="btn btn-ghost text-xl">pullsnack</Link>
      
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
        <li>
        <Link to="/login">Login</Link>
        </li>
        <li>
        <Link to="/register">Register</Link>
        </li>
          <li>
            <details>
              <summary>
                OHAHA
              </summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>Link 1</li>
                <li>Link 2</li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
    <div className='max-w-7xl mx-auto mt-6'>

      <Routes>
      <Route exact path="/home" element={ <Home />} />
      <Route exact path="/login" element={ <Login />} />
      <Route exact path="/register" element={ <Register />} />
      </Routes>
    </div>
  </div>
  )
}

export default App
