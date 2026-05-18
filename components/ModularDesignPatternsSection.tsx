"use client";

import React from 'react';
import { FadeIn } from './FadeIn';
import { Target, Shield, PenTool } from 'lucide-react';

export const ModularDesignPatternsSection = () => {
  return (
    <section className="py-32 bg-[#FBFBFA]">
      <div className="w-full max-w-6xl mx-auto px-8 lg:px-16">
        <FadeIn>
          <div className="mb-24">
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-[#888] mb-8">
              [ 15 ] Design Patterns
            </p>
            <h2 className="text-[3.5rem] lg:text-[5rem] leading-[1] tracking-[-0.03em] font-serif max-w-4xl text-[#111]">
              Modular<br />
              <span className="italic text-[#666]">Design Patterns</span>
            </h2>
            <div className="mt-12 border-l border-[#333] pl-6 max-w-4xl">
              <p className="text-2xl leading-relaxed font-serif text-[#444]">
                Production agentic systems follow the same principles that make any software maintainable:
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#e5e5e5] border border-[#e5e5e5]">
          <FadeIn delay={0.1} className="h-full">
            <div className="bg-white p-10 hover:bg-[#fafafa] transition-colors flex flex-col h-full">
              <Target className="text-[#888] mb-8" size={32} strokeWidth={1.5} />
              <h3 className="text-2xl font-sans font-medium mb-4 text-[#111]">Single-Responsibility Agents</h3>
              <ul className="list-disc pl-6 flex flex-col gap-3 text-[#666] text-lg leading-relaxed marker:text-[#ccc]">
                <li className="pl-1">Each agent handles one specific task</li>
                <li className="pl-1">Easier to test, maintain, and replace</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="h-full">
            <div className="bg-white p-10 hover:bg-[#fafafa] transition-colors flex flex-col h-full">
              <Shield className="text-[#888] mb-8" size={32} strokeWidth={1.5} />
              <h3 className="text-2xl font-sans font-medium mb-4 text-[#111]">Clean Tool Boundaries</h3>
              <ul className="list-disc pl-6 flex flex-col gap-3 text-[#666] text-lg leading-relaxed marker:text-[#ccc]">
                <li className="pl-1">Separate workflow logic from tool implementations</li>
                <li className="pl-1">Tool API changes do not affect agent reasoning</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} className="h-full">
            <div className="bg-white p-10 hover:bg-[#fafafa] transition-colors flex flex-col h-full">
              <PenTool className="text-[#888] mb-8" size={32} strokeWidth={1.5} />
              <h3 className="text-2xl font-sans font-medium mb-4 text-[#111]">Tool-First Design</h3>
              <ul className="list-disc pl-6 flex flex-col gap-3 text-[#666] text-lg leading-relaxed marker:text-[#ccc]">
                <li className="pl-1">Define tool schemas before building agent logic</li>
                <li className="pl-1">Clear schemas improve reliability and reduce failures</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
