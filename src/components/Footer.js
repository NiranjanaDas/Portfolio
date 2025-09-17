import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white/80 dark:bg-slate-800/80 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Niranjana Das
            </span>
            <p className="text-gray-600 dark:text-gray-300 mt-1">MERN Stack Developer</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-600 dark:text-gray-300">© 2025 Niranjana Das. All rights reserved.</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Made with ❤️ and lots of ☕</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;