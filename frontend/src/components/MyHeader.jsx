import React from 'react';
import { Link } from 'react-router-dom';

const MyHeader = () => {
  return (
    <nav className="bg-fuchsia-600 text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/" className="hover:text-gray-200">
            HEMS
          </Link>
        </div>
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              to="/"
              className="hover:text-gray-200 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="hover:text-gray-200 transition-colors duration-200"
            >
              Sign Up
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="hover:text-gray-200 transition-colors duration-200"
            >
              Login
            </Link>
          </li>
        </ul>
        <div className="md:hidden">
          <button
            className="text-gray-200 hover:text-gray-400 focus:outline-none"
            id="menuToggle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      <ul
        className="md:hidden bg-blue-700 space-y-2 px-4 py-3 hidden"
        id="mobileMenu"
      >
        <li>
          <Link
            to="/"
            className="block text-white hover:text-gray-200 transition-colors duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/signup"
            className="block text-white hover:text-gray-200 transition-colors duration-200"
          >
            Sign Up
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="block text-white hover:text-gray-200 transition-colors duration-200"
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MyHeader;
