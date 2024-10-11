'use client';

import Navbar from '@/components/Navbar'; // Ensure this path is correct
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Welcome to Gym Management System</h1>
          <p className="text-xl mb-8">Manage your gym classes and memberships with ease.</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold cursor-pointer"
          >
            Get Started
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}