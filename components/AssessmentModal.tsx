'use client';

import React, { useState } from 'react';

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPathway?: string;
}

export default function AssessmentModal({
  isOpen,
  onClose,
  defaultPathway = 'General Skilled Migration',
}: AssessmentModalProps) {
  const [step, setStep] = useState(1);
  const [pathway, setPathway] = useState(defaultPathway);
  const [age, setAge] = useState('25-32');
  const [qualification, setQualification] = useState('bachelor');
  const [experience, setExperience] = useState('5-7');
  const [english, setEnglish] = useState('superior');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [currentLocation, setCurrentLocation] = useState('Dubai, UAE');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  // Points calculator
  const calculatePoints = () => {
    let pts = 0;
    // Age
    if (age === '18-24') pts += 25;
    if (age === '25-32') pts += 30;
    if (age === '33-39') pts += 25;
    if (age === '40-44') pts += 15;

    // English
    if (english === 'superior') pts += 20; // 8+ IELTS / 79+ PTE
    if (english === 'proficient') pts += 10; // 7+ IELTS / 65+ PTE

    // Qualification
    if (qualification === 'phd') pts += 20;
    if (qualification === 'bachelor' || qualification === 'master') pts += 15;
    if (qualification === 'diploma') pts += 10;

    // Overseas Experience
    if (experience === '8+') pts += 15;
    if (experience === '5-7') pts += 10;
    if (experience === '3-4') pts += 5;

    return pts;
  };

  const totalPoints = calculatePoints();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-xl bg-yellow-50 border-2 border-cyan-800 rounded-md shadow-2xl overflow-hidden p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-yellow-200 border border-cyan-800 flex items-center justify-center text-cyan-800 font-bold hover:opacity-80 transition cursor-pointer"
        >
          ✕
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <div className="h-5 inline-flex items-center gap-2 mb-2">
                <svg width="24" height="1" viewBox="0 0 24 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect opacity="0.65" width="24" height="1" fill="#9F9B0D" />
                </svg>
                <span className="text-yellow-600 text-xs font-semibold font-['Host_Grotesk'] uppercase tracking-[2px]">
                  MARA Assessment
                </span>
              </div>
              <h3 className="text-cyan-800 text-2xl sm:text-3xl font-extrabold font-['NanumMyeongjo'] leading-tight">
                {step === 1 ? 'Australia Points & Pathway Check' : 'Contact Information'}
              </h3>
              <p className="text-teal-900 text-sm font-['Host_Grotesk'] mt-1">
                {step === 1
                  ? 'Calculate your points against statutory Australian immigration criteria.'
                  : 'Enter your contact details so our registered MARA agent can review your file.'}
              </p>
            </div>

            {step === 1 ? (
              <div className="space-y-4">
                {/* Pathway selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-teal-900 mb-1">
                    Visa Stream
                  </label>
                  <select
                    value={pathway}
                    onChange={(e) => setPathway(e.target.value)}
                    className="w-full p-2.5 bg-white border border-cyan-800/40 rounded text-sm text-black focus:outline-none focus:border-cyan-800"
                  >
                    <option value="Skilled Independent 189">Skilled Independent 189 (PR)</option>
                    <option value="Skilled Nominated 190">Skilled Nominated 190 (State PR)</option>
                    <option value="Skilled Regional 491">Skilled Work Regional 491 (Provisional PR)</option>
                    <option value="Employer Sponsored 482">Employer Sponsored 482 / TSS</option>
                    <option value="Family & Partner">Partner & Family Visa (820/801)</option>
                    <option value="Study">Student Visa (SC 500)</option>
                    <option value="Business">Business Innovation & Investor</option>
                  </select>
                </div>

                {/* Age & English */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-teal-900 mb-1">
                      Age Bracket
                    </label>
                    <select
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="w-full p-2.5 bg-white border border-cyan-800/40 rounded text-sm text-black focus:outline-none"
                    >
                      <option value="18-24">18 – 24 (25 pts)</option>
                      <option value="25-32">25 – 32 (30 pts)</option>
                      <option value="33-39">33 – 39 (25 pts)</option>
                      <option value="40-44">40 – 44 (15 pts)</option>
                      <option value="45+">45+ (Ineligible for points-based)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-teal-900 mb-1">
                      English Level
                    </label>
                    <select
                      value={english}
                      onChange={(e) => setEnglish(e.target.value)}
                      className="w-full p-2.5 bg-white border border-cyan-800/40 rounded text-sm text-black focus:outline-none"
                    >
                      <option value="superior">Superior (IELTS 8+ / PTE 79+) - 20 pts</option>
                      <option value="proficient">Proficient (IELTS 7+ / PTE 65+) - 10 pts</option>
                      <option value="competent">Competent (IELTS 6 / PTE 50) - 0 pts</option>
                    </select>
                  </div>
                </div>

                {/* Qualifications & Experience */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-teal-900 mb-1">
                      Highest Education
                    </label>
                    <select
                      value={qualification}
                      onChange={(e) => setQualification(e.target.value)}
                      className="w-full p-2.5 bg-white border border-cyan-800/40 rounded text-sm text-black focus:outline-none"
                    >
                      <option value="bachelor">Bachelor / Master (15 pts)</option>
                      <option value="phd">Doctorate / PhD (20 pts)</option>
                      <option value="diploma">Trade / Diploma (10 pts)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-teal-900 mb-1">
                      Overseas Experience
                    </label>
                    <select
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      className="w-full p-2.5 bg-white border border-cyan-800/40 rounded text-sm text-black focus:outline-none"
                    >
                      <option value="8+">8+ Years (15 pts)</option>
                      <option value="5-7">5 – 7 Years (10 pts)</option>
                      <option value="3-4">3 – 4 Years (5 pts)</option>
                      <option value="0-2">&lt; 3 Years (0 pts)</option>
                    </select>
                  </div>
                </div>

                {/* Points score highlight box */}
                <div className="p-4 bg-yellow-200 border border-cyan-800/60 rounded flex items-center justify-between mt-4">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-teal-900">
                      Estimated Points Score
                    </div>
                    <div className="text-xs text-teal-900/80 mt-0.5">
                      Statutory pass floor: 65 points
                    </div>
                  </div>
                  <div className="text-4xl font-extrabold text-cyan-800 font-['NanumMyeongjo']">
                    {totalPoints} pts
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full mt-4 py-3 bg-cyan-800 border-b-4 border-yellow-200 text-yellow-200 font-extrabold font-['Host_Grotesk'] uppercase tracking-widest text-sm hover:opacity-95 transition cursor-pointer"
                >
                  Continue to Consultation Booking
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-teal-900 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Tariq Mansoor"
                    className="w-full p-2.5 bg-white border border-cyan-800/40 rounded text-sm text-black focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-teal-900 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full p-2.5 bg-white border border-cyan-800/40 rounded text-sm text-black focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-teal-900 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+971 50 123 4567"
                      className="w-full p-2.5 bg-white border border-cyan-800/40 rounded text-sm text-black focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-teal-900 mb-1">
                    Current Location (GCC / Middle East)
                  </label>
                  <input
                    type="text"
                    required
                    value={currentLocation}
                    onChange={(e) => setCurrentLocation(e.target.value)}
                    placeholder="e.g. Dubai, Abu Dhabi, Doha, Riyadh"
                    className="w-full p-2.5 bg-white border border-cyan-800/40 rounded text-sm text-black focus:outline-none"
                  />
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-1/3 py-3 bg-white border border-cyan-800 text-cyan-800 font-extrabold font-['Host_Grotesk'] uppercase tracking-wider text-xs hover:bg-neutral-100 transition cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 py-3 bg-cyan-800 border-b-4 border-yellow-200 text-yellow-200 font-extrabold font-['Host_Grotesk'] uppercase tracking-widest text-xs hover:opacity-95 transition cursor-pointer"
                  >
                    Confirm Assessment Request
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-yellow-200 rounded-full flex items-center justify-center text-cyan-800 text-2xl font-bold border-2 border-cyan-800">
              ✓
            </div>
            <h3 className="text-cyan-800 text-3xl font-extrabold font-['NanumMyeongjo']">
              Assessment Request Confirmed
            </h3>
            <p className="text-teal-900 text-base font-['Host_Grotesk'] mt-3 leading-relaxed">
              Thank you, <span className="font-bold">{fullName}</span>. Your details and provisional score of{' '}
              <span className="font-bold text-cyan-800">{totalPoints} points</span> for{' '}
              <span className="font-bold">{pathway}</span> have been registered.
            </p>
            <p className="text-teal-900/80 text-sm font-['Host_Grotesk'] mt-2">
              Our MARA-registered migration agent will contact you at <span className="underline">{email}</span> within 24 business hours with your personalized eligibility audit.
            </p>

            <button
              onClick={() => {
                setSubmitted(false);
                setStep(1);
                onClose();
              }}
              className="mt-6 px-8 py-3 bg-yellow-200 border border-cyan-800 text-teal-900 text-xs font-extrabold font-['Host_Grotesk'] uppercase tracking-widest hover:opacity-90 transition cursor-pointer"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
