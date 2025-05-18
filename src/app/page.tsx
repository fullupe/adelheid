'use client';

import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { LegalQualifications } from '@/components/sections/LegalQualifications';
import { HealthcareExperience } from '@/components/sections/HealthcareExperience';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/ui/ScrollToTop';

export default function Home() {
  return (
    <div className="font-sans bg-slate-50">
      <Header />
      <main>
        <Hero />
        <About />
        <LegalQualifications />
        <HealthcareExperience />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}