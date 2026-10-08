'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer id="contact" className="w-full bg-cyan-800 text-white pt-16 lg:pt-20 pb-12 relative">
      <div className="w-full max-w-[1296px] mx-auto px-6 sm:px-10 lg:px-0 flex flex-col gap-16 lg:gap-20">
        {/* Top Section: Newsletter and 4 Columns */}
        <div className="w-full flex flex-col gap-12 lg:gap-14">
          {/* Newsletter Box */}
          <div className="w-full flex justify-center">
            <form
              onSubmit={handleSubscribe}
              className="w-full max-w-[680px] flex flex-col sm:flex-row items-stretch gap-3 sm:gap-4"
            >
              <div className="flex-1 min-h-12 px-4 py-2.5 outline outline-1 outline-offset-[-0.50px] outline-white flex items-center bg-transparent rounded-xs">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="GET LATEST UPDATES THROUGH EMAIL"
                  className="w-full bg-transparent text-Pure-White text-xs font-extrabold font-['Host_Grotesk'] uppercase placeholder:text-white/70 focus:outline-none tracking-wider text-center sm:text-left"
                  required
                />
              </div>

              <button
                type="submit"
                className="px-8 py-3 bg-black border-b-2 border-white flex items-center justify-center transition-opacity hover:opacity-90 cursor-pointer rounded-xs shrink-0"
              >
                <span className="text-Yellow-Brand text-xs font-extrabold font-['Host_Grotesk'] uppercase leading-4 tracking-wider whitespace-nowrap">
                  {subscribed ? 'Subscribed!' : 'Subscribe now'}
                </span>
              </button>
            </form>
          </div>

          {/* 4 Columns */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 items-start">
            {/* Col 1: Visa Pathways */}
            <div className="flex flex-col gap-5">
              <h4 className="text-White text-xs font-extrabold font-['Host_Grotesk'] uppercase tracking-wider">
                Visa Pathways
              </h4>
              <ul className="flex flex-col gap-2.5">
                {[
                  'Skilled Independent 189',
                  'Skilled Nominated 190',
                  'Skilled Work Regional 491',
                  'Permanent Residence 191',
                  'Employer Sponsored 482',
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#services"
                      className="text-Yellow-Brand text-base font-medium font-['Host_Grotesk'] leading-6 hover:underline"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 2: Services */}
            <div className="flex flex-col gap-5">
              <h4 className="text-White text-xs font-semibold font-['Host_Grotesk'] uppercase tracking-wider">
                Services
              </h4>
              <ul className="flex flex-col gap-2.5">
                {[
                  'State Nominations',
                  'Employer Sponsored',
                  'Skills Assessment',
                  'Document Review',
                  'Appeals & Reviews',
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#services"
                      className="text-Yellow-Brand text-base font-medium font-['Host_Grotesk'] leading-6 hover:underline"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Company */}
            <div className="flex flex-col gap-5">
              <h4 className="text-White text-xs font-semibold font-['Host_Grotesk'] uppercase tracking-wider">
                Company
              </h4>
              <ul className="flex flex-col gap-2.5">
                {['About CMG', 'Meet the Agents', 'Insights', 'Contact', 'Theme Gallery'].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#about-us"
                        className="text-Yellow-Brand text-base font-medium font-['Host_Grotesk'] leading-6 hover:underline"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Col 4: Logo & MARA Info */}
            <div className="flex flex-col items-start lg:items-end text-left lg:text-right gap-6">
              <div className="flex flex-col items-start lg:items-end gap-3.5 w-full max-w-[260px]">
                <Link
                  href="/"
                  className="w-full px-4 py-3 bg-yellow-200 rounded-sm outline outline-1 outline-offset-[-1px] outline-black/10 flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  <span className="text-center text-color-chartreuse-green-5 text-xs font-extrabold font-['Host_Grotesk'] uppercase leading-5 tracking-widest">
                    Logo
                  </span>
                </Link>
                <div className="text-Pure-White text-xs font-medium font-['Host_Grotesk'] uppercase leading-4 tracking-wider">
                  Registered Migration Agents · Est. 2016
                </div>
              </div>

              <p className="text-Pure-White text-sm font-medium font-['Host_Grotesk'] leading-6">
                MARA-registered migration agents advising skilled
                <br className="hidden sm:inline" />
                professionals, families and businesses across the
                <br className="hidden sm:inline" />
                GCC and Middle East on Australian visa pathways.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="w-full pt-7 border-t border-Pure-White flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div className="text-Pure-White text-sm sm:text-base font-normal font-['Host_Grotesk'] leading-5">
            © 2026 Commonwealth Migration Group. Dubai, United Arab Emirates. All rights reserved.
          </div>
          <div className="flex items-center gap-5 text-sm sm:text-base font-normal font-['Host_Grotesk'] leading-5">
            <a
              href="https://www.homeaffairs.gov.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-Pure-White hover:underline"
            >
              homeaffairs.gov.au
            </a>
            <a href="#faq" className="text-Pure-White hover:underline">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
