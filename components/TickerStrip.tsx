import React from 'react';

export default function TickerStrip() {
  const items = [
    'Australia Work Visa',
    'Australia Permanent Residency',
    'Australia Immigration',
    'MARA Registered Agents',
    'Study in Australia',
  ];

  return (
    <div className="w-full h-20 bg-yellow-200 overflow-hidden flex items-center justify-center border-y border-black/5">
      <div className="w-full max-w-[1296px] mx-auto px-6 sm:px-10 lg:px-0 flex items-center justify-between overflow-x-auto no-scrollbar gap-4 text-center">
        {items.map((item, idx) => (
          <React.Fragment key={item}>
            <span className="text-teal-900 text-base sm:text-lg font-bold font-['Inter'] leading-6 whitespace-nowrap">
              {item}
            </span>
            {idx < items.length - 1 && (
              <span className="text-teal-900 text-lg font-bold font-['Inter'] leading-6 select-none">
                •
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
