import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ children }) => {
  return (
    <h3 className="font-serif text-2xl md:text-3xl font-semibold text-navy-800 leading-tight">
      {children}
    </h3>
  );
};