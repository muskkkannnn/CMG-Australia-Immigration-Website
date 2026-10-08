'use client';

import React, { useRef, useEffect } from 'react';

interface HeroProps {
  onOpenAssessment?: () => void;
}

export default function Hero({ onOpenAssessment }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Guarantee inline autoplay, mute property, and lazy intersection handling
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const playVideo = () => {
      video.muted = true;
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => {
          // Autoplay policy fallback until user interaction
        });
      }
    };

    // Attempt immediate playback
    playVideo();

    video.addEventListener('loadedmetadata', playVideo);
    video.addEventListener('canplay', playVideo);

    const onUserInteraction = () => {
      if (video.paused) {
        playVideo();
      }
    };

    window.addEventListener('click', onUserInteraction, { once: true });
    window.addEventListener('touchstart', onUserInteraction, { once: true });
    window.addEventListener('scroll', onUserInteraction, { once: true, passive: true });

    // Viewport observation to pause when off-screen and play when on-screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playVideo();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.removeEventListener('loadedmetadata', playVideo);
      video.removeEventListener('canplay', playVideo);
      window.removeEventListener('click', onUserInteraction);
      window.removeEventListener('touchstart', onUserInteraction);
      window.removeEventListener('scroll', onUserInteraction);
    };
  }, []);

  return (
    <section className="relative w-full h-[750px] lg:h-[801px] bg-stone-900 overflow-hidden flex flex-col justify-between">
      {/* Background HTML5 Video Container with Object-fit Cover */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/harbour-bridge-day-poster.jpg"
          className="w-full h-full object-cover object-center"
        >
          <source src="/harbour-bridge-day.mp4" type="video/mp4" />
          <source src="/Harbour-bridge-day.mp4" type="video/mp4" />
          <source src="/harbour-bridge-day.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Figma video overlay bg-black/40 */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main Hero Content Area */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 pt-16 md:pt-24 lg:pt-[154px] flex flex-col items-center text-center">
        <div className="w-full max-w-[846px] flex flex-col items-center">
          {/* Badge: Serving clients across the GCC and Middle East. */}
          <div className="mb-8 inline-flex items-center justify-center px-5 py-1.5 bg-white rounded-3xl shadow-sm">
            <span className="text-teal-900 text-[10.23px] sm:text-xs font-semibold font-['Host_Grotesk'] capitalize tracking-wide">
              Serving clients across the GCC and Middle East.
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-yellow-200 text-3xl sm:text-5xl lg:text-6xl font-extrabold font-['NanumMyeongjo'] leading-[1.18] sm:leading-[1.2] lg:leading-[69.28px] tracking-tight">
            Australia Visa Application Support
            <br className="hidden sm:inline" />
            from MARA–Registered Agents
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-white text-base sm:text-xl lg:text-2xl font-medium font-['Host_Grotesk'] leading-relaxed max-w-2xl">
            Helping workers, families, and businesses navigate Australian visa pathways.
          </p>

          {/* CTA Button */}
          <div className="mt-8">
            <button
              onClick={onOpenAssessment}
              className="px-6 py-3 bg-yellow-200 rounded-sm outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex items-center justify-center transition-all hover:opacity-90 active:scale-98 cursor-pointer"
            >
              <span className="text-color-chartreuse-green-5 text-xs font-extrabold font-['Host_Grotesk'] uppercase leading-5 tracking-widest whitespace-nowrap">
                Find your pathway
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Trust Strip */}
      <div className="relative z-10 w-full bg-yellow-200 overflow-hidden mt-auto border-t border-black/5">
        <div className="w-full max-w-[1296px] mx-auto min-h-20 py-4 px-6 sm:px-12 grid grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-items-center">
          {/* Item 1 */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-[3.27px]">
            <div className="text-teal-900 text-base sm:text-lg font-bold font-['Inter'] leading-6">
              MARA Registered
            </div>
            <div className="text-teal-900 text-[11px] sm:text-xs font-normal font-['Inter'] leading-4 tracking-wider uppercase">
              OMARA VERIFIABLE
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-[3.27px]">
            <div className="text-teal-900 text-base sm:text-lg font-bold font-['Inter'] leading-6">
              97% Success Rate
            </div>
            <div className="text-teal-900 text-[11px] sm:text-xs font-normal font-['Inter'] leading-4 tracking-wider uppercase">
              OVER 15 YEARS
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center text-center gap-[3.27px]">
            <div className="text-teal-900 text-base sm:text-lg font-bold font-['Inter'] leading-6">
              Est. 2016
            </div>
            <div className="text-teal-900 text-[11px] sm:text-xs font-normal font-['Inter'] leading-4 tracking-wider uppercase">
              A DECADE OF EXCELLENCE
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-[3.27px]">
            <div className="text-teal-900 text-base sm:text-lg font-bold font-['Inter'] leading-6">
              500+ Visas Approved
            </div>
            <div className="text-teal-900 text-[11px] sm:text-xs font-normal font-['Inter'] leading-4 tracking-wider uppercase">
              SINCE 2016
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
