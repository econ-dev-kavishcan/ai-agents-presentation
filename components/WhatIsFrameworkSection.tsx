import React from 'react';
import { Layers, Database, RefreshCcw, Save, HandMetal } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const WhatIsFrameworkSection = () => {
  return (
    <section className="py-32 bg-[#111] editorial-divider">
      <div className="w-full max-w-6xl mx-auto px-8 lg:px-16">
        <FadeIn>
          <div className="mb-24">
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-[#888] mb-8">
              [ 03 ] Definition
            </p>
            <h2 className="text-[3.5rem] lg:text-[5rem] tracking-[-0.03em] font-serif max-w-4xl text-white!">
              What is an agent<br />
              <span className="italic text-[#aaa]">framework?</span>
            </h2>
            <div className="mt-12 border-l border-[#333] pl-6 max-w-3xl">
              <p className="text-2xl leading-relaxed font-serif text-[#ccc]">
                An agent framework connects a large language model to the outside world—tools, memory, state, and other agents—while providing the scaffolding to execute multi-step tasks autonomously.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-32">
            <h3 className="text-sm font-mono tracking-widest uppercase text-pastel-red-text bg-pastel-red-bg inline-block px-4 py-2 mb-12">
              Without a framework, teams rebuild:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#333] border border-[#333]">

              <div className="bg-[#111] p-8 hover:bg-[#1a1a1a] transition-colors">
                <Layers className="text-[#888] mb-6" size={28} strokeWidth={1.5} />
                <p className="text-3xl font-sans font-medium text-white leading-snug">
                  Tool registration and schema management
                </p>
              </div>

              <div className="bg-[#111] p-8 hover:bg-[#1a1a1a] transition-colors">
                <Database className="text-[#888] mb-6" size={28} strokeWidth={1.5} />
                <p className="text-3xl font-sans font-medium text-white leading-snug">
                  Context window and memory handling
                </p>
              </div>

              <div className="bg-[#111] p-8 hover:bg-[#1a1a1a] transition-colors">
                <RefreshCcw className="text-[#888] mb-6" size={28} strokeWidth={1.5} />
                <p className="text-3xl font-sans font-medium text-white leading-snug">
                  Loop control, retries, and error recovery
                </p>
              </div>

              <div className="bg-[#111] p-8 hover:bg-[#1a1a1a] transition-colors">
                <Save className="text-[#888] mb-6" size={28} strokeWidth={1.5} />
                <p className="text-3xl font-sans font-medium text-white leading-snug">
                  State persistence and checkpointing
                </p>
              </div>

              <div className="bg-[#111] p-8 hover:bg-[#1a1a1a] transition-colors">
                <HandMetal className="text-[#888] mb-6" size={28} strokeWidth={1.5} />
                <p className="text-3xl font-sans font-medium text-white leading-snug">
                  Human-in-the-loop pause and resume
                </p>
              </div>

              <div className="bg-[#111] p-8 flex items-center justify-center">
                <p className="text-3xl font-serif italic text-center text-white px-4 leading-snug">
                  Frameworks enable you focus on capabilities, not plumbing.
                </p>
              </div>

            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
