'use client';

import React, { useState } from 'react';

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<'visa' | 'immigration' | 'other'>('visa');
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({
    0: true, // Item 01 is open by default as in the Figma screenshot
  });

  const toggleItem = (index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const faqData = [
    {
      num: '01',
      question: 'What is the difference between Australian immigration and a visa subclass?',
      answer:
        'Immigration is the overall system; a visa subclass is the specific legal permission you apply for, and each subclass has its own criteria, cost, conditions and pathway.',
    },
    {
      num: '02',
      question: 'Which Australia visa pathway suits your situation?',
      answer:
        'It depends on your current age, educational credentials, occupation on the skilled occupation list, English proficiency, and whether you qualify for independent skilled PR, state nomination, or employer sponsorship.',
    },
    {
      num: '03',
      question: 'How does the Australian points test actually work?',
      answer:
        'Points are calculated across objective benchmarks: age (peak at 25-32 years), English ability (Superior gives 20 pts), qualified employment years, degree levels, and regional or state nomination points (+5 or +15 pts).',
    },
    {
      num: '04',
      question: 'What documents and evidence do Australian visa applications require?',
      answer:
        'Required evidentiary files include official educational transcripts, detailed employment reference letters with taxation/pension verification, passport identification, police records, and registered health clearances.',
    },
    {
      num: '05',
      question: 'How much does it cost to migrate to Australia?',
      answer:
        'The cost comprises Department of Home Affairs statutory lodgement fees, occupation skills assessment charges, language tests, health checks, and fixed transparent MARA agent legal management fees.',
    },
    {
      num: '06',
      question: 'How long does Australian visa processing take, and what delays it?',
      answer:
        'Processing typically ranges from 4 to 9 months for skilled invitations. Delays are usually caused by incomplete employer evidence, unverified points claims, or delayed character background reports.',
    },
  ];

  return (
    <section id="faq" className="w-full bg-cyan-800 py-16 lg:py-20 relative">
      <div className="w-full max-w-[1296px] mx-auto px-6 sm:px-10 lg:px-0 flex flex-col items-center gap-12 lg:gap-14">
        {/* Headlines */}
        <div className="w-full max-w-[1100px] pt-2 flex flex-col items-center gap-5 text-center">
          <div className="h-5 inline-flex items-center gap-3">
            <svg width="34" height="1" viewBox="0 0 34 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.65" width="33.99" height="1" fill="white" />
            </svg>
            <span className="text-white text-xs font-semibold font-['Host_Grotesk'] uppercase leading-5 tracking-[2.42px]">
              FAQs
            </span>
          </div>

          <div className="w-full flex flex-col items-center gap-3">
            <h2 className="text-Yellow-Brand text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['NanumMyeongjo'] leading-tight lg:leading-[48px]">
              Australia visa and immigration questions, answered clearly.
            </h2>
            <p className="text-Pure-White text-base sm:text-lg lg:text-xl font-normal font-['Host_Grotesk'] leading-relaxed max-w-3xl">
              Some general questions people ask before choosing an Australian visa pathway.
            </p>
          </div>
        </div>

        {/* Categories Tab Box */}
        <div className="w-full max-w-[978px] bg-yellow-50 rounded-md border-t-[0.50px] border-b-[0.50px] border-yellow-200 overflow-hidden shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-center p-2 sm:p-3 gap-2 sm:gap-4 lg:gap-8">
            <button
              onClick={() => setActiveCategory('visa')}
              className={`px-6 py-3 rounded-xs text-base sm:text-lg font-bold font-['Inter'] leading-6 transition-all cursor-pointer ${
                activeCategory === 'visa'
                  ? 'bg-yellow-200 text-cyan-800 shadow-xs'
                  : 'text-cyan-800 hover:bg-yellow-200/50'
              }`}
            >
              About Australia Visa
            </button>

            <span className="hidden sm:inline text-cyan-800 text-2xl font-extralight font-['Inter'] select-none">
              |
            </span>

            <button
              onClick={() => setActiveCategory('immigration')}
              className={`px-6 py-3 rounded-xs text-base sm:text-lg font-bold font-['Inter'] leading-6 transition-all cursor-pointer ${
                activeCategory === 'immigration'
                  ? 'bg-yellow-200 text-cyan-800 shadow-xs'
                  : 'text-cyan-800 hover:bg-yellow-200/50'
              }`}
            >
              About Immigration
            </button>

            <span className="hidden sm:inline text-cyan-800 text-2xl font-extralight font-['Inter'] select-none">
              |
            </span>

            <button
              onClick={() => setActiveCategory('other')}
              className={`px-6 py-3 rounded-xs text-base sm:text-lg font-bold font-['Inter'] leading-6 transition-all cursor-pointer ${
                activeCategory === 'other'
                  ? 'bg-yellow-200 text-cyan-800 shadow-xs'
                  : 'text-cyan-800 hover:bg-yellow-200/50'
              }`}
            >
              Other FAQs
            </button>
          </div>
        </div>

        {/* Accordion List */}
        <div className="w-full flex flex-col justify-start items-start">
          {faqData.map((faq, idx) => {
            const isOpen = !!openItems[idx];
            return (
              <div
                key={faq.num}
                className="w-full py-6 sm:py-7 border-b border-white/30 flex flex-col justify-start items-start gap-4 transition-colors"
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full flex items-center justify-between text-left group cursor-pointer gap-4"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="text-white text-base font-medium font-['Host_Grotesk'] leading-4 tracking-widest shrink-0">
                      {faq.num}
                    </span>
                    <span className="text-Yellow-Brand text-xl sm:text-2xl font-medium font-['Host_Grotesk'] leading-snug sm:leading-6 group-hover:opacity-90">
                      {faq.question}
                    </span>
                  </div>

                  {/* Icon badge */}
                  <div
                    className={`w-6 h-7 rounded-xl outline outline-1 outline-offset-[-1px] outline-yellow-200 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-yellow-200/40 rotate-45' : 'bg-yellow-200/30'
                    }`}
                  >
                    <span className="text-yellow-200 text-sm font-normal font-['Inter'] leading-none">
                      +
                    </span>
                  </div>
                </button>

                {isOpen && (
                  <p className="w-full text-Pure-White text-lg sm:text-xl font-normal font-['Host_Grotesk'] leading-relaxed pt-2 pl-8 sm:pl-10">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
