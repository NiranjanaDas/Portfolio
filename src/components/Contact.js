import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    // Show success message (in a real application, you would send this to a server)
    alert('Thank you for your message! I\'ll get back to you soon.');

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-slate-800/50 dark:to-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. Let's connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                <i className="fas fa-envelope text-white"></i>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-100">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">niranjanadas777@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                <i className="fas fa-map-marker-alt text-white"></i>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-100">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">Kerala, India</p>
              </div>
            </div>
            <div className="pt-6">
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/NiranjanaDas" className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white hover:shadow-lg transform hover:scale-110 transition-all duration-300">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/" className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white hover:shadow-lg transform hover:scale-110 transition-all duration-300">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/ni__ra__nja__na__?utm_source=ig_web_button_share_sheet&igsh=MWxkOHM5NnB3M2gzbw==" className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white hover:shadow-lg transform hover:scale-110 transition-all duration-300">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;