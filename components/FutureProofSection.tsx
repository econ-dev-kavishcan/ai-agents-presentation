"use client";

import React from 'react';
import { FadeIn } from './FadeIn';

export const FutureProofSection = () => {
  return (
    <section className="py-32 bg-[#111] text-white">
      <div className="w-full max-w-5xl mx-auto px-8 lg:px-16 text-center">
        <FadeIn>
          <p className="text-sm font-mono tracking-[0.2em] uppercase text-[#888] mb-8">
            [ 14 ] Evolution
          </p>
          <h2 className="text-[3.5rem] lg:text-[5rem] leading-none tracking-[-0.03em] font-serif mb-12 text-white">
            Designing <span className="italic text-[#888]">future-proof</span><br /> architectures
          </h2>
          <p className="text-2xl lg:text-3xl text-[#ccc] leading-relaxed font-serif max-w-4xl mx-auto">
            The agentic AI landscape is evolving rapidly — new models, new frameworks, and new protocols emerge every month. How do you build systems that survive these changes? The answer lies in <strong className="text-white font-normal">modular design, clean abstractions, and emerging standards.</strong>
          </p>
        </FadeIn>
      </div>
    </section>
  );
};
