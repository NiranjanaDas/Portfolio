import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: 'fas fa-palette',
      color: 'from-blue-400 to-blue-600',
      skills: [
        { name: 'React', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML/CSS', level: 95 }
      ]
    },
    {
      category: 'Backend',
      icon: 'fas fa-server',
      color: 'from-green-400 to-green-600',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 90 },
        { name: 'REST APIs', level: 88 }
      ]
    },
    {
      category: 'Database',
      icon: 'fas fa-database',
      color: 'from-purple-400 to-purple-600',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'Mongoose', level: 80 },
        { name: 'SQL', level: 75 }
      ]
    },
    {
      category: 'Tools',
      icon: 'fas fa-tools',
      color: 'from-pink-400 to-pink-600',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Postman', level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillCategory, index) => (
            <div key={index} className="skill-category bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${skillCategory.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${skillCategory.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{skillCategory.category}</h3>
              </div>
              <div className="space-y-4">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${skillCategory.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;