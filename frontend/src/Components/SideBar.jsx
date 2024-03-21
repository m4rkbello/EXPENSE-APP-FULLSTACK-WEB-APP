import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiFillHome } from 'react-icons/ai';

const Sidebar = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar Content */}
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button lg:hidden">
          <AiOutlineMenu />
        </label>
        {/* Page Content */}
        <main>
          {/* Your page content goes here */}
        </main>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          {/* Sidebar Content */}
          <li>
            <Link to="/home">
              <AiFillHome /> Home
            </Link>
          </li>
          {/* Add more sidebar links here */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;