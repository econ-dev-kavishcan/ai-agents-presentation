"use client";

import React from 'react';
import { FadeIn } from './FadeIn';
import { Sparkles, Server, Layers } from 'lucide-react';

export const ModelsAgenticSystemsSection = () => {
  return (
    <section className="py-32 bg-canvas">
      <div className="w-full max-w-6xl mx-auto px-8 lg:px-16">
        <FadeIn>
          <div className="mb-24">
            <p className="text-sm font-mono tracking-[0.2em] uppercase text-[#888] mb-8">
              [ 13 ] Models
            </p>
            <h2 className="text-[3.5rem] lg:text-[5rem] leading-none tracking-[-0.03em] font-serif max-w-4xl text-[#111]">
              Models in<br />
              <span className="italic text-[#666]">Agentic Systems</span>
            </h2>
            <div className="mt-12 border-l border-[#333] pl-6 max-w-4xl">
              <p className="text-3xl leading-relaxed font-serif text-[#444]">
                AI Models Powering Agents
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#e5e5e5] border border-[#e5e5e5] mb-24">
          <FadeIn delay={0.1} className="h-full">
            <div className="bg-white p-10 hover:bg-[#fafafa] transition-colors flex flex-col h-full">
              <Sparkles className="text-[#888] mb-8" size={32} strokeWidth={1.5} />
              <h3 className="text-3xl font-sans font-medium mb-4 text-[#111]">Frontier Models</h3>
              <ul className="list-disc pl-6 flex flex-col gap-3 text-[#666] text-xl leading-relaxed marker:text-[#ccc]">
                <li className="pl-1">Advanced AI models with reasoning and tool-use capabilities</li>
                <li className="pl-1">Example: Claude, Gemini, Anthropic models</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="h-full lg:col-span-1">
            <div className="bg-white p-10 hover:bg-[#fafafa] transition-colors flex flex-col h-full">
              <Layers className="text-[#888] mb-8" size={32} strokeWidth={1.5} />
              <h3 className="text-3xl font-sans font-medium mb-4 text-[#111]">Multi-Model Agents</h3>
              <ul className="list-disc pl-6 flex flex-col gap-3 text-[#666] text-xl leading-relaxed marker:text-[#ccc]">
                <li className="pl-1">Combine text, vision, speech, and embedding models</li>
                <li className="pl-1">Use the best model for each specific task</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} className="h-full lg:col-span-2">
            <div className="bg-white p-10 hover:bg-[#fafafa] transition-colors h-full">
              <Server className="text-[#888] mb-8" size={32} strokeWidth={1.5} />
              <h3 className="text-3xl font-sans font-medium mb-8 text-[#111]">Local Models</h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                <ul className="list-disc pl-6 flex flex-col gap-4 text-[#666] text-xl leading-relaxed marker:text-[#ccc]">
                  <li className="pl-1">Run privately on local machines or servers</li>
                  <li className="pl-1">Useful for cost savings, privacy, and offline deployment</li>
                </ul>

                <div>
                  <p className="text-[#666] text-xl leading-relaxed mb-4">Require operational practices such as:</p>
                  <ul className="list-[circle] pl-6 flex flex-col gap-3 text-[#777] marker:text-[#ccc]">
                    <li className="pl-1">Error handling and retry mechanisms</li>
                    <li className="pl-1">Timeout management to prevent infinite loops</li>
                    <li className="pl-1">Observability and logging for monitoring</li>
                    <li className="pl-1">Human-in-the-loop approval for sensitive actions</li>
                    <li className="pl-1">Guardrails for safety and content filtering</li>
                    <li className="pl-1">Cost controls for efficient resource usage</li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
