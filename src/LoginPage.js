import React from "react";
import "./App.css";

function LoginPage() {
  return (
    <div className="flex h-screen">
      {/* Description section */}
      <div className="flex w-3/4 bg-blue-500 p-10">
        <div className="flex flex-col items-center justify-center text-white">
          <img
            src={require("./logo.png")}
            alt="logo"
            className="h-20 w-20 mb-6"
          />

          <h1 className="text-4xl font-bold mb-4">Welcome to Our App</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
            augue eget nunc feugiat ultrices.
          </p>
        </div>
      </div>

      {/* Login Form */}

      <div className="w-1/2 bg-gray-100 flex items-center justify-center">
        <div className="p-8 bg-white rounded shadow-md w-3/4">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium">Username</label>
              <input
                type="text"
                className="w-full border rounded py-2 px-3"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                className="w-full border rounded py-2 px-3"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded w-full mb-2 border-2 border-blue-500"
            >
              Login
            </button>
            <button
              type="submit"
              className="bg-white text-blue-500 py-2 px-4 rounded w-full border-2 border-blue-500"
            >
              Sign Up
            </button>
          </form>
          <div className="my-2 flex justify-center">Or</div>
          <button
            type="submit"
            className="bg-white text-black py-4 px-4 rounded w-full border-2"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
