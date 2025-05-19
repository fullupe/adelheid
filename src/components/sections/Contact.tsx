'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: '', email: '', phone: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Get in Touch</SectionTitle>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="font-serif text-2xl text-navy-800 font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold-50 text-gold-500 rounded-full">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-navy-800">Email</h4>
                  <p className="text-slate-600">contact@adelheidlondon.com</p>
                  <p className="text-sm text-slate-500 mt-1">Response within 24-48 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold-50 text-gold-500 rounded-full">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-navy-800">Phone</h4>
                  <p className="text-slate-600">+233 54 320 9912</p>
                  <p className="text-sm text-slate-500 mt-1">Available Monday-Friday, 9am-5pm GMT</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold-50 text-gold-500 rounded-full">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-navy-800">Office Location</h4>
                  <p className="text-slate-600">Accra, Ghana</p>
                  <p className="text-sm text-slate-500 mt-1">Consultations by appointment</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="font-serif text-xl text-navy-800 font-semibold mb-4">Areas of Practice</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <div className="min-w-4 pt-0.5 text-gold-500">•</div>
                  <span>Medical Law & Healthcare Regulations</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 pt-0.5 text-gold-500">•</div>
                  <span>Women's Rights & Family Law</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 pt-0.5 text-gold-500">•</div>
                  <span>Corporate & Commercial Law</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 pt-0.5 text-gold-500">•</div>
                  <span>Human Rights & Social Justice</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="font-serif text-2xl text-navy-800 font-semibold mb-6">Send a Message</h3>
            
            {submitSuccess ? (
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-green-800">
                      Thank you for your message! I'll get back to you as soon as possible.
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition"
                  placeholder="William Berima"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition"
                  placeholder="william.berima@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition"
                  placeholder="+233 XX XXX XXXX"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 py-2 px-4 bg-navy-800 text-white rounded-md hover:bg-navy-700 transition ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};