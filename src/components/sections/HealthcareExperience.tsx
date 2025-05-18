import React from 'react';
import { HeartPulse, Users, Star, Stethoscope } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { SectionHeading } from '../ui/SectionHeading';
import { SkillBar } from '../ui/SkillBar';

export const HealthcareExperience: React.FC = () => {
  const transferableSkills = [
    { name: "Critical Thinking", percentage: 90, icon: <Star className="text-teal-600" size={18} /> },
    { name: "Communication", percentage: 95, icon: <Users className="text-teal-600" size={18} /> },
    { name: "Crisis Management", percentage: 85, icon: <HeartPulse className="text-teal-600" size={18} /> },
    { name: "Attention to Detail", percentage: 92, icon: <Stethoscope className="text-teal-600" size={18} /> },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Ghana Health Service Experience</SectionTitle>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <div className="space-y-6">
            <SectionHeading>A Decade of Healthcare Excellence</SectionHeading>
            
            <p className="text-slate-700">
              My career with the Ghana Health Service spanning over a decade as a midwife and nurse provided me with invaluable experiences that continue to shape my approach to legal practice.
            </p>
            
            <div className="bg-teal-50 border-l-4 border-teal-500 p-4 italic text-slate-700">
              "The skills I developed as a healthcare professional—empathy, attention to detail, crisis management, and communication—form the foundation of my legal practice today."
            </div>
            
            <p className="text-slate-700">
              Working in both urban and rural healthcare settings across Ghana gave me unique insights into the challenges facing our healthcare system and the legal frameworks that govern it. This experience has been instrumental in shaping my interest in medical law, patient rights, and healthcare policy.
            </p>
            
            <div className="mt-8">
              <h3 className="font-serif text-lg font-semibold text-navy-800 mb-4">Key Roles & Responsibilities</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-teal-100 rounded-full">
                    <HeartPulse className="text-teal-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-800">Maternal Healthcare</h4>
                    <p className="text-sm text-slate-600">Provided critical care for mothers during pregnancy and childbirth</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-teal-100 rounded-full">
                    <Users className="text-teal-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-800">Patient Education</h4>
                    <p className="text-sm text-slate-600">Educated patients on healthcare rights and responsibilities</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-teal-100 rounded-full">
                    <Stethoscope className="text-teal-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-800">Clinical Assessment</h4>
                    <p className="text-sm text-slate-600">Developed strong analytical and diagnostic skills</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-teal-100 rounded-full">
                    <Star className="text-teal-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-800">Advocacy</h4>
                    <p className="text-sm text-slate-600">Advocated for patients' needs and access to quality care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Healthcare Professional" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="font-serif text-white text-2xl font-semibold">Midwifery & Nursing</h3>
                <p className="text-slate-200">Ghana Health Service, 2010-2023</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
              <h3 className="font-serif text-xl font-semibold text-navy-800 mb-4">Transferable Skills</h3>
              <div className="space-y-4">
                {transferableSkills.map((skill) => (
                  <SkillBar 
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                    icon={skill.icon}
                  />
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-slate-50 rounded-lg">
                <h4 className="font-medium text-navy-800 mb-2">How These Skills Benefit Legal Practice:</h4>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="min-w-4 pt-0.5">•</div>
                    <span>The ability to quickly assess complex situations and identify key issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-4 pt-0.5">•</div>
                    <span>Clear communication of complex information to diverse audiences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-4 pt-0.5">•</div>
                    <span>Empathy and understanding when working with clients in difficult situations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-4 pt-0.5">•</div>
                    <span>Meticulous attention to detail critical for both legal documents and medical records</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};