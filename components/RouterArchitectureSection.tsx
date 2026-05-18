"use client";

import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { X, Check } from 'lucide-react';

export const RouterArchitectureSection = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <section className="py-32 bg-canvas">
      <div className="w-full max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Image Left */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <FadeIn delay={0.2}>
              <div 
                className="w-full border border-[#eee] bg-white p-4 lg:p-12 cursor-pointer hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center relative group"
                onClick={() => setIsImageOpen(true)}
              >
                <img 
                  src="/9.png" 
                  alt="Router Architecture Pattern" 
                  className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity mix-blend-multiply"
                />
                <div className="absolute bg-[#111] text-white text-xs tracking-widest uppercase px-4 py-2 font-mono bottom-8 right-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to enlarge
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Text Right */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <FadeIn>
              <p className="text-xs font-mono tracking-[0.2em] uppercase text-[#888] mb-8">
                [ 19 ] Architecture
              </p>
              <h2 className="text-[3.5rem] lg:text-[4.5rem] leading-none tracking-[-0.03em] font-serif mb-6 text-[#111]">
                Router Agent<br />
                <span className="italic text-[#666]">Pattern</span>
              </h2>
              
              <ul className="mt-12 flex flex-col gap-6 text-[#666] text-lg leading-relaxed list-none font-sans">
                <li className="flex items-start gap-4">
                  <Check className="text-[#888] mt-1 shrink-0" size={20} />
                  <span>A router agent directs tasks to specialized agents based on query type</span>
                </li>
                <li className="flex items-start gap-4">
                  <Check className="text-[#888] mt-1 shrink-0" size={20} />
                  <span>Specialized agents focus on areas such as research, coding, or data analysis</span>
                </li>
                <li className="flex items-start gap-4">
                  <Check className="text-[#888] mt-1 shrink-0" size={20} />
                  <span>Each agent has its own dedicated tools and workflows</span>
                </li>
                <li className="flex items-start gap-4">
                  <Check className="text-[#888] mt-1 shrink-0" size={20} />
                  <span>A synthesizer combines outputs into one unified response</span>
                </li>
                <li className="flex items-start gap-4">
                  <Check className="text-[#888] mt-1 shrink-0" size={20} />
                  <span>Useful for complex, multi-domain workflows</span>
                </li>
              </ul>
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
            src="/9.png" 
            alt="Router Architecture Pattern" 
            className="max-w-full w-auto object-contain shadow-2xl cursor-default"
            style={{ height: '80vh' }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
