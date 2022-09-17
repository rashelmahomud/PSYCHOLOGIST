import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assacts/img/logo (2).png'


const Header = ({ handleThemeChange, theme }) => {

  const navbermenu = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/blogs">Blogs</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    {/* theme icon started here  */}
    <button
      onClick={handleThemeChange}
      className="rounded-full lg:mx-2 font-bold pr-2">
      {theme ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
    </button>

  </>

  return (
    <div className='z-40'>
      <div className="navbar bg-base-300 bg-opacity-30 backdrop-filter backdrop-blur-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navbermenu}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl" to="/"><img className='w-8 h-8' src={logo} />PSYCHOLOGIST</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {navbermenu}
          </ul>
        </div>

      </div>
    </div>

  );
};

export default Header;