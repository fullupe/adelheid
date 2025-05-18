import React from 'react';

interface SkillBarProps {
  name: string;
  percentage: number;
  icon?: React.ReactNode;
}

export const SkillBar: React.FC<SkillBarProps> = ({ name, percentage, icon }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          {icon && <span>{icon}</span>}
          <span className="font-medium text-navy-800">{name}</span>
        </div>
        <span className="text-sm text-slate-500">{percentage}%</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-teal-500 to-teal-600 h-2 rounded-full" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};