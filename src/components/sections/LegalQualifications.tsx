import React from 'react';
import { BookOpen, Award, GraduationCap, Stethoscope, BookMarked } from 'lucide-react';
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
                    <p className="text-sm text-slate-600">Central University</p>
                    <p className="text-xs text-slate-500">2019-2021</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-5 pt-1">
                    <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                  </div>
                  <div>
                    <p className="font-medium text-navy-800">BSc. Midwifery, Ghana Health Service</p>
                    <p className="text-sm text-slate-600">K N U S T, Kumasi</p>
                    <p className="text-xs text-slate-500">2015- 2018</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-5 pt-1">
                    <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                  </div>
                  <div>
                    <p className="font-medium text-navy-800">Diploma in Midwifery, Ghana Health Service</p>
                    <p className="text-sm text-slate-600"> St. Patrick’s MTS</p>
                    <p className="text-xs text-slate-500">2007 - 2010</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-5 pt-1">
                    <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                  </div>
                  <div>
                    <p className="font-medium text-navy-800">WASSCE, Ghana Education Service</p>
                    <p className="text-sm text-slate-600"> Tweneboah Koduah SSS</p>
                    <p className="text-xs text-slate-500">2003 - 2006</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="min-w-5 pt-1">
                    <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                  </div>
                  <div>
                    <p className="font-medium text-navy-800">BECE, Ghana Education Service</p>
                    <p className="text-sm text-slate-600">Otuo Acheampong Int. Sch. </p>
                    <p className="text-xs text-slate-500">2000 - 2003</p>
                  </div>
                </li>
                
              </ul>
            </div>

           
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
              <Stethoscope className="text-gold-500 mb-4" size={32} />
              <h3 className="font-serif text-xl font-semibold text-navy-800 mb-2">Healthcare Career</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-teal-500 pl-4">
                  <p className="font-medium text-navy-800">Senior Midwifery Officer</p>
                  <p className="text-sm text-slate-600">St. Michael's Catholic Hospital</p>
                  <p className="text-xs text-slate-500">June 2021 - Present</p>
                  <ul className="mt-2 text-sm text-slate-600 list-disc list-inside">
                    <li>Training and supervision of junior midwives</li>
                    <li>Comprehensive maternal healthcare services</li>
                  </ul>
                </div>

                <div className="border-l-2 border-teal-500 pl-4">
                  <p className="font-medium text-navy-800">Midwifery Officer</p>
                  <p className="text-sm text-slate-600">St. Michael's Catholic Hospital</p>
                  <p className="text-xs text-slate-500">June 2018 - June 2021</p>
                  <ul className="mt-2 text-sm text-slate-600 list-disc list-inside">
                    <li>Preceptor for St. Michael's Midwifery School</li>
                    <li>Comprehensive maternal care services</li>
                  </ul>
                </div>

                <div className="border-l-2 border-teal-500 pl-4">
                  <p className="font-medium text-navy-800">Senior Staff Midwife</p>
                  <p className="text-sm text-slate-600">St. Michael's Catholic Hospital</p>
                  <p className="text-xs text-slate-500">June 2015 - June 2018</p>
                  <ul className="mt-2 text-sm text-slate-600 list-disc list-inside">
                    <li>Advanced delivery and pregnancy care</li>
                    <li>Treatment of pregnancy-related conditions</li>
                  </ul>
                </div>

                <div className="border-l-2 border-teal-500 pl-4">
                  <p className="font-medium text-navy-800">Staff Midwife</p>
                  <p className="text-sm text-slate-600">St. Michael's Catholic Hospital</p>
                  <p className="text-xs text-slate-500">March 2012 - June 2015</p>
                  <ul className="mt-2 text-sm text-slate-600 list-disc list-inside">
                    <li>Comprehensive maternal care services</li>
                    <li>Management of all stages of labor</li>
                  </ul>
                </div>

                <div className="border-l-2 border-teal-500 pl-4">
                  <p className="font-medium text-navy-800">National Service Personnel</p>
                  <p className="text-sm text-slate-600">St. Michael's Catholic Hospital</p>
                  <p className="text-xs text-slate-500">January 2011 - January 2012</p>
                </div>
              </div>
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
                  year="2019"
                  title="Embarked on Legal Education"
                  description="Began law studies while still working part-time as a midwife, balancing healthcare duties with academic pursuits."
                />
                
                <TimelineItem 
                  year="2021"
                  title="Graduated with LLB"
                  description="Completed Bachelor of Laws degree from the University of Ghana, focusing on healthcare law and human rights."
                />
                
                <TimelineItem 
                  year="2019-2021"
                  title="Ghana School of Law"
                  description="Completed professional law course and training, developing practical legal skills while maintaining connections to healthcare advocacy."
                />
                
                <TimelineItem 
                  year="2025"
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



        <div className="mt-16 bg-white p-8 rounded-lg shadow-sm">
          <BookMarked className="text-gold-500 mb-4" size={32} />
          <h3 className="font-serif text-2xl font-semibold mb-6 text-center">Professional Development & Workshops</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-serif text-lg font-semibold text-navy-800">2020</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <div className="min-w-4 pt-0.5 text-gold-500">•</div>
                  <span>First Antenatal examination</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 pt-0.5 text-gold-500">•</div>
                  <span>Basic care of the unborn</span>
                </li>
              </ul>

              <h4 className="font-serif text-lg font-semibold text-navy-800 mt-6">2019</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <div className="min-w-4 pt-0.5 text-gold-500">•</div>
                  <span>Anger management (ST. MICHAEL'S HOSPITAL)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 pt-0.5 text-gold-500">•</div>
                  <span>Surgical wound infection (GRNMA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 pt-0.5 text-gold-500">•</div>
                  <span>Management of birth asphyxia (GRNMA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 pt-0.5 text-gold-500">•</div>
                  <span>Use of drugs in pregnancy (NIGHTINGALE)</span>
                </li>
              </ul>

              <h4 className="font-serif text-lg font-semibold text-navy-800 mt-6">2018</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <div className="min-w-4 pt-0.5 text-gold-500">•</div>
                  <span>Physiology of breast milk production and advantages (GRNMA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 pt-0.5 text-gold-500">•</div>
                  <span>Thyroid storm and its management (GRNMA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 pt-0.5 text-gold-500">•</div>
                  <span>Pain management (GRNMA)</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-serif text-lg font-semibold text-navy-800">2014-2016</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <div className="min-w-4 pt-0.5 text-gold-500">•</div>
                  <span>Effects of antiretroviral treatments (GRNMA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 pt-0.5 text-gold-500">•</div>
                  <span>Dental caries (GRNMA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 pt-0.5 text-gold-500">•</div>
                  <span>Management of Diabetes Mellitus (GRNMA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 pt-0.5 text-gold-500">•</div>
                  <span>Burns and debridement (GRNA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 pt-0.5 text-gold-500">•</div>
                  <span>Code of professional conduct and IV artesunate treatment for severe malaria</span>
                </li>
              </ul>

              <h4 className="font-serif text-lg font-semibold text-navy-800 mt-6">2012-2013</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <div className="min-w-4 pt-0.5 text-gold-500">•</div>
                  <span>Prevention of mother to child transmission of HIV (Ghana Health Service)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 pt-0.5 text-gold-500">•</div>
                  <span>Incorporating nursing process in contemporary nursing practice (GRNA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 pt-0.5 text-gold-500">•</div>
                  <span>Financial management for a secured future (GRNA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 pt-0.5 text-gold-500">•</div>
                  <span>The menstrual cycle, pregnancy and antenatal care (MOTEC UK)</span>
                </li>
              </ul>
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