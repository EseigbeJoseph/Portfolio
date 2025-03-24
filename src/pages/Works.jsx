import React from 'react';
import { ExternalLink, Github, Briefcase, Calendar, Building2 } from 'lucide-react';

const projects = [
  {
    title: 'Food Website',
    description: 'A Landing Page displaying different variety of dishes and their prices',
    image: './src/images/food website.png',
    technologies: ['HTML', 'CSS'],
    link: 'foodwebsiteorg.netlify.app',
    github: 'https://github.com/EseigbeJoseph/Food-Website.git'
  },
  {
    title: 'Tour Management App',
    description: 'A trip booking app where users can book flights and tours all in one place.',
    image: './src/images/Tour.png',
    technologies: ['Express.js', 'React.js', 'Node.js', 'MongoDB'],
    link: 'https://packandgotour.netlify.app/',
    github: 'https://github.com/EseigbeJoseph/Tour-Management-project.git'
  },
  {
    title: 'Graphic User Interface',
    description: 'A prototype for the integration of TSN with 5G MEC platform',
    image: 'https://images.unsplash.com/photo-1525373698358-041e3a460346?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['React.js', 'Node.js', 'MongoDB'],
    link: 'https://example.com',
    github: 'https://github.com'
  }
];

const experiences = [
  {
    company: 'Lokkit Oy',
    role: 'Trainee as a Front-End Developer',
    period: '08/2023 - 04/2024',
    description: "Worked as a productive and positive team member to create a website for electronic gadget sales.",
    color: 'from-blue-500 to-indigo-500',
    icon: Building2
  },
  {
    company: 'Cumocore Oy',
    role: 'Trainee as a Full Stack Developer',
    period: '01/2025 - 03/2025',
    description: "Designed a Graphic User Interface (GUI) prototype for the integration of TSN with 5G MEC platform.",
    color: 'from-purple-500 to-pink-500',
    icon: Briefcase
  },
  {
    company: 'School Project',
    role: 'Frontend Developer',
    period: '2023',
    description: 'A trip booking app where users can book flights and tours all in one place..',
    color: 'from-emerald-500 to-teal-500',
    icon: Calendar
  }
];

export default function Works() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div 
                key={index} 
                className="experience-card bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg"
              >
                <div className={`h-2 bg-gradient-to-r ${exp.color}`} />
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${exp.color}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                        <p className="text-indigo-600 font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-4 text-gray-600 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-4">
                  <a
                    href={project.link}
                    className="flex items-center text-indigo-600 hover:text-indigo-700"
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center text-gray-600 hover:text-gray-700"
                  >
                    <Github size={16} className="mr-1" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}