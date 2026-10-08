import React from 'react';

export default function AboutUsSection() {
  const cards = [
    {
      eyebrow: 'Our Vision',
      title: 'A benchmark for trust',
      desc: 'To redefine Australia migration services in the Middle East by becoming a benchmark or trust, compliance, and client success.',
    },
    {
      eyebrow: 'Our Mission',
      title: 'World-class migration solutions',
      desc: 'To deliver world-class migration solution for skilled professionals through MARA-authorised expertise.',
    },
    {
      eyebrow: 'Our Values',
      title: 'Integrity, transparency, excellence',
      desc: "Integrity, transparency, and excellence in every case — treating every client's future with the care it deserves.",
    },
  ];

  return (
    <section id="about-us" className="w-full bg-cyan-800 py-16 lg:py-20 relative">
      <div className="w-full max-w-[1296px] mx-auto px-6 sm:px-10 lg:px-0 flex flex-col items-center gap-14 lg:gap-20">
        {/* Headlines */}
        <div className="w-full max-w-[1170px] pt-2 flex flex-col items-center gap-5 text-center">
          {/* Eyebrow */}
          <div className="h-5 inline-flex items-center gap-3">
            <svg width="34" height="1" viewBox="0 0 34 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.65" width="33.99" height="1" fill="white" />
            </svg>
            <span className="text-white text-xs font-semibold font-['Host_Grotesk'] uppercase leading-5 tracking-[2.42px]">
              who we are
            </span>
          </div>

          <div className="w-full flex flex-col items-center gap-3">
            <h2 className="text-yellow-200 text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['NanumMyeongjo'] leading-tight lg:leading-[48px]">
              Migration advice built on verifiable credentials.
            </h2>
            <p className="text-white text-base sm:text-lg lg:text-xl font-normal font-['Host_Grotesk'] leading-relaxed max-w-4xl">
              Every case is handled by a MARA-registered agent, under a statutory code of conduct, with fees agreed in writing before work.
            </p>
          </div>
        </div>

        {/* 3 Yellow Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {cards.map((card) => (
            <article
              key={card.eyebrow}
              className="w-full max-w-[384px] px-8 py-10 lg:py-12 bg-yellow-200 rounded-md outline outline-1 outline-yellow-200 flex flex-col justify-between items-start overflow-hidden min-h-[300px]"
            >
              <div className="w-full flex flex-col gap-3">
                {/* Eyebrow inside card */}
                <div className="inline-flex items-center gap-3">
                  <svg width="34" height="1" viewBox="0 0 34 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect opacity="0.65" width="33.99" height="1" fill="black" />
                  </svg>
                  <span className="text-black text-xs font-semibold font-['Host_Grotesk'] uppercase leading-4 tracking-[2.42px]">
                    {card.eyebrow}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="pt-1 text-cyan-800 text-2xl sm:text-3xl font-extrabold font-['NanumMyeongjo'] leading-tight sm:leading-8">
                  {card.title}
                </h3>
              </div>

              {/* Description */}
              <p className="mt-4 text-black text-lg sm:text-xl font-normal font-['Host_Grotesk'] leading-6 text-justify">
                {card.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
