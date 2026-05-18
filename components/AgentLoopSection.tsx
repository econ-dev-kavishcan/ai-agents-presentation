"use client";

import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { X, Quote } from 'lucide-react';

export const AgentLoopSection = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  const steps = [
    "User input arrives at the orchestration layer",
    "The orchestration layer formats input and passes it to the reasoning layer",
    "The reasoning layer (LLM) generates reasoning about what to do next",
    "If the LLM decides to invoke a tool, it generates a structured tool invocation request",
    "The orchestration layer validates the request and invokes the tool",
    "Tool results are passed back to the reasoning layer as an observation",
    "The loop continues until either a final response is generated or a termination condition is met"
  ];

  return (
    <section className="py-32 bg-canvas">
      <div className="w-full max-w-6xl mx-auto px-8 lg:px-16">
        <FadeIn>
          <div className="mb-24">
            <p className="text-sm font-mono tracking-[0.2em] uppercase text-[#888] mb-8">
              [ 09 ] Interaction
            </p>
            <h2 className="text-[3.5rem] lg:text-[5rem] leading-none tracking-[-0.03em] font-serif max-w-4xl text-[#111]">
              How the layers interact:<br />
              <span className="italic text-[#666]">The Agent Loop</span>
            </h2>
            <div className="mt-12 border-l border-[#333] pl-6 max-w-4xl">
              <p className="text-3xl leading-relaxed font-serif text-[#444]">
                The fundamental interaction pattern is the agent loop — the runtime cycle that drives every agent execution:
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="mt-24 max-w-4xl ml-4 lg:ml-12">
          {steps.map((step, idx) => (
            <FadeIn key={idx} delay={0.1 * idx}>
              <div className="flex gap-8 items-start mb-8 group">
                <span className="text-3xl font-mono text-[#ccc] group-hover:text-[#111] transition-colors mt-1">
                  {(idx + 1).toString().padStart(2, '0')}
                </span>
                <p className="text-2xl lg:text-3xl text-[#666] group-hover:text-[#111] transition-colors leading-relaxed font-sans">
                  {step}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-32 bg-[#111] p-10 lg:p-24 text-center text-white relative overflow-hidden">
            <Quote className="absolute top-12 left-12 text-[#333] opacity-50" size={80} strokeWidth={1} />
            <p className="text-3xl lg:text-4xl leading-relaxed font-serif italic max-w-4xl mx-auto relative z-10 text-[#eee]">
              "This pattern is isomorphic to control theory feedback systems where the reasoning layer represents the controller, the current state represents the system state, errors represent unmet goals, tool invocations represent control actions, and tool results represent feedback signals."
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div 
            className="w-full mt-24 border border-[#eee] bg-white p-4 lg:p-12 cursor-pointer hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center relative group"
            onClick={() => setIsImageOpen(true)}
          >
            <img 
              src="/5.png" 
              alt="The Agent Loop" 
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
            src="/5.png" 
            alt="The Agent Loop" 
            className="max-w-full w-auto object-contain shadow-2xl cursor-default"
            style={{ height: '80vh' }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
