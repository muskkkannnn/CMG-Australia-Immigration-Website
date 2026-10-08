'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavbarProps {
  onOpenAssessment?: () => void;
}

export default function Navbar({ onOpenAssessment }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'OUR Services', href: '#services' },
    { label: 'Our Process', href: '#journey' },
    { label: 'application process', href: '#application-process' },
    { label: 'application cost', href: '#application-cost' },
    { label: 'FAQ', href: '#faq' },
    { label: 'about us', href: '#about-us' },
  ];

  // Prevent background scroll ONLY when mobile drawer is open, clean up when closed
  useEffect(() => {
    if (!mobileMenuOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="w-full bg-yellow-50 relative z-40 border-b border-black/5">
      <div className="w-full max-w-[1440px] h-16 mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between relative">
        {/* Logo - exact Figma button */}
        <Link
          href="/"
          className="px-4 py-3 bg-yellow-200 rounded-sm outline outline-1 outline-offset-[-1px] outline-black/10 flex items-center justify-center transition-opacity hover:opacity-90 shrink-0"
        >
          <span className="text-center text-color-chartreuse-green-5 text-xs font-extrabold font-['Host_Grotesk'] uppercase leading-5 tracking-widest">
            Logo
          </span>
        </Link>

        {/* Desktop Nav Links - Centered as in Figma Frame 14 */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 xl:px-3.5 py-2 rounded-[3px] text-black text-sm font-medium font-['Host_Grotesk'] uppercase leading-4 transition-colors hover:text-cyan-800"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button - exact Figma width & typography */}
        <div className="hidden sm:flex items-center">
          <button
            onClick={onOpenAssessment}
            className="w-52 lg:w-56 px-4 py-3 bg-yellow-200 rounded-sm outline outline-1 outline-offset-[-1px] outline-black/10 flex items-center justify-center transition-opacity hover:opacity-90 cursor-pointer"
          >
            <span className="text-center text-color-chartreuse-green-5 text-xs font-extrabold font-['Host_Grotesk'] uppercase leading-5 tracking-widest whitespace-nowrap">
              Book a free assessment
            </span>
          </button>
        </div>

        {/* Mobile controls (Compact CTA + Hamburger) */}
        <div className="flex sm:hidden items-center gap-3">
          <button
            onClick={onOpenAssessment}
            className="px-3 py-2 bg-yellow-200 rounded-sm outline outline-1 outline-offset-[-1px] outline-black/10 text-[10px] font-extrabold font-['Host_Grotesk'] uppercase tracking-wider text-color-chartreuse-green-5 cursor-pointer"
          >
            Assess
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none cursor-pointer rounded-sm hover:bg-black/5 transition"
          >
            <span
              className={`w-6 h-0.5 bg-cyan-800 transition-all duration-300 origin-center ${
                mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-cyan-800 transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-cyan-800 transition-all duration-300 origin-center ${
                mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-black/40 backdrop-blur-xs lg:hidden">
          <div className="bg-yellow-50 w-full max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-black/10 px-6 py-6 flex flex-col gap-4 shadow-xl">
            <nav className="flex flex-col divide-y divide-black/5">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3.5 text-black text-sm font-semibold font-['Host_Grotesk'] uppercase tracking-wider hover:text-cyan-800 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-black/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAssessment?.();
                }}
                className="w-full py-3.5 bg-yellow-200 rounded-sm outline outline-1 outline-offset-[-1px] outline-black/10 text-center text-color-chartreuse-green-5 text-xs font-extrabold font-['Host_Grotesk'] uppercase tracking-widest transition-opacity hover:opacity-90 cursor-pointer"
              >
                Book a free assessment
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
