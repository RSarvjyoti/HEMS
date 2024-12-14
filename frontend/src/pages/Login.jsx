import React from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login to Your Account
        </h2>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-fuchsia-600 text-white py-2 rounded-lg hover:bg-fuchsia-900 transition duration-300"
          >
            Login
          </button>
        </div>
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
        <div className="text-center">
          <button
            type="button"
            className="flex items-center justify-center w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-200 transition duration-300"
          >
            <FcGoogle className="text-2xl mr-2" />
            <span className="text-gray-600">Login with Google</span>
          </button>
        </div>
        <div className="mt-6 text-center">
          <a
            href="#"
            className="text-fuchsia-600 hover:text-fuchsia-900 text-sm transition duration-300"
          >
            Forgot your password? 
          </a>
          <a className="text-blue-600" href="/signup">Sign Up</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
