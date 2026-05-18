import React from 'react';
import { FadeIn } from './FadeIn';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-32">
      <div className="w-full max-w-6xl mx-auto px-8 lg:px-16">
        <FadeIn>
          <div className="flex flex-col gap-12">
            <p className="text-sm font-mono tracking-[0.2em] uppercase text-[#888]">
              Research Presentation
            </p>
            <h1 className="text-[5rem] md:text-[6rem] lg:text-[8rem] leading-[0.9] tracking-[-0.04em] font-serif">
              AI Agents<br/>
              <span className="text-[#888] italic">&amp; Architecture</span>
            </h1>
            <div className="mt-8 border-l border-[#333] pl-6">
              <p className="text-2xl font-sans tracking-wide text-[#111] uppercase">
                By <span className="font-semibold">V.Kavishcan</span>
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
