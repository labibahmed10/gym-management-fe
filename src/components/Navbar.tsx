'use client';

import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { selectAuth, logout } from '@/redux/slices/authSlice';
import { motion } from 'framer-motion';

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector(selectAuth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <motion.span
            whileHover={{ scale: 1.1 }}
            className="text-2xl font-bold cursor-pointer"
          >
            Gym Management
          </motion.span>
        </Link>
        <div className="space-x-4">
          {isAuthenticated ? (
            <>
              <span>Welcome, {user.fullName}</span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded"
              >
                Logout
              </motion.button>
            </>
          ) : (
            <>
              <Link href="/login">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="bg-green-500 px-4 py-2 rounded cursor-pointer"
                >
                  Login
                </motion.span>
              </Link>
              <Link href="/register">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="bg-yellow-500 px-4 py-2 rounded cursor-pointer"
                >
                  Register
                </motion.span>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;