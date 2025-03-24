import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { User, Briefcase, Mail, Github, Linkedin, Twitter } from 'lucide-react';

// Pages
import Profile from './pages/Profile';
import Works from './pages/Works';
import Contact from './pages/Contact';

function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
        isActive
          ? 'bg-indigo-100 text-indigo-700'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {children}
    </Link>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="fixed top-0 left-0 right-0 bg-white border-b z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="text-xl font-bold text-indigo-600">
                  Portfolio
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <NavLink to="/"><User size={20} />Profile</NavLink>
                <NavLink to="/works"><Briefcase size={20} />Works</NavLink>
                <NavLink to="/contact"><Mail size={20} />Contact</NavLink>
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-16 min-h-screen">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <p className="text-gray-500">© 2025 Portfolio. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="https://github.com" className="text-gray-400 hover:text-gray-600">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com" className="text-gray-400 hover:text-gray-600">
                  <Linkedin size={20} />
                </a>
                <a href="https://twitter.com" className="text-gray-400 hover:text-gray-600">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;