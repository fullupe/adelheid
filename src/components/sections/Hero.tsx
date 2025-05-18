'use client';

import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-navy-800 text-white overflow-hidden">
      {/* Background with overlay gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg')",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-800/80"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 opacity-0 animate-fadeUp animation-delay-300">
          <span className="block">Adelheid London</span>
          <span className="text-gold-500 block mt-2">Attorney at Law</span>
        </h1>
        
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-slate-200 opacity-0 animate-fadeUp animation-delay-500">
          From healthcare to law: bringing a unique perspective to legal practice in Ghana
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 opacity-0 animate-fadeUp animation-delay-700">
          <a 
            href="#about" 
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Learn More
          </a>
          <a 
            href="#contact" 
            className="btn-secondary"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          aria-label="Scroll down"
        >
          <ArrowDown className="h-8 w-8 text-white" />
        </a>
      </div>
    </section>
  );
};