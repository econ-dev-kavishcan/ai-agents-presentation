import React from 'react';
import { Brain } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const ArchitecturesSection = () => {
  return (
    <section className="py-32 pb-48">
      <div className="w-full max-w-6xl mx-auto px-8 lg:px-16">
        <FadeIn>
          <div className="mb-24">
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-[#888] mb-6">
              [ 15 ] Design Patterns
            </p>
            <h2 className="text-[3.5rem] lg:text-[4.5rem] leading-none tracking-[-0.03em] font-serif max-w-3xl">
              Production<br />
              <span className="italic text-[#888]">Architectures</span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-[#e5e5e5] pt-16 mt-16">
            <div className="lg:col-span-4">
              <h3 className="text-3xl font-serif">Single Agent</h3>
              <p className="mt-4 text-[#666] text-lg leading-relaxed">
                One central LLM handles reasoning, memory, and tool usage natively. Best starting point for most systems.
              </p>
            </div>
            <div className="lg:col-span-8 bg-white border border-[#e5e5e5] p-12 flex justify-center items-center shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
               <div className="flex flex-col items-center gap-6">
                 <div className="w-24 h-24 rounded-full border border-[#333] flex items-center justify-center">
                   <Brain size={32} strokeWidth={1} className="text-[#111]" />
                 </div>
                 <div className="text-sm font-mono tracking-widest uppercase text-[#888]">Centralized Core</div>
               </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-[#e5e5e5] pt-16 mt-16">
            <div className="lg:col-span-4 lg:order-last">
              <h3 className="text-3xl font-serif">Router Pattern</h3>
              <p className="mt-4 text-[#666] text-lg leading-relaxed">
                A router agent strictly directs tasks to specialized agents based on query type, enforcing clean tool boundaries.
              </p>
            </div>
            <div className="lg:col-span-8 bg-white border border-[#e5e5e5] p-12 flex justify-center items-center shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
               <div className="flex flex-col items-center gap-8 w-full max-w-md">
                 <div className="w-full p-4 border border-[#333] text-center font-serif text-xl">
                   Router
                 </div>
                 <div className="w-px h-8 bg-border-subtle"></div>
                 <div className="grid grid-cols-3 gap-4 w-full">
                   <div className="p-4 border border-[#e5e5e5] text-center font-sans text-sm text-[#666]">Research</div>
                   <div className="p-4 border border-[#e5e5e5] text-center font-sans text-sm text-[#666]">Coding</div>
                   <div className="p-4 border border-[#e5e5e5] text-center font-sans text-sm text-[#666]">Analysis</div>
                 </div>
               </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[#e5e5e5] pt-24 mt-24">
            <div>
              <h4 className="text-sm font-sans tracking-widest uppercase text-[#111] mb-8 border-b border-[#e5e5e5] pb-4">01. Design Principles</h4>
              <ul className="flex flex-col gap-6 text-lg text-[#666] list-none">
                <li className="pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-[#e5e5e5]"><strong className="text-[#111] font-medium">Single-Responsibility:</strong> Each agent manages exactly one task.</li>
                <li className="pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-[#e5e5e5]"><strong className="text-[#111] font-medium">Tool-First Design:</strong> Define concrete schemas before writing logic.</li>
                <li className="pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-[#e5e5e5]"><strong className="text-[#111] font-medium">Clean Boundaries:</strong> Isolate workflow layers from tool code.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-sans tracking-widest uppercase text-[#111] mb-8 border-b border-[#e5e5e5] pb-4">02. Production Readiness</h4>
              <ul className="flex flex-col gap-6 text-lg text-[#666] list-none">
                <li className="pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-[#e5e5e5]"><strong className="text-[#111] font-medium">Cost Optimization:</strong> Leverage smaller models for trivial tasks.</li>
                <li className="pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-[#e5e5e5]"><strong className="text-[#111] font-medium">Abstraction:</strong> Decouple models and framework engines.</li>
                <li className="pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-[#e5e5e5]"><strong className="text-[#111] font-medium">Performance:</strong> Enforce streaming &amp; batched inference logic.</li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
