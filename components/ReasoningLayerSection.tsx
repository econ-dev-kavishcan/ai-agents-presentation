import React from 'react';
import { FadeIn } from './FadeIn';
import { BrainCircuit, Cpu, Maximize, Wrench } from 'lucide-react';

export const ReasoningLayerSection = () => {
  return (
    <section className="py-32 bg-[#FBFBFA]">
      <div className="w-full max-w-6xl mx-auto px-8 lg:px-16">
        <FadeIn>
          <div className="mb-24">
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-[#888] mb-8">
              [ 06 ] Deep Dive
            </p>
            <h2 className="text-[3.5rem] lg:text-[5rem] leading-[1] tracking-[-0.03em] font-serif max-w-4xl text-[#111]">
              What is the<br />
              <span className="italic text-[#666]">Reasoning Layer?</span>
            </h2>
            <div className="mt-12 border-l border-[#333] pl-6 max-w-3xl">
              <p className="text-2xl leading-relaxed font-serif text-[#444]">
                The reasoning layer is the cognitive engine of an agentic AI system, responsible for reasoning, planning, and decision-making.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-32">
            <h3 className="text-sm font-mono tracking-widest uppercase text-pastel-blue-text bg-pastel-blue-bg inline-block px-4 py-2 mb-12">
              Key Capabilities
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e5e5e5] border border-[#e5e5e5]">
              <div className="bg-white p-10 hover:bg-[#fafafa] transition-colors flex flex-col h-full">
                <BrainCircuit className="text-[#888] mb-8" size={32} strokeWidth={1.5} />
                <h4 className="text-2xl font-sans font-medium mb-4 text-[#111]">Step-by-step reasoning</h4>
                <p className="text-[#666] text-lg leading-relaxed">Breaks complex problems into smaller tasks and develops solutions systematically.</p>
              </div>

              <div className="bg-white p-10 hover:bg-[#fafafa] transition-colors flex flex-col h-full">
                <Cpu className="text-[#888] mb-8" size={32} strokeWidth={1.5} />
                <h4 className="text-2xl font-sans font-medium mb-4 text-[#111]">Adaptive reasoning</h4>
                <p className="text-[#666] text-lg leading-relaxed">Allocates more computation to difficult tasks while responding quickly to simple ones.</p>
              </div>

              <div className="bg-white p-10 hover:bg-[#fafafa] transition-colors flex flex-col h-full">
                <Maximize className="text-[#888] mb-8" size={32} strokeWidth={1.5} />
                <h4 className="text-2xl font-sans font-medium mb-4 text-[#111]">Large context windows</h4>
                <p className="text-[#666] text-lg leading-relaxed">Processes large amounts of information in a single pass.</p>
              </div>

              <div className="bg-white p-10 hover:bg-[#fafafa] transition-colors flex flex-col h-full">
                <Wrench className="text-[#888] mb-8" size={32} strokeWidth={1.5} />
                <h4 className="text-2xl font-sans font-medium mb-4 text-[#111]">Native tool usage</h4>
                <p className="text-[#666] text-lg leading-relaxed">Integrates reasoning with external tools and APIs seamlessly.</p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-24 p-12 lg:p-24 bg-[#111] text-white flex flex-col items-center justify-center text-center">
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-[#888] mb-6">Example</p>
            <p className="text-3xl lg:text-4xl leading-tight font-serif italic max-w-4xl text-[#fff]">
              Models like Anthropic Claude provide advanced reasoning capabilities for modern AI agents.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
