'use client';

import React from 'react';

interface CtaSmallSectionProps {
  onOpenAssessment?: () => void;
}

export default function CtaSmallSection({ onOpenAssessment }: CtaSmallSectionProps) {
  return (
    <section className="w-full bg-yellow-50 py-16 lg:py-20 relative">
      <div className="w-full max-w-[1296px] mx-auto px-6 sm:px-10 lg:px-0 flex flex-col items-center justify-between gap-10 lg:gap-12 text-center">
        {/* Headlines */}
        <div className="w-full max-w-[1100px] pt-2 flex flex-col items-center gap-5">
          <div className="h-5 inline-flex items-center gap-3">
            <svg width="34" height="1" viewBox="0 0 34 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.65" width="33.99" height="1" fill="#9F9B0D" />
            </svg>
            <span className="text-yellow-600 text-xs font-semibold font-['Host_Grotesk'] uppercase leading-5 tracking-[2.42px]">
              your next step
            </span>
          </div>

          <div className="w-full flex flex-col items-center gap-3">
            <h2 className="text-Green-Brand- text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['NanumMyeongjo'] leading-tight lg:leading-[48px]">
              Expert guidance, real outcomes.
            </h2>
            <p className="text-Dark-Green-Brand text-base sm:text-lg lg:text-xl font-normal font-['Host_Grotesk'] leading-relaxed max-w-3xl">
              Our MARA-registered agents combine deep legal knowledge with genuine care for every client from all over the world.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div>
          <button
            onClick={onOpenAssessment}
            className="px-6 sm:px-8 py-4 sm:py-5 bg-Green-Brand- rounded-md border-b-4 border-Yellow-Brand inline-flex justify-center items-center gap-4 transition-all hover:opacity-95 active:scale-98 cursor-pointer shadow-sm"
          >
            <span className="text-Yellow-Brand text-base sm:text-lg font-extrabold font-['Host_Grotesk'] uppercase leading-8 tracking-[2.63px] whitespace-nowrap">
              Book a free assessment
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
