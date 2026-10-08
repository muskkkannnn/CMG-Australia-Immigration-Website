'use client';

import React, { useState } from 'react';

export default function FourStepsJourneySection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Free Consultation',
      expandedTitle: '01  Eligibility review & pathway choices',
      timeline: 'Day 1',
      desc: 'Points are scored against real documents, not intentions, and the strongest pathway is selected before anything is lodged.',
    },
    {
      num: '02',
      title: 'Personalised Strategy',
      expandedTitle: '02  Personalised Strategy & Migration Roadmap',
      timeline: 'Week 1-2',
      desc: 'Our registered MARA agent formulates a bespoke timeline, identifying optimal state nominations, ANZSCO codes, and points maximisation avenues.',
    },
    {
      num: '03',
      title: 'Application Preparation',
      expandedTitle: '03  Application Preparation & Legal Submissions',
      timeline: 'Month 1-3',
      desc: 'Thorough document verification, employer reference vetting, statutory declarations, and submission of decision-ready file directly to DHA.',
    },
    {
      num: '04',
      title: 'Approval & Arrival',
      expandedTitle: '04  Approval, Visa Grant & Relocation Support',
      timeline: 'Final Stage',
      desc: 'Notification of official Australian permanent residency or visa grant with full guidance on initial arrival, Medicare enrolment, and settlement.',
    },
  ];

  const current = steps[activeStep];

  return (
    <section id="journey" className="w-full bg-yellow-50 py-16 lg:py-20 relative">
      <div className="w-full max-w-[1296px] mx-auto px-6 sm:px-10 lg:px-0 flex flex-col items-center gap-14 lg:gap-16">
        {/* Headlines */}
        <div className="w-full max-w-[960px] pt-2 flex flex-col items-center gap-5 text-center">
          <div className="h-5 inline-flex items-center gap-3">
            <svg width="34" height="1" viewBox="0 0 34 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.65" width="33.99" height="1" fill="#9F9B0D" />
            </svg>
            <span className="text-yellow-600 text-xs font-semibold font-['Host_Grotesk'] uppercase leading-5 tracking-[2.42px]">
              sequence & process
            </span>
          </div>

          <div className="w-full flex flex-col items-center gap-3">
            <h2 className="text-cyan-800 text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['NanumMyeongjo'] leading-tight lg:leading-[48px]">
              Your Australia journey with CMG in four steps.
            </h2>
            <p className="text-Dark-Green-Brand text-base sm:text-lg lg:text-xl font-normal font-['Host_Grotesk'] leading-relaxed max-w-3xl">
              A clear, transparent process from first consultation to visa grant.
            </p>
          </div>
        </div>

        {/* 4 Cards & Expanded Box */}
        <div className="w-full flex flex-col items-center gap-8">
          {/* Centered 4 Cards */}
          <div className="w-full max-w-[738px] grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 justify-center">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full min-h-[144px] px-4 py-5 rounded-sm flex flex-col justify-between items-start text-left transition-all cursor-pointer ${
                    isActive
                      ? 'bg-yellow-200 outline outline-2 outline-cyan-800 shadow-sm'
                      : 'bg-transparent outline outline-[1.30px] outline-offset-[-0.65px] outline-cyan-800 hover:bg-yellow-100/50'
                  }`}
                >
                  <div className="text-cyan-800 text-3xl sm:text-4xl font-extrabold font-['NanumMyeongjo'] leading-10">
                    {step.num}
                  </div>
                  <div className="text-black text-sm sm:text-base font-medium font-['Host_Grotesk'] leading-5 mt-2">
                    {step.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Detail Box Below */}
          <article className="w-full min-h-[224px] px-6 sm:px-8 py-8 sm:py-10 bg-yellow-200 outline outline-1 outline-cyan-800 flex flex-col justify-between items-start overflow-hidden rounded-xs shadow-sm">
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h3 className="text-cyan-800 text-2xl sm:text-3xl font-extrabold font-['NanumMyeongjo'] leading-8">
                {current.expandedTitle}
              </h3>
              <div className="text-cyan-800 text-2xl sm:text-3xl font-extrabold font-['NanumMyeongjo'] leading-8 shrink-0">
                {current.timeline}
              </div>
            </div>

            <p className="mt-6 text-Jet-Black text-lg sm:text-2xl font-normal font-['Host_Grotesk'] leading-relaxed text-justify">
              {current.desc}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
