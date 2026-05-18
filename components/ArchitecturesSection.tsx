import React from 'react';
import { Brain } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const ArchitecturesSection = () => {
  return (
    <section className="py-32 pb-48">
      <div className="w-full max-w-6xl mx-auto px-8 lg:px-16">
        <FadeIn>
          <div className="mb-24">
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-text-tertiary mb-6">
              [ 15 ] Design Patterns
            </p>
            <h2 className="text-[3.5rem] lg:text-[4.5rem] leading-[1] tracking-[-0.03em] font-serif max-w-3xl">
              Production<br />
              <span className="italic text-text-tertiary">Architectures</span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-border-subtle pt-16 mt-16">
            <div className="lg:col-span-4">
              <h3 className="text-3xl font-serif">Single Agent</h3>
              <p className="mt-4 text-text-secondary text-lg leading-relaxed">
                One central LLM handles reasoning, memory, and tool usage natively. Best starting point for most systems.
              </p>
            </div>
            <div className="lg:col-span-8 bg-surface border border-border-subtle p-12 flex justify-center items-center shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
               <div className="flex flex-col items-center gap-6">
                 <div className="w-24 h-24 rounded-full border border-border-strong flex items-center justify-center">
                   <Brain size={32} strokeWidth={1} className="text-text-primary" />
                 </div>
                 <div className="text-sm font-mono tracking-widest uppercase text-text-tertiary">Centralized Core</div>
               </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-border-subtle pt-16 mt-16">
            <div className="lg:col-span-4 lg:order-last">
              <h3 className="text-3xl font-serif">Router Pattern</h3>
              <p className="mt-4 text-text-secondary text-lg leading-relaxed">
                A router agent strictly directs tasks to specialized agents based on query type, enforcing clean tool boundaries.
              </p>
            </div>
            <div className="lg:col-span-8 bg-surface border border-border-subtle p-12 flex justify-center items-center shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
               <div className="flex flex-col items-center gap-8 w-full max-w-md">
                 <div className="w-full p-4 border border-border-strong text-center font-serif text-xl">
                   Router
                 </div>
                 <div className="w-px h-8 bg-border-subtle"></div>
                 <div className="grid grid-cols-3 gap-4 w-full">
                   <div className="p-4 border border-border-subtle text-center font-sans text-sm text-text-secondary">Research</div>
                   <div className="p-4 border border-border-subtle text-center font-sans text-sm text-text-secondary">Coding</div>
                   <div className="p-4 border border-border-subtle text-center font-sans text-sm text-text-secondary">Analysis</div>
                 </div>
               </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-border-subtle pt-24 mt-24">
            <div>
              <h4 className="text-sm font-sans tracking-widest uppercase text-text-primary mb-8 border-b border-border-subtle pb-4">01. Design Principles</h4>
              <ul className="flex flex-col gap-6 text-lg text-text-secondary list-none">
                <li className="pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-border-subtle"><strong className="text-text-primary font-medium">Single-Responsibility:</strong> Each agent manages exactly one task.</li>
                <li className="pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-border-subtle"><strong className="text-text-primary font-medium">Tool-First Design:</strong> Define concrete schemas before writing logic.</li>
                <li className="pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-border-subtle"><strong className="text-text-primary font-medium">Clean Boundaries:</strong> Isolate workflow layers from tool code.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-sans tracking-widest uppercase text-text-primary mb-8 border-b border-border-subtle pb-4">02. Production Readiness</h4>
              <ul className="flex flex-col gap-6 text-lg text-text-secondary list-none">
                <li className="pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-border-subtle"><strong className="text-text-primary font-medium">Cost Optimization:</strong> Leverage smaller models for trivial tasks.</li>
                <li className="pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-border-subtle"><strong className="text-text-primary font-medium">Abstraction:</strong> Decouple models and framework engines.</li>
                <li className="pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-border-subtle"><strong className="text-text-primary font-medium">Performance:</strong> Enforce streaming &amp; batched inference logic.</li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
