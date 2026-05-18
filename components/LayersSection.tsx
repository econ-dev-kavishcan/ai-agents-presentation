"use client";

import React, { useState } from 'react';
import { Brain, Settings, Network, X } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const LayersSection = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <section className="py-32">
      <div className="w-full max-w-6xl mx-auto px-8 lg:px-16">
        <FadeIn>
          <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12 editorial-divider pb-12">
            <div>
              <p className="text-sm font-mono tracking-[0.2em] uppercase text-[#888] mb-6">
                [ 05 ] Systems
              </p>
              <h2 className="text-[3.5rem] lg:text-[4.5rem] leading-none tracking-[-0.03em] font-serif">
                Three-Layer Agent<br />
                <span className="italic text-[#888]">Architecture</span>
              </h2>
            </div>
            <div className="md:w-[400px]">
              <p className="text-2xl text-[#666] leading-relaxed font-serif">
                An agent is only as useful as the systems it can access. A deep dive into cognition, control, and integration.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative mb-24">
          <FadeIn delay={0.1}>
            <div className="group">
              <div className="w-14 h-14 bg-pastel-red-bg text-pastel-red-text rounded-full flex items-center justify-center mb-8 transition-transform group-hover:scale-110">
                <Brain size={24} strokeWidth={1} />
              </div>
              <h3 className="text-3xl font-serif mb-4 pb-4 border-b border-[#e5e5e5]">Reasoning Layer</h3>
              <p className="text-lg text-[#666] mb-8">
                The cognitive engine (LLM) responsible for planning and high-level decision-making.
              </p>
              <ul className="flex flex-col gap-3 text-base text-[#666] list-none">
                <li className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-[#e5e5e5]">Chain-of-Thought Reasoning</li>
                <li className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-[#e5e5e5]">Tool Selection & Planning</li>
                <li className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-[#e5e5e5]">Response Generation</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="group md:mt-16">
              <div className="w-14 h-14 bg-pastel-blue-bg text-pastel-blue-text rounded-full flex items-center justify-center mb-8 transition-transform group-hover:scale-110">
                <Settings size={24} strokeWidth={1} />
              </div>
              <h3 className="text-3xl font-serif mb-4 pb-4 border-b border-[#e5e5e5]">Orchestration Layer</h3>
              <p className="text-lg text-[#666] mb-8">
                The framework control plane managing precise workflows, tool execution, and governance.
              </p>
              <ul className="flex flex-col gap-3 text-base text-[#666] list-none">
                <li className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-[#e5e5e5]">State Management</li>
                <li className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-[#e5e5e5]">Memory Management</li>
                <li className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-[#e5e5e5]">Error Handling</li>
                <li className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-[#e5e5e5]">Control Flow</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="group md:mt-32">
              <div className="w-14 h-14 bg-pastel-yellow-bg text-pastel-yellow-text rounded-full flex items-center justify-center mb-8 transition-transform group-hover:scale-110">
                <Network size={24} strokeWidth={1} />
              </div>
              <h3 className="text-3xl font-serif mb-4 pb-4 border-b border-[#e5e5e5]">Tool Layer</h3>
              <p className="text-lg text-[#666] mb-8">
                External integrations connecting the agent to robust databases and bespoke services.
              </p>
              <ul className="flex flex-col gap-3 text-base text-[#666] list-none">
                <li className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-[#e5e5e5]">APIs & Services</li>
                <li className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-[#e5e5e5]">Databases & Vector Stores</li>
                <li className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-[#e5e5e5]">File Systems & Code</li>
                <li className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-[#e5e5e5]">MCP Servers</li>
              </ul>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <div
            className="w-full border border-[#eee] bg-white p-4 lg:p-12 cursor-pointer hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center relative group"
            onClick={() => setIsImageOpen(true)}
          >
            <img
              src="/4.png"
              alt="Three-Layer Agent Architecture"
              className="w-full max-w-5xl h-auto opacity-90 group-hover:opacity-100 transition-opacity"
            />
            <div className="absolute bg-[#111] text-white text-sm tracking-widest uppercase px-4 py-2 font-mono bottom-8 right-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
              Click to enlarge
            </div>
          </div>
        </FadeIn>
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
            src="/4.png"
            alt="Three-Layer Agent Architecture"
            className="max-w-full w-auto object-contain shadow-2xl cursor-default"
            style={{ height: '80vh' }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
