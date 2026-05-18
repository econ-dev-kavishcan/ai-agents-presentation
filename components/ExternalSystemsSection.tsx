import React from 'react';
import { FadeIn } from './FadeIn';

export const ExternalSystemsSection = () => {
  return (
    <section className="py-32 bg-[#111] text-white">
      <div className="w-full max-w-6xl mx-auto px-8 lg:px-16">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="lg:col-span-6">
              <p className="text-xs font-mono tracking-[0.2em] uppercase text-[#888] mb-8">
                [ 10 ] Connectivity
              </p>
              <h2 className="text-[3.5rem] lg:text-[4.5rem] leading-[1] tracking-[-0.03em] font-serif mb-8 text-white">
                Agents &amp;<br />
                <span className="italic text-[#888]">External Systems</span>
              </h2>
              <div className="border-l border-[#333] pl-6">
                <p className="text-xl text-[#ccc] leading-relaxed font-serif">
                  An agent is only as useful as the systems it can access. This section covers the three pillars of external connectivity: memory (how agents remember), tools (how agents act), and models (how agents think).
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col gap-px bg-[#333] border border-[#333]">
              <div className="bg-[#1a1a1a] p-10 lg:p-12 hover:bg-[#222] transition-colors flex items-center gap-8 group">
                <span className="text-4xl font-mono text-[#444] group-hover:text-white transition-colors">01</span>
                <h3 className="text-3xl font-sans font-medium !text-white">Memory &amp; Data Access</h3>
              </div>
              <div className="bg-[#1a1a1a] p-10 lg:p-12 hover:bg-[#222] transition-colors flex items-center gap-8 group">
                <span className="text-4xl font-mono text-[#444] group-hover:text-white transition-colors">02</span>
                <h3 className="text-3xl font-sans font-medium !text-white">Tools and Integrations</h3>
              </div>
              <div className="bg-[#1a1a1a] p-10 lg:p-12 hover:bg-[#222] transition-colors flex items-center gap-8 group">
                <span className="text-4xl font-mono text-[#444] group-hover:text-white transition-colors">03</span>
                <h3 className="text-3xl font-sans font-medium !text-white">Models</h3>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
