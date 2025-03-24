import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { supabase } from './supabaseClient';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const { error: supabaseError } = await supabase
        .from('contact_messages')
        .insert([formData]);

      if (supabaseError) throw supabaseError;
      
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (err) {
      setError('Failed to send message. Please try again later.');
      setTimeout(() => {
        setError('');
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {showSuccess && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-name">
          Message sent successfully!
        </div>
      )}
      
      {error && (
        <div className="fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg animate-name">
          {error}
        </div>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Mail className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Email</p>
                <p className="text-sm text-gray-500">john.doe@example.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Phone className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Phone</p>
                <p className="text-sm text-gray-500">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <MapPin className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Location</p>
                <p className="text-sm text-gray-500">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} className="mr-2" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}