import React from 'react';
import Image from 'next/image';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Omar Abdul',
      role: 'Software engineer · Dubai → Melbourne · SC 189',
      quote:
        'The eligibility review told me my points claim would fail before I spent a dirham on an assessment. That conversation saved the whole file.',
      image: '/images/omar-abdul.jpg',
    },
    {
      name: 'Smith Skillen',
      role: 'Partner applicant · Sharjah → Sydney · SC 820/801',
      quote:
        'Everything ran in the order they said it would. When the department asked for further information, the response was ready the same week.',
      image: '/images/smith-skillen.jpg',
    },
    {
      name: 'Mariam H. Sayed',
      role: 'Registered nurse · Abu Dhabi → Brisbane · SC 190',
      quote:
        'Two stages, one case manager, no gaps between them. The 190 decision arrived without a single request for more evidence. file.',
      image: '/images/mariam-sayed.jpg',
    },
  ];

  return (
    <section className="w-full bg-yellow-50 py-16 lg:py-20 relative">
      <div className="w-full max-w-[1296px] mx-auto px-6 sm:px-10 lg:px-0 flex flex-col items-center gap-14 lg:gap-20">
        {/* Section Headline */}
        <div className="w-full max-w-[863px] pt-2 flex flex-col items-center gap-5 text-center">
          {/* Eyebrow */}
          <div className="h-5 inline-flex items-center gap-3">
            <svg width="34" height="1" viewBox="0 0 34 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.65" width="33.99" height="1" fill="#9F9B0D" />
            </svg>
            <span className="text-yellow-600 text-xs font-semibold font-['Host_Grotesk'] uppercase leading-5 tracking-[2.42px]">
              Verified outcomes
            </span>
          </div>

          <div className="w-full flex flex-col items-center gap-3">
            <h2 className="text-cyan-800 text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['NanumMyeongjo'] leading-tight lg:leading-[48px]">
              Real people. Real visas. Real timelines.
            </h2>
            <p className="text-teal-900 text-base sm:text-lg lg:text-xl font-normal font-['Host_Grotesk'] leading-relaxed">
              Helping workers, families, and businesses navigate Australian visa pathways.
            </p>
          </div>
        </div>

        {/* 3 Testimonials Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="w-full max-w-[384px] h-[384px] relative border-b-8 border-yellow-200 overflow-hidden rounded-xs bg-stone-900 shadow-sm flex flex-col justify-end"
            >
              {/* Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 384px"
                  priority
                />
                {/* Figma dark gradient overlay: clear portrait at top, readable text at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 via-45% to-transparent pointer-events-none" />
              </div>

              {/* Text content */}
              <div className="relative z-10 p-6 flex flex-col justify-end">
                <div className="flex flex-col gap-[3.27px]">
                  <h3 className="text-white text-lg font-bold font-['Host_Grotesk'] leading-6">
                    {item.name}
                  </h3>
                  <div className="text-white/90 text-xs font-normal font-['Host_Grotesk'] leading-4">
                    {item.role}
                  </div>
                </div>

                {/* White line */}
                <div className="w-full h-0 border-t border-white/50 my-3" />

                <p className="text-white text-sm font-normal font-['Host_Grotesk'] leading-relaxed text-justify">
                  {item.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
