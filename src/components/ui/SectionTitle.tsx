import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-800 mb-4">
        {children}
      </h2>
      <div className="w-24 h-1 bg-gold-500"></div>
    </div>
  );
};