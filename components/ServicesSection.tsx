'use client';

import React from 'react';
import Image from 'next/image';

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const topServices = [
    { title: 'Study', image: '/images/study.jpg' },
    { title: 'Family & Partner', image: '/images/family-partner.jpg' },
    { title: 'Skilled & Employer', image: '/images/skilled-employer.jpg' },
  ];

  const bottomServices = [
    { title: 'Business', image: '/images/business.jpg' },
    { title: 'Visit', image: '/images/visit.jpg' },
  ];

  return (
    <section id="services" className="w-full bg-cyan-800 py-16 lg:py-20 relative">
      <div className="w-full max-w-[1296px] mx-auto px-6 sm:px-10 lg:px-0 flex flex-col items-center gap-14 lg:gap-16">
        {/* Headlines */}
        <div className="w-full max-w-[1170px] pt-2 flex flex-col items-center gap-5 text-center">
          <div className="h-5 inline-flex items-center gap-3">
            <svg width="34" height="1" viewBox="0 0 34 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.65" width="33.99" height="1" fill="white" />
            </svg>
            <span className="text-white text-xs font-semibold font-['Host_Grotesk'] uppercase leading-5 tracking-[2.42px]">
              Our services
            </span>
          </div>

          <div className="w-full flex flex-col items-center gap-3">
            <h2 className="text-yellow-200 text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['NanumMyeongjo'] leading-tight lg:leading-[48px]">
              Every visa pathway, through one team.
            </h2>
            <p className="text-white text-base sm:text-lg lg:text-xl font-normal font-['Host_Grotesk'] leading-relaxed max-w-4xl">
              Your Australian migration journey, guided by MARA registered agents.
            </p>
          </div>
        </div>

        {/* 5 Cards in 2 rows */}
        <div className="w-full flex flex-col gap-8">
          {/* Row 1: 3 cards */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {topServices.map((service) => (
              <article
                key={service.title}
                onClick={() => onSelectService?.(service.title)}
                className="w-full max-w-[384px] h-[340px] bg-yellow-200 border-b-8 border-white flex flex-col justify-between items-start overflow-hidden shadow-sm group cursor-pointer transition-transform hover:-translate-y-1"
              >
                {/* Photo top */}
                <div className="w-full h-[250px] relative overflow-hidden bg-stone-800">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                </div>

                {/* Bottom yellow bar */}
                <div className="w-full h-[90px] px-8 bg-yellow-200 flex justify-between items-center shrink-0">
                  <h3 className="text-cyan-800 text-2xl sm:text-3xl font-extrabold font-['NanumMyeongjo'] leading-8">
                    {service.title}
                  </h3>
                  <div className="transition-transform group-hover:translate-x-1">
                    <svg width="64" height="15" viewBox="0 0 64 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M63.7071 8.07137C64.0976 7.68085 64.0976 7.04768 63.7071 6.65716L57.3431 0.293195C56.9526 -0.0973294 56.3195 -0.0973295 55.9289 0.293195C55.5384 0.683719 55.5384 1.31688 55.9289 1.70741L61.5858 7.36426L55.9289 13.0211C55.5384 13.4116 55.5384 14.0448 55.9289 14.4353C56.3195 14.8259 56.9526 14.8259 57.3431 14.4353L63.7071 8.07137ZM0 7.36426L-8.74228e-08 8.36426L63 8.36426L63 7.36426L63 6.36426L8.74228e-08 6.36426L0 7.36426Z"
                        fill="#116A74"
                      />
                    </svg>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Row 2: 2 cards centered */}
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8">
            {bottomServices.map((service) => (
              <article
                key={service.title}
                onClick={() => onSelectService?.(service.title)}
                className="w-full max-w-[384px] h-[340px] bg-yellow-200 border-b-8 border-white flex flex-col justify-between items-start overflow-hidden shadow-sm group cursor-pointer transition-transform hover:-translate-y-1"
              >
                {/* Photo top */}
                <div className="w-full h-[250px] relative overflow-hidden bg-stone-800">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                </div>

                {/* Bottom yellow bar */}
                <div className="w-full h-[90px] px-8 bg-yellow-200 flex justify-between items-center shrink-0">
                  <h3 className="text-cyan-800 text-2xl sm:text-3xl font-extrabold font-['NanumMyeongjo'] leading-8">
                    {service.title}
                  </h3>
                  <div className="transition-transform group-hover:translate-x-1">
                    <svg width="64" height="15" viewBox="0 0 64 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M63.7071 8.07137C64.0976 7.68085 64.0976 7.04768 63.7071 6.65716L57.3431 0.293195C56.9526 -0.0973294 56.3195 -0.0973295 55.9289 0.293195C55.5384 0.683719 55.5384 1.31688 55.9289 1.70741L61.5858 7.36426L55.9289 13.0211C55.5384 13.4116 55.5384 14.0448 55.9289 14.4353C56.3195 14.8259 56.9526 14.8259 57.3431 14.4353L63.7071 8.07137ZM0 7.36426L-8.74228e-08 8.36426L63 8.36426L63 7.36426L63 6.36426L8.74228e-08 6.36426L0 7.36426Z"
                        fill="#116A74"
                      />
                    </svg>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
