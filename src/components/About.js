import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white/50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Passionate Developer & Creative Thinker</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a dedicated MERN stack developer who believes in the power of clean code and beautiful design.
              With a keen eye for detail and a passion for creating seamless user experiences, I transform ideas
              into functional, elegant web applications.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              My journey in web development has been driven by curiosity and the desire to build solutions that
              make a difference. I love working across the full stack, from crafting intuitive user interfaces
              to designing robust backend architectures.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-soft-pink text-primary rounded-full text-sm font-medium">Problem Solver</span>
              <span className="px-4 py-2 bg-soft-purple text-secondary rounded-full text-sm font-medium">Team Player</span>
              <span className="px-4 py-2 bg-yellow-100 text-accent rounded-full text-sm font-medium">Creative Thinker</span>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-gray-600 dark:text-gray-300">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">2+</div>
                  <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">100%</div>
                  <div className="text-gray-600 dark:text-gray-300">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-gray-600 dark:text-gray-300">Learning</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-secondary/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;