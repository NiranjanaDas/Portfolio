import React from 'react';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary p-1">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <img src="/images/profile.jpg" alt="Niranjana Das" className="w-full h-full rounded-full object-cover" />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-secondary rounded-full animate-bounce"></div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Niranjana</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            A passionate <span className="font-semibold text-primary">MERN Stack Developer</span> crafting beautiful and functional web experiences with creativity and precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
          <div className="flex justify-center space-x-6 mt-8">
            <a href="https://github.com/NiranjanaDas" className="text-gray-600 dark:text-gray-400 hover:text-primary transform hover:scale-110 transition-all duration-300">
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a href="https://www.linkedin.com/" className="text-gray-600 dark:text-gray-400 hover:text-primary transform hover:scale-110 transition-all duration-300">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="https://www.instagram.com/ni__ra__nja__na__?utm_source=ig_web_button_share_sheet&igsh=MWxkOHM5NnB3M2gzbw==" className="text-gray-600 dark:text-gray-400 hover:text-primary transform hover:scale-110 transition-all duration-300">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;