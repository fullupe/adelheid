'use client';

import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Scale } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Scale className="text-gold-500" size={24} />
              <h3 className="font-serif text-xl font-semibold">Adelheid London</h3>
            </div>
            <p className="text-slate-300 max-w-xs">
              A dedicated lawyer with a unique background in healthcare, bringing a fresh perspective to legal practice in Ghana.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-slate-300 hover:text-gold-500 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#qualifications" className="text-slate-300 hover:text-gold-500 transition-colors">
                  Legal Qualifications
                </a>
              </li>
              <li>
                <a href="#experience" className="text-slate-300 hover:text-gold-500 transition-colors">
                  Healthcare Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-300 hover:text-gold-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold">Contact Information</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-gold-500" />
                <span className="text-slate-300">contact@adelheidlondon.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-gold-500" />
                <span className="text-slate-300">+233 54 320 9912</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-gold-500 mt-1" />
                <span className="text-slate-300">Accra, Ghana</span>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin size={16} className="text-gold-500" />
                <a href="#" className="text-slate-300 hover:text-gold-500 transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-navy-700 mt-8 pt-8 text-center text-slate-400">
          <p>© {currentYear} Adelheid London. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};