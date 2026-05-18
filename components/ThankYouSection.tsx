"use client";

import React from 'react';
import { FadeIn } from './FadeIn';

export const ThankYouSection = () => {
  return (
    <section className="py-48 bg-[#111] text-white flex items-center justify-center min-h-[70vh]">
      <div className="w-full max-w-5xl mx-auto px-8 lg:px-16 text-center">
        <FadeIn>
          <h2 className="text-[5rem] lg:text-[8rem] leading-[1] tracking-[-0.03em] font-serif mb-12 !text-white">
            Thank <span className="italic text-[#666]">You</span>
          </h2>
          <div className="w-24 h-px bg-[#333] mx-auto mb-12"></div>
          <p className="text-xl lg:text-2xl text-[#888] leading-relaxed font-mono max-w-2xl mx-auto tracking-[0.2em] uppercase">
            Questions & Answers
          </p>
        </FadeIn>
      </div>
    </section>
  );
};
