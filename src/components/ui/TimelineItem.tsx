import React from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ 
  year, 
  title, 
  description,
  isLast = false 
}) => {
  return (
    <div className={`pl-8 relative ${!isLast ? 'pb-8' : ''}`}>
      <div className="absolute left-0 mt-1.5 w-3.5 h-3.5 bg-gold-500 rounded-full"></div>
      <div className="text-sm font-semibold text-gold-600 mb-1">{year}</div>
      <h3 className="font-medium text-navy-800 text-lg">{title}</h3>
      <p className="mt-1 text-slate-600">{description}</p>
    </div>
  );
};