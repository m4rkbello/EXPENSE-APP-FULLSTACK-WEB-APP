
import { AiOutlineMenu, AiFillHome } from 'react-icons/ai';
import React, { useState, useEffect } from 'react';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import { connect, useSelector, useDispatch } from 'react-redux';
import Wallet from '../Components/Student';

const Sidebar = () => {
  return (
    <div className='shadow-2xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% min-h-screen flex'>
    <div className="sidebar">
      <ul className="menu p-4 w-80 min-h-full bg-pink-700 text-base-content">
      <li>
      <Link to="/wallet">WALLET</Link>
    </li>
      </ul>
    </div>
    <div className="main-content flex flex-col flex-1">
  
    
    <div className="navbar shadow-2xl ..  bg-black">
    <Wallet />
    </div>



      <div className='max-w-7xl mx-auto mt-6 flex-1'>
        <Routes>
        <Route path="/wallet" element={<Wallet />} />
        </Routes>
      </div>
    </div>
  </div>
  );
};

export default Sidebar;