import React from 'react';
import { BookOpen, Award, GraduationCap } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { TimelineItem } from '../ui/TimelineItem';

export const LegalQualifications: React.FC = () => {
  return (
    <section id="qualifications" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Legal Qualifications</SectionTitle>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
              <GraduationCap className="text-gold-500 mb-4" size={32} />
              <h3 className="font-serif text-xl font-semibold text-navy-800 mb-2">Education</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="min-w-5 pt-1">
                    <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                  </div>
                  <div>
                    <p className="font-medium text-navy-800">LLB, Faculty of Law</p>
                    <p className="text-sm text-slate-600">University of Ghana, Legon</p>
                    <p className="text-xs text-slate-500">2018 - 2021</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-5 pt-1">
                    <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                  </div>
                  <div>
                    <p className="font-medium text-navy-800">Professional Law Course</p>
                    <p className="text-sm text-slate-600">Ghana School of Law</p>
                    <p className="text-xs text-slate-500">2021 - 2024</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
              <Award className="text-gold-500 mb-4" size={32} />
              <h3 className="font-serif text-xl font-semibold text-navy-800 mb-2">Bar Admission</h3>
              <p className="text-slate-700 mb-4">
                Called to the Ghana Bar in 2025, licensed to practice law throughout Ghana.
              </p>
              <div className="flex justify-center">
                <div className="relative h-20 w-32">
                  <img 
                    src="https://res.cloudinary.com/dtho1iv7d/image/upload/v1747519260/PHOTO-2025-05-17-22-55-16_3_kjvfcj.jpg" 
                    alt="Ghana Bar Association Logo" 
                    className="object-contain h-full w-full grayscale"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 h-full">
              <BookOpen className="text-gold-500 mb-4" size={32} />
              <h3 className="font-serif text-xl font-semibold text-navy-800 mb-6">Legal Journey</h3>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-slate-200">
                <TimelineItem 
                  year="2018"
                  title="Embarked on Legal Education"
                  description="Began law studies while still working part-time as a midwife, balancing healthcare duties with academic pursuits."
                />
                
                <TimelineItem 
                  year="2021"
                  title="Graduated with LLB"
                  description="Completed Bachelor of Laws degree from the University of Ghana, focusing on healthcare law and human rights."
                />
                
                <TimelineItem 
                  year="2021-2023"
                  title="Ghana School of Law"
                  description="Completed professional law course and training, developing practical legal skills while maintaining connections to healthcare advocacy."
                />
                
                <TimelineItem 
                  year="2023"
                  title="Called to the Ghana Bar"
                  description="Officially admitted to practice law in Ghana, becoming the first female lawyer in my family and the first GHS midwife to transition to legal practice."
                />
                
                <TimelineItem 
                  year="Present"
                  title="Legal Practice"
                  description="Focusing on developing a practice that bridges healthcare knowledge with legal expertise, with special interest in medical law, women's rights, and access to justice."
                  isLast={true}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-navy-800 text-white p-8 rounded-lg">
          <h3 className="font-serif text-2xl font-semibold mb-4 text-center">Areas of Legal Interest</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <div className="bg-navy-700/50 p-4 rounded-lg text-center hover:bg-navy-700 transition-colors">
              <div className="h-12 flex items-center justify-center">
                <img 
                  src="https://res.cloudinary.com/dtho1iv7d/image/upload/v1747519261/PHOTO-2025-05-17-22-55-17_rnbckp.jpg" 
                  alt="Medical Law icon" 
                  className="h-8 opacity-80"
                />
              </div>
              <h4 className="font-serif font-medium mt-2">Medical Law</h4>
            </div>
            <div className="bg-navy-700/50 p-4 rounded-lg text-center hover:bg-navy-700 transition-colors">
              <div className="h-12 flex items-center justify-center">
                <img 
                  src="https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Human Rights icon" 
                  className="h-8 opacity-80"
                />
              </div>
              <h4 className="font-serif font-medium mt-2">Human Rights</h4>
            </div>
            <div className="bg-navy-700/50 p-4 rounded-lg text-center hover:bg-navy-700 transition-colors">
              <div className="h-12 flex items-center justify-center">
                <img 
                  src="https://res.cloudinary.com/dtho1iv7d/image/upload/v1747519259/PHOTO-2025-05-17-22-55-16_2_yi9n4p.jpg" 
                  alt="Women's Rights icon" 
                  className="h-8 opacity-80"
                />
              </div>
              <h4 className="font-serif font-medium mt-2">Women's Rights</h4>
            </div>
            <div className="bg-navy-700/50 p-4 rounded-lg text-center hover:bg-navy-700 transition-colors">
              <div className="h-12 flex items-center justify-center">
                <img 
                  src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Healthcare Policy icon" 
                  className="h-8 opacity-80"
                />
              </div>
              <h4 className="font-serif font-medium mt-2">Healthcare Policy</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};