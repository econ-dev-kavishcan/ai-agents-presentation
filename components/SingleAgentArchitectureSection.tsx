"use client";

import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { X, Check } from 'lucide-react';

export const SingleAgentArchitectureSection = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <section className="py-32 bg-white border-t border-[#eee]">
      <div className="w-full max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          <div className="lg:col-span-5">
            <FadeIn>
              <p className="text-xs font-mono tracking-[0.2em] uppercase text-[#888] mb-8">
                [ 18 ] Architecture
              </p>
              <h2 className="text-[3.5rem] lg:text-[4.5rem] leading-[1] tracking-[-0.03em] font-serif mb-6 text-[#111]">
                Single Agent<br />
                <span className="italic text-[#666]">Pattern</span>
              </h2>

              <ul className="mt-12 flex flex-col gap-6 text-[#666] text-lg leading-relaxed list-none font-sans">
                <li className="flex items-start gap-4">
                  <Check className="text-[#888] mt-1 shrink-0" size={20} />
                  <span>One central LLM handles reasoning, memory, and tool usage</span>
                </li>
                <li className="flex items-start gap-4">
                  <Check className="text-[#888] mt-1 shrink-0" size={20} />
                  <span>Uses tools such as search APIs, databases, calculators, and code executors</span>
                </li>
                <li className="flex items-start gap-4">
                  <Check className="text-[#888] mt-1 shrink-0" size={20} />
                  <span>Includes state management and short/long-term memory</span>
                </li>
                <li className="flex items-start gap-4">
                  <Check className="text-[#888] mt-1 shrink-0" size={20} />
                  <span>Best starting point for most agentic AI systems</span>
                </li>
                <li className="flex items-start gap-4">
                  <Check className="text-[#888] mt-1 shrink-0" size={20} />
                  <span>Simple, maintainable, and easier to scale incrementally</span>
                </li>
              </ul>
            </FadeIn>
          </div>

          <div className="lg:col-span-7">
            <FadeIn delay={0.2}>
              <div
                className="w-full border border-[#eee] bg-[#FBFBFA] p-4 lg:p-12 cursor-pointer hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center relative group"
                onClick={() => setIsImageOpen(true)}
              >
                <img
                  src="/8.png"
                  alt="Single Agent Pattern"
                  className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity mix-blend-multiply"
                />
                <div className="absolute bg-[#111] text-white text-xs tracking-widest uppercase px-4 py-2 font-mono bottom-8 right-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to enlarge
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>

      {/* Modal Lightbox */}
      {isImageOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 lg:p-12 cursor-zoom-out"
          onClick={() => setIsImageOpen(false)}
        >
          <button
            className="absolute top-8 right-8 text-white hover:text-[#ccc] transition-colors bg-white/10 p-2 rounded-full backdrop-blur-md"
            onClick={(e) => {
              e.stopPropagation();
              setIsImageOpen(false);
            }}
          >
            <X size={32} />
          </button>

          <img
            src="/8.png"
            alt="Single Agent Pattern"
            className="max-w-full w-auto object-contain shadow-2xl cursor-default"
            style={{ height: '80vh' }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
