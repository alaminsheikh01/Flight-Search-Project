"use client";
import React, { useEffect } from 'react';
import { Input, Button } from 'antd';
import Link from 'next/link';

const SignIn = () => {

    useEffect(() => {
      document.title = "Sign In - Flight Search";
    }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/banner.jpg')" }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">Sign In</h1>

        <form className="space-y-4">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <Input.Password
              id="password"
              placeholder="Enter your password"
              className="w-full"
            />
          </div>

          {/* Sign In Button */}
          <Button
            type="primary"
            htmlType="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 text-lg font-medium"
          >
            Sign In
          </Button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-gray-600 mt-4">
          Do not have an account?{' '}
          <Link href="#" legacyBehavior>
            <a className="text-orange-500 font-medium hover:underline">Sign Up</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;