'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TestimonialsSection from '@/components/TestimonialsSection';
import AboutUsSection from '@/components/AboutUsSection';
import StatsSmallSection from '@/components/StatsSmallSection';
import ServicesSection from '@/components/ServicesSection';
import ApplicationProcessSection from '@/components/ApplicationProcessSection';
import CostSmallSection from '@/components/CostSmallSection';
import FourStepsJourneySection from '@/components/FourStepsJourneySection';
import FaqSection from '@/components/FaqSection';
import CtaSmallSection from '@/components/CtaSmallSection';
import TickerStrip from '@/components/TickerStrip';
import Footer from '@/components/Footer';
import AssessmentModal from '@/components/AssessmentModal';

export default function CMGHomepage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [defaultPathway, setDefaultPathway] = useState('General Skilled Migration');

  const handleOpenAssessment = (pathway = 'General Skilled Migration') => {
    setDefaultPathway(pathway);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen w-full bg-yellow-50 flex flex-col justify-start items-center">
      {/* 1. Header Navigation */}
      <Navbar onOpenAssessment={() => handleOpenAssessment()} />

      {/* 2. Hero Section with Background Video & Trust Strip */}
      <Hero onOpenAssessment={() => handleOpenAssessment()} />

      {/* 3. Verified Outcomes / Testimonials */}
      <TestimonialsSection />

      {/* 4. Who We Are / About Us */}
      <AboutUsSection />

      {/* 5. Points & Visa Categories Highlights */}
      <StatsSmallSection />

      {/* 6. Visa Pathways & Services */}
      <ServicesSection onSelectService={(s) => handleOpenAssessment(s)} />

      {/* 7. Application Sequence & Waiting Process */}
      <ApplicationProcessSection />

      {/* 8. Application Cost Callout */}
      <CostSmallSection onOpenAssessment={() => handleOpenAssessment('Cost Assessment')} />

      {/* 9. Four-Step Journey with CMG */}
      <FourStepsJourneySection />

      {/* 10. Immigration Questions & Answers FAQ */}
      <FaqSection />

      {/* 11. Final Action Step CTA */}
      <CtaSmallSection onOpenAssessment={() => handleOpenAssessment()} />

      {/* 12. Bottom Keywords Ticker Ribbon */}
      <TickerStrip />

      {/* 13. Comprehensive Footer */}
      <Footer />

      {/* Interactive Modal Assessment Form */}
      <AssessmentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultPathway={defaultPathway}
      />
    </main>
  );
}
