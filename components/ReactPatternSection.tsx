import React from 'react';
import Image from 'next/image';
import { ArrowDown, ArrowRight, CornerDownLeft, CornerUpLeft } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const ReactPatternSection = () => {
  return (
    <section className="py-32">
      <div className="w-full max-w-6xl mx-auto px-8 lg:px-16">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-24">
            <div className="lg:col-span-8">
              <p className="text-xs font-mono tracking-[0.2em] uppercase text-text-tertiary mb-8">
                [ 01 ] Foundation
              </p>
              <h2 className="text-[4rem] lg:text-[6rem] leading-[0.9] tracking-[-0.04em] font-serif">
                The ReAct<br />
                <span className="text-text-tertiary italic">Pattern</span>
              </h2>
            </div>
            <div className="lg:col-span-4 pb-4">
              <p className="text-xl leading-relaxed text-text-secondary border-l border-border-subtle pl-6">
                Transitioning from deterministic execution paths to autonomous cognitive loops.
                A framework for reasoning, acting, and observing.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-16">
          <div className="lg:col-span-5 flex flex-col gap-12">
            <FadeIn delay={0.1}>
              <div>
                <h3 className="text-2xl font-serif mb-4 flex items-center gap-4">
                  <span className="font-mono text-sm text-text-tertiary">01</span> Thought
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed">
                  The agent reasons about the current state - what it knows, what it doesn't know, and what action to take next. The agent "expresses its internal reasoning" as an explicit text trace.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <h3 className="text-2xl font-serif mb-4 flex items-center gap-4">
                  <span className="font-mono text-sm text-text-tertiary">02</span> Action
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Based on the thought, the agent executes a structured call to an external tool - for example: query a search engine, run a calculator, query a database, or call some API.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div>
                <h3 className="text-2xl font-serif mb-4 flex items-center gap-4">
                  <span className="font-mono text-sm text-text-tertiary">03</span> Observation
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed">
                  The system feeds the result of the action back to the LLM. "If the action was a web search, the observation is the search snippet. If it was a failed API call, the observation is the error message".
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="p-6 bg-surface border border-border-subtle italic text-text-primary text-lg font-serif">
                This cycle repeats until the agent determines through its reasoning that the task is complete, at which point it generates a final answer.
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-7">
            <FadeIn delay={0.3}>
              <div className="h-full w-full bg-surface border border-border-subtle p-8 flex items-center justify-center relative">
                <Image
                  src="/1.png"
                  alt="ReAct Pattern Flowchart"
                  width={800}
                  height={1000}
                  className="w-full h-auto object-contain"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
