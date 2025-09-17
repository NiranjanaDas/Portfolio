import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, product management, and payment integration.',
      icon: 'fas fa-shopping-cart',
      color: 'from-pink-400 to-purple-500',
      tags: ['React', 'Node.js', 'MongoDB'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates, drag-and-drop functionality.',
      icon: 'fas fa-tasks',
      color: 'from-blue-400 to-indigo-500',
      tags: ['React', 'Express', 'Socket.io'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Personal Blog',
      description: 'A modern blog platform with rich text editor, comments system, and admin dashboard.',
      icon: 'fas fa-blog',
      color: 'from-green-400 to-teal-500',
      tags: ['React', 'Node.js', 'MongoDB'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white/50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <i className={`${project.icon} text-white text-4xl`}></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} className="text-primary hover:text-secondary transition-colors">
                    <i className="fab fa-github text-xl"></i>
                  </a>
                  <a href={project.demo} className="text-primary hover:text-secondary transition-colors">
                    <i className="fas fa-external-link-alt text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;