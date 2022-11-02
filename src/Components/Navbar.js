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
        <div className="navbar-end ">
          {user ? (
            <a onClick={handleSignOut} className="btn btn-secondary text-white">
              Log Out
            </a>
          ) : (
            <Link to="/login" className="btn btn-secondary text-white">
              Log in
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;