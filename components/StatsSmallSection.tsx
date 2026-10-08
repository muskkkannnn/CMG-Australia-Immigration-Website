import React from 'react';

export default function StatsSmallSection() {
  const stats = [
    {
      num: '65',
      label: 'points floor',
      desc: 'Minimum to lodge an EOI. Invitation is competitive, not automatic.',
    },
    {
      num: '189',
      label: 'independent pathway',
      desc: 'Permanent residence with no sponsor, state or employer.',
    },
    {
      num: '491',
      label: 'Regional pathway',
      desc: 'Provisional, five years, with a route to the permanent 191.',
    },
  ];

  return (
    <section className="w-full bg-yellow-50 py-16 lg:py-20 relative">
      <div className="w-full max-w-[1296px] mx-auto px-6 sm:px-10 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {stats.map((item) => (
            <article
              key={item.num}
              className="w-full max-w-[384px] h-[216px] px-8 py-8 lg:py-10 bg-cyan-800 rounded-md border-b-8 border-yellow-200 flex flex-col justify-between items-start overflow-hidden shadow-sm"
            >
              {/* Header with line, number, label */}
              <div className="w-full flex items-center gap-3">
                <svg width="34" height="1" viewBox="0 0 34 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect opacity="0.65" width="33.99" height="1" fill="#FFFB86" />
                </svg>
                <span className="text-yellow-200 text-4xl lg:text-5xl font-semibold font-['Host_Grotesk'] uppercase leading-none tracking-tight">
                  {item.num}
                </span>
                <span className="text-yellow-200 text-xs font-semibold font-['Host_Grotesk'] uppercase tracking-[2.42px]">
                  {item.label}
                </span>
              </div>

              {/* Description text */}
              <p className="text-white text-lg sm:text-xl font-normal font-['Host_Grotesk'] leading-6 text-justify">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
