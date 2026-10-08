'use client';

import React, { useState } from 'react';

export default function ApplicationProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Eligibility review and pathway choice',
      expandedTitle: '01  Eligibility review & pathway choices',
      waitingOn: 'You',
      duration: '1-2 weeks',
      desc: 'Points are scored against real documents, not intentions, and the strongest pathway is selected before anything is lodged.',
    },
    {
      num: '02',
      title: 'Skills assessment',
      expandedTitle: '02  Skills assessment & qualification audit',
      waitingOn: 'Assessor',
      duration: '6-12 weeks',
      desc: 'Your formal qualifications and employment reference letters are audited and submitted to your relevant assessing authority (ACS, VETASSESS, Engineers Australia, etc.).',
    },
    {
      num: '03',
      title: 'English test',
      expandedTitle: '03  English test (PTE / IELTS score target)',
      waitingOn: 'You',
      duration: '2-4 weeks',
      desc: 'Targeting Superior English (20 points) or Proficient English (10 points) through strategic exam preparation and verified score locking.',
    },
    {
      num: '04',
      title: 'Expression of Interest',
      expandedTitle: '04  Expression of Interest (SkillSelect lodge)',
      waitingOn: 'State / DHA',
      duration: '1 week',
      desc: 'Lodging a flawless EOI on SkillSelect and submitting relevant State Nomination applications across targeted Australian states.',
    },
    {
      num: '05',
      title: 'Invitation',
      expandedTitle: '05  Invitation to apply (ITA issue)',
      waitingOn: 'System',
      duration: 'Round-based',
      desc: 'The Australian government or nominating state issues a formal invitation round outcome, granting a 60-day window to lodge.',
    },
    {
      num: '06',
      title: 'Visa application and documents',
      expandedTitle: '06  Visa application & statutory evidence lodge',
      waitingOn: 'Case Officer',
      duration: '2-3 weeks',
      desc: 'Final submission of complete application file with all certified identity, police clearances, employment proofs and MARA agent declarations.',
    },
    {
      num: '07',
      title: 'Health, character and decision',
      expandedTitle: '07  Health, character clearances & final decision',
      waitingOn: 'DHA',
      duration: '3-8 months',
      desc: 'Medical examination, biometric confirmations, security background checks, and official visa grant notice issued with travel conditions.',
    },
  ];

  const current = steps[activeStep];

  return (
    <section id="application-process" className="w-full bg-yellow-50 py-16 lg:py-20 relative">
      <div className="w-full max-w-[1296px] mx-auto px-6 sm:px-10 lg:px-0 flex flex-col items-center gap-14 lg:gap-16">
        {/* Headlines */}
        <div className="w-full max-w-[960px] pt-2 flex flex-col items-center gap-5 text-center">
          <div className="h-5 inline-flex items-center gap-3">
            <svg width="34" height="1" viewBox="0 0 34 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.65" width="33.99" height="1" fill="#9F9B0D" />
            </svg>
            <span className="text-yellow-600 text-xs font-semibold font-['Host_Grotesk'] uppercase leading-5 tracking-[2.42px]">
              Application process
            </span>
          </div>

          <div className="w-full flex flex-col items-center gap-3">
            <h2 className="text-cyan-800 text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['NanumMyeongjo'] leading-tight lg:leading-[48px]">
              The sequence, process, & who is waiting on whom.
            </h2>
            <p className="text-Dark-Green-Brand text-base sm:text-lg lg:text-xl font-normal font-['Host_Grotesk'] leading-relaxed max-w-3xl">
              Understanding which stage you are waiting on is what turns an anxious wait into a managed one.
            </p>
          </div>
        </div>

        {/* Process Steps Cards */}
        <div className="w-full flex flex-col gap-8">
          {/* Top 7 Cards Row */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 lg:gap-3.5">
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
              <div className="flex items-center gap-4 sm:gap-6 shrink-0">
                <div className="h-9 px-5 py-1.5 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-cyan-800 inline-flex items-center justify-center">
                  <span className="text-cyan-800 text-xl sm:text-2xl font-extrabold font-['NanumMyeongjo'] leading-none">
                    {current.waitingOn}
                  </span>
                </div>
                <div className="text-cyan-800 text-2xl sm:text-3xl font-extrabold font-['NanumMyeongjo'] leading-8">
                  {current.duration}
                </div>
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
