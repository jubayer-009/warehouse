import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from 'react-router-dom';

import { signOut } from 'firebase/auth';
import auth from "../firebase.init";

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
   

    const handleSignOut = () => {
      signOut(auth);
    };
  return (
    <div>
      <div className="navbar bg-primary text-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Our products</a>
              </li>
              <li>
                <a>Contact us</a>
              </li>
            </ul>
          </div>
          <a href="#" className="btn btn-ghost normal-case text-xl">
            SM Enterprise
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Our products</a>
            </li>
            <li>
              <a>Contact us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end px-7 ">
          {user ? (
            <a onClick={handleSignOut} className="btn btn-secondary text-white">
              Log Out
            </a>
          ) : (
            <Link to="/login" className="btn btn-secondary text-white">
              Log in
            </Link>
          )}
          <div className="indicator ml-5">
            <span className="indicator-item badge badge-secondary badge-xs">
              99+
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;