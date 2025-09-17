import React, { useEffect, useState } from 'react';

const Navbar = ({ theme, toggleTheme, mobileMenuOpen, toggleMobileMenu, scrollToSection }) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 80;

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-b border-pink-100 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Niranjana Das
            </span>
          </div>
          <div className="flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors duration-300"
              title="Toggle dark/light mode"
            >
              <i id="theme-icon" className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'} text-xl`}></i>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`nav-link px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 capitalize ${
                      activeSection === section
                        ? 'text-primary font-semibold'
                        : 'text-gray-700 dark:text-gray-300 hover:text-primary'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className={`text-gray-700 dark:text-gray-300 hover:text-primary relative w-8 h-8 flex flex-col justify-center items-center transition-all duration-300 ${
                  mobileMenuOpen ? 'hamburger-active' : ''
                }`}
              >
                <div className="hamburger-line w-6 h-0.5 bg-current transition-all duration-300 ease-in-out transform origin-center"></div>
                <div className="hamburger-line w-6 h-0.5 bg-current transition-all duration-300 ease-in-out transform origin-center mt-1"></div>
                <div className="hamburger-line w-6 h-0.5 bg-current transition-all duration-300 ease-in-out transform origin-center mt-1"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white/90 dark:bg-slate-800/90 backdrop-blur-md transition-all duration-300 ${
          mobileMenuOpen ? 'mobile-menu-enter' : 'mobile-menu-exit'
        } ${mobileMenuOpen ? 'block' : 'hidden'}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors capitalize ${
                activeSection === section ? 'text-primary font-semibold' : ''
              }`}
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;