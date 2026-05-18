"use client";

import React from 'react';
import { FadeIn } from './FadeIn';
import { Cpu, Plug, Box, Leaf } from 'lucide-react';

export const AbstractionLayersSection = () => {
  return (
    <section className="py-32 bg-canvas">
      <div className="w-full max-w-6xl mx-auto px-8 lg:px-16">
        <FadeIn>
          <div className="mb-24">
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-[#888] mb-8">
              [ 16 ] Independence
            </p>
            <h2 className="text-[3.5rem] lg:text-[5rem] leading-none tracking-[-0.03em] font-serif max-w-4xl text-[#111]">
              Abstraction<br />
              <span className="italic text-[#666]">Layers</span>
            </h2>
            <div className="mt-12 border-l border-[#333] pl-6 max-w-4xl">
              <p className="text-2xl leading-relaxed font-serif text-[#444]">
                Build your architecture so that models, tools, and frameworks can be swapped independently:
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e5e5e5] border border-[#e5e5e5]">
          <FadeIn delay={0.1} className="h-full">
            <div className="bg-white p-10 hover:bg-[#fafafa] transition-colors flex flex-col h-full">
              <Cpu className="text-[#888] mb-8" size={32} strokeWidth={1.5} />
              <h3 className="text-2xl font-sans font-medium mb-4 text-[#111]">Model Abstraction</h3>
              <ul className="list-disc pl-6 flex flex-col gap-3 text-[#666] text-lg leading-relaxed marker:text-[#ccc]">
                <li className="pl-1">Switch between AI models without changing application logic</li>
                <li className="pl-1">Example: Amazon Bedrock unified model access</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="h-full">
            <div className="bg-white p-10 hover:bg-[#fafafa] transition-colors flex flex-col h-full">
              <Plug className="text-[#888] mb-8" size={32} strokeWidth={1.5} />
              <h3 className="text-2xl font-sans font-medium mb-4 text-[#111]">Tool Abstraction</h3>
              <ul className="list-disc pl-6 flex flex-col gap-3 text-[#666] text-lg leading-relaxed marker:text-[#ccc]">
                <li className="pl-1">MCP provides a universal interface for tools and integrations</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} className="h-full">
            <div className="bg-white p-10 hover:bg-[#fafafa] transition-colors flex flex-col h-full">
              <Box className="text-[#888] mb-8" size={32} strokeWidth={1.5} />
              <h3 className="text-2xl font-sans font-medium mb-4 text-[#111]">Framework Abstraction</h3>
              <ul className="list-disc pl-6 flex flex-col gap-3 text-[#666] text-lg leading-relaxed marker:text-[#ccc]">
                <li className="pl-1">Framework-agnostic hosting, memory, security, and observability</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} className="h-full">
            <div className="bg-white p-10 hover:bg-[#fafafa] transition-colors flex flex-col h-full">
              <Leaf className="text-[#888] mb-8" size={32} strokeWidth={1.5} />
              <h3 className="text-2xl font-sans font-medium mb-4 text-[#111]">Sustainability</h3>
              <ul className="list-disc pl-6 flex flex-col gap-3 text-[#666] text-lg leading-relaxed marker:text-[#ccc]">
                <li className="pl-1">Use the smallest effective model</li>
                <li className="pl-1">Reduce unnecessary inference and token generation</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
