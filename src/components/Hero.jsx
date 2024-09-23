import React from 'react';
import { motion } from 'framer-motion'; // Optionally, install this for animations

const Hero = () => {
  return (
    <section className="bg-green-100 h-screen flex flex-col justify-center items-center text-center">
      <motion.h1 
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Print Your Dreams
      </motion.h1>
      <p className="text-lg text-gray-700 mb-8">Create custom products with ease and style.</p>
      <motion.button
        className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
        whileHover={{ scale: 1.1 }}
      >
        Get Started
      </motion.button>
    </section>
  );
};

export default Hero;
