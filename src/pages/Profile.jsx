import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

export default function Profile() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="h-60 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-30 bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/90 to-slate-800/90"></div>
        </div>
        <div className="relative px-6 pb-8">
          <div className="flex flex-col sm:flex-row items-center">
            <img
              className="w-32 h-32 rounded-full border-4 border-white -mt-16 shadow-lg"
              src="./images/ej.jpg"
              alt="Profile"
            />
            <div className="mt-6 sm:mt-0 sm:ml-6 text-center sm:text-left">
              <h1 className="text-3xl font-bold text-gray-900">
                <span className="animate-name inline-block">Eseigbe</span>{' '}
                <span className="animate-name animate-name-delay-1 inline-block">Joseph</span>
              </h1>
              <p className="text-lg text-gray-600 animate-name animate-name-delay-2">Junior Software Engineer</p>
              <div className="mt-2 flex flex-wrap gap-4 justify-center sm:justify-start">
                <span className="flex items-center text-sm text-gray-500">
                  <Calendar size={16} className="mr-1" /> 1 year experience
                </span>
                <span className="flex items-center text-sm text-gray-500">
                  <MapPin size={16} className="mr-1" /> Järvenpää, Finland
                </span>
                <span className="flex items-center text-sm text-gray-500">
                  <Award size={16} className="mr-1" /> Front End Developer
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-gray-600 leading-relaxed">
            Junior Web Developer with a strong foundation in front-end technologies including HTML, CSS, and JavaScript. Adept at building responsive and user-friendly websites, with experience in developing clean, maintainable code and troubleshooting issues across browsers.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {['React', 'JavaScript', 'Node.js', 'Ms Excel', 'HTML and CSS'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Language Skills</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">English</h3>
                  <p className="text-sm text-gray-600">Mother Tongue</p>
                </div>
                <div className="w-32 h-2 bg-gray-200 rounded-full">
                  <div className="w-full h-full bg-indigo-600 rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Finnish</h3>
                  <p className="text-sm text-gray-600">Intermediate (B1.1)</p>
                </div>
                <div className="w-32 h-2 bg-gray-200 rounded-full">
                  <div className="w-1/2 h-full bg-indigo-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}