import React from 'react';
import { Workflow } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const AnatomySection = () => {
  return (
    <section className="py-32 bg-[#111] text-surface">
      <div className="w-full max-w-6xl mx-auto px-8 lg:px-16">
        <FadeIn>
          <div className="mb-24">
            <p className="text-sm font-mono tracking-[0.2em] uppercase text-[#888] mb-8 opacity-60">
              [ 04 ] Architecture
            </p>
            <h2 className="text-[4rem] lg:text-[5.5rem] leading-[0.9] tracking-[-0.03em] font-serif max-w-3xl text-white!">
              Anatomy of an<br />
              <span className="italic opacity-60">Agent</span>
            </h2>
            <div className="mt-12 border-l border-[#333] pl-6 max-w-3xl">
              <p className="text-3xl leading-relaxed font-serif text-[#ccc]">
                Every agent - regardless of framework - is composed of the same five building blocks. Understanding each block is the foundation for all design decisions that follow.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-[#333] overflow-hidden border border-[#333]">
          {/* LLM */}
          <FadeIn delay={0.1} className="md:col-span-8 h-full">
            <div className="bg-[#111] h-full p-10 lg:p-16 transition-colors hover:bg-[#1a1a1a] flex flex-col justify-between group">
              <div className="font-serif text-[6rem] lg:text-[8rem] leading-none text-[#222] group-hover:text-[#333] transition-colors mb-12 lg:mb-24">01</div>
              <div>
                <h3 className="font-sans font-medium text-5xl lg:text-6xl mb-6 text-white!">LLM</h3>
                <p className="text-2xl lg:text-3xl text-[#ccc] leading-relaxed max-w-2xl">The reasoning engine. Receives context, generates thoughts, decides actions. Amazon Bedrock provides Claude and other FMs via unified API.</p>
              </div>
            </div>
          </FadeIn>

          {/* Tools */}
          <FadeIn delay={0.15} className="md:col-span-4 h-full">
            <div className="bg-[#111] h-full p-8 lg:p-12 transition-colors hover:bg-[#1a1a1a] flex flex-col justify-between group">
              <div className="font-serif text-[5rem] lg:text-[6rem] leading-none text-[#222] group-hover:text-[#333] transition-colors mb-12">02</div>
              <div>
                <h3 className="font-sans font-medium text-4xl mb-4 text-white!">Tools</h3>
                <p className="text-xl text-[#ccc] leading-relaxed">Functions the agent can call. Each tool has a JSON schema the agent reads to decide when and how to invoke it. Model Context Protocol (MCP) standardizes the interface.</p>
              </div>
            </div>
          </FadeIn>

          {/* Memory */}
          <FadeIn delay={0.2} className="md:col-span-4 h-full">
            <div className="bg-[#111] h-full p-8 lg:p-12 transition-colors hover:bg-[#1a1a1a] flex flex-col justify-between group">
              <div className="font-serif text-[5rem] lg:text-[6rem] leading-none text-[#222] group-hover:text-[#333] transition-colors mb-12">03</div>
              <div>
                <h3 className="font-sans font-medium text-4xl mb-4 text-white!">Memory</h3>
                <p className="text-xl text-[#ccc] leading-relaxed">Short-term (context window) and long-term (Amazon Bedrock Knowledge Bases, Amazon DynamoDB). Determines what the agent knows at each step.</p>
              </div>
            </div>
          </FadeIn>

          {/* State */}
          <FadeIn delay={0.25} className="md:col-span-4 h-full">
            <div className="bg-[#111] h-full p-8 lg:p-12 transition-colors hover:bg-[#1a1a1a] flex flex-col justify-between group">
              <div className="font-serif text-[5rem] lg:text-[6rem] leading-none text-[#222] group-hover:text-[#333] transition-colors mb-12">04</div>
              <div>
                <h3 className="font-sans font-medium text-4xl mb-4 text-white!">State</h3>
                <p className="text-xl text-[#ccc] leading-relaxed">The typed data structure shared across all steps. In LangGraph this is a TypedDict. Persisted via checkpointers for durability across failures.</p>
              </div>
            </div>
          </FadeIn>

          {/* Orchestrator */}
          <FadeIn delay={0.3} className="md:col-span-4 h-full">
            <div className="bg-[#111] h-full p-8 lg:p-12 transition-colors hover:bg-[#1a1a1a] flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute -right-8 -bottom-12 opacity-5 pointer-events-none text-white">
                <Workflow size={240} strokeWidth={0.5} />
              </div>
              <div className="font-serif text-[5rem] lg:text-[6rem] leading-none text-[#222] group-hover:text-[#333] transition-colors mb-12 relative z-10">05</div>
              <div className="relative z-10">
                <h3 className="font-sans font-medium text-4xl mb-4 text-white!">Orchestrator</h3>
                <p className="text-xl text-[#ccc] leading-relaxed">The loop controller. Runs think-act-observe cycles, routes between nodes, handles errors, and manages termination conditions.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
