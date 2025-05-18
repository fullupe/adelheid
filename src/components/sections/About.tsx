import React from 'react';
import { Award, BookOpen, HeartPulse, Scale } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { SectionHeading } from '../ui/SectionHeading';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img 
                src="https://res.cloudinary.com/dtho1iv7d/image/upload/v1747519259/PHOTO-2025-05-17-22-55-15_ex3m7g.jpg" 
                alt="Adelheid London, Attorney at Law" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 shadow-lg rounded-lg">
              <div className="flex items-center gap-2 text-navy-800">
                <Scale className="text-gold-500" />
                <span className="font-serif font-semibold">Called to the Ghana Bar, 2025</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <SectionHeading>From Healthcare to Law: My Unique Journey</SectionHeading>
            
            <p className="text-slate-700">
              As the first female lawyer in my family and the first Ghana Health Service midwife to transition to legal practice, my journey represents a unique intersection of healthcare and law.
            </p>
            
            <p className="text-slate-700">
              My background in midwifery and nursing has equipped me with exceptional skills in communication, critical thinking, and compassion—attributes that I now bring to my legal practice. Working in Ghana's healthcare system, I witnessed firsthand the importance of advocacy and the impact of legal frameworks on patient care and healthcare delivery.
            </p>
            
            <p className="text-slate-700">
              This distinctive perspective allows me to approach legal challenges with both analytical precision and deep empathy, particularly in cases involving healthcare, women's rights, and social justice.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <HeartPulse className="text-teal-600" size={20} />
                  <h3 className="font-semibold text-navy-800">Healthcare Insight</h3>
                </div>
                <p className="text-sm text-slate-600">Unique understanding of medical ethics and healthcare systems</p>
              </div>
              
              <div className="p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="text-teal-600" size={20} />
                  <h3 className="font-semibold text-navy-800">Legal Knowledge</h3>
                </div>
                <p className="text-sm text-slate-600">Comprehensive education in Ghana's legal framework</p>
              </div>
              
              <div className="p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="text-teal-600" size={20} />
                  <h3 className="font-semibold text-navy-800">Trailblazer</h3>
                </div>
                <p className="text-sm text-slate-600">First in family and from GHS to enter legal profession</p>
              </div>
              
              <div className="p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Scale className="text-teal-600" size={20} />
                  <h3 className="font-semibold text-navy-800">Balanced Approach</h3>
                </div>
                <p className="text-sm text-slate-600">Combining empathy from healthcare with legal precision</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};