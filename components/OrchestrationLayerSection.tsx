import React from 'react';
import { FadeIn } from './FadeIn';
import { Database, Brain, AlignLeft, AlertTriangle, Network, GitMerge, Send, Users } from 'lucide-react';

export const OrchestrationLayerSection = () => {
  return (
    <section className="py-32 bg-canvas">
      <div className="w-full max-w-6xl mx-auto px-8 lg:px-16">
        <FadeIn>
          <div className="mb-24">
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-[#888] mb-8">
              [ 07 ] Deep Dive
            </p>
            <h2 className="text-[3.5rem] lg:text-[5rem] leading-none tracking-[-0.03em] font-serif max-w-4xl text-[#111]">
              What is the<br />
              <span className="italic text-[#666]">Orchestration Layer?</span>
            </h2>
            <div className="mt-12 border-l border-[#333] pl-6 max-w-4xl">
              <p className="text-2xl leading-relaxed font-serif text-[#444]">
                The orchestration layer acts as the control plane of an agentic system, managing workflows, tool execution, memory, and governance. Frameworks like LangGraph and Amazon Bedrock Agents operate at this layer.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-32">
            <h3 className="text-sm font-mono tracking-widest uppercase text-pastel-yellow-text bg-pastel-yellow-bg inline-block px-4 py-2 mb-12">
              Key Responsibilities
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e5e5e5] border border-[#e5e5e5]">
              <div className="bg-white p-10 hover:bg-[#fafafa] transition-colors flex flex-col h-full">
                <Database className="text-[#888] mb-8" size={32} strokeWidth={1.5} />
                <h4 className="text-2xl font-sans font-medium mb-4 text-[#111]">State management</h4>
                <p className="text-[#666] text-lg leading-relaxed">Maintains execution state and enables checkpoint-based recovery.</p>
              </div>

              <div className="bg-white p-10 hover:bg-[#fafafa] transition-colors flex flex-col h-full">
                <Brain className="text-[#888] mb-8" size={32} strokeWidth={1.5} />
                <h4 className="text-2xl font-sans font-medium mb-4 text-[#111]">Memory management</h4>
                <p className="text-[#666] text-lg leading-relaxed">Handles short-term and long-term memory across interactions.</p>
              </div>

              <div className="bg-white p-10 hover:bg-[#fafafa] transition-colors flex flex-col h-full">
                <AlignLeft className="text-[#888] mb-8" size={32} strokeWidth={1.5} />
                <h4 className="text-2xl font-sans font-medium mb-4 text-[#111]">Context management</h4>
                <p className="text-[#666] text-lg leading-relaxed">Prevents context overflow through summarization and prioritization.</p>
              </div>

              <div className="bg-white p-10 hover:bg-[#fafafa] transition-colors flex flex-col h-full">
                <AlertTriangle className="text-[#888] mb-8" size={32} strokeWidth={1.5} />
                <h4 className="text-2xl font-sans font-medium mb-4 text-[#111]">Error handling</h4>
                <p className="text-[#666] text-lg leading-relaxed">Manages tool failures, retries, and intelligent recovery mechanisms.</p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-24">
            <h3 className="text-sm font-mono tracking-widest uppercase text-pastel-yellow-text bg-pastel-yellow-bg inline-block px-4 py-2 mb-12">
              Architectural Patterns
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#333] border border-[#333]">
              <div className="bg-[#111] p-10 lg:p-12 hover:bg-[#1a1a1a] transition-colors flex flex-col justify-between">
                <div>
                  <Network className="text-[#666] mb-8" size={36} strokeWidth={1.5} />
                  <h4 className="text-3xl font-sans font-medium mb-4 text-white!">Centralized</h4>
                </div>
                <p className="text-[#ccc] text-lg leading-relaxed">Single orchestrator manages all active agents and tasks.</p>
              </div>

              <div className="bg-[#111] p-10 lg:p-12 hover:bg-[#1a1a1a] transition-colors flex flex-col justify-between">
                <div>
                  <GitMerge className="text-[#666] mb-8" size={36} strokeWidth={1.5} />
                  <h4 className="text-3xl font-sans font-medium mb-4 text-white!">Hierarchical</h4>
                </div>
                <p className="text-[#ccc] text-lg leading-relaxed">Structured planner → coordinators → executors workflow.</p>
              </div>

              <div className="bg-[#111] p-10 lg:p-12 hover:bg-[#1a1a1a] transition-colors flex flex-col justify-between">
                <div>
                  <Send className="text-[#666] mb-8" size={36} strokeWidth={1.5} />
                  <h4 className="text-3xl font-sans font-medium mb-4 text-white!">Handoff</h4>
                </div>
                <p className="text-[#ccc] text-lg leading-relaxed">Agents transfer tasks dynamically based on required capabilities.</p>
              </div>

              <div className="bg-[#111] p-10 lg:p-12 hover:bg-[#1a1a1a] transition-colors flex flex-col justify-between">
                <div>
                  <Users className="text-[#666] mb-8" size={36} strokeWidth={1.5} />
                  <h4 className="text-3xl font-sans font-medium mb-4 text-white!">Group Chat</h4>
                </div>
                <p className="text-[#ccc] text-lg leading-relaxed">Multiple independent agents collaborate in shared conversations.</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
