'use client';

import React from 'react';

interface CostSmallSectionProps {
  onOpenAssessment?: () => void;
}

export default function CostSmallSection({ onOpenAssessment }: CostSmallSectionProps) {
  return (
    <section id="application-cost" className="w-full bg-cyan-800 py-16 lg:py-20 relative">
      <div className="w-full max-w-[1296px] mx-auto px-6 sm:px-10 lg:px-0 flex flex-col items-center justify-between gap-10 lg:gap-12 text-center">
        {/* Headlines */}
        <div className="w-full max-w-[1100px] pt-2 flex flex-col items-center gap-5">
          <div className="h-5 inline-flex items-center gap-3">
            <svg width="34" height="1" viewBox="0 0 34 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.65" width="33.99" height="1" fill="white" />
            </svg>
            <span className="text-white text-xs font-semibold font-['Host_Grotesk'] uppercase leading-5 tracking-[2.42px]">
              application Cost
            </span>
          </div>

          <div className="w-full flex flex-col items-center gap-3">
            <h2 className="text-Yellow-Brand text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['NanumMyeongjo'] leading-tight lg:leading-[48px]">
              Wanna know what a skilled application actually cost?
            </h2>
            <p className="text-Pure-White text-base sm:text-lg lg:text-xl font-normal font-['Host_Grotesk'] leading-relaxed max-w-3xl">
              The government charge is the largest single line, but it is rarely the one that surprises people.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div>
          <button
            onClick={onOpenAssessment}
            className="px-6 sm:px-8 py-4 sm:py-5 bg-yellow-200 rounded-md border-b-4 border-white inline-flex justify-center items-center gap-4 transition-all hover:opacity-90 active:scale-98 cursor-pointer shadow-sm"
          >
            <span className="text-color-chartreuse-green-5 text-base sm:text-lg font-extrabold font-['Host_Grotesk'] uppercase leading-8 tracking-[2.63px] whitespace-nowrap">
              Get a cost quote
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
