import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-light-card dark:bg-dark-card py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400">
              © 2025 Dinuka Keshan. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
              Built with React, Tailwind CSS, and Three.js
            </p>
          </div>

          <div className="flex items-center space-x-6">
            {/* Quick Links */}
            <a
              href="https://github.com/DinukaKeshan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary 
                       dark:hover:text-accent transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/dinukakeshan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary 
                       dark:hover:text-accent transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="mailto:keshan.contact@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-primary 
                       dark:hover:text-accent transition-colors duration-200"
            >
              Email
            </a>

            {/* Scroll to top button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="p-2 bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent 
                       rounded-lg hover:bg-primary/20 dark:hover:bg-accent/20 
                       transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;