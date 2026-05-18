import React from 'react';
import { FadeIn } from './FadeIn';
import { FileCode, CheckCircle, XCircle, Blocks, Network } from 'lucide-react';

export const ToolLayerSection = () => {
  return (
    <section className="py-32 bg-[#FBFBFA]">
      <div className="w-full max-w-6xl mx-auto px-8 lg:px-16">
        <FadeIn>
          <div className="mb-24">
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-[#888] mb-8">
              [ 08 ] Deep Dive
            </p>
            <h2 className="text-[3.5rem] lg:text-[5rem] leading-[1] tracking-[-0.03em] font-serif max-w-4xl text-[#111]">
              The <span className="italic text-[#666]">Tool Layer</span><br />
              <span className="text-4xl lg:text-5xl text-[#888] block mt-4">(External Integrations)</span>
            </h2>
            <div className="mt-12 border-l border-[#333] pl-6 max-w-4xl">
              <p className="text-2xl leading-relaxed font-serif text-[#444]">
                The tool layer connects the agentic system to external APIs, databases, services, and computational resources.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-32">
            <h3 className="text-sm font-mono tracking-widest uppercase text-pastel-red-text bg-pastel-red-bg inline-block px-4 py-2 mb-12">
              Key Concepts
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#e5e5e5] border border-[#e5e5e5]">
              <div className="bg-white p-10 hover:bg-[#fafafa] transition-colors flex flex-col h-full">
                <FileCode className="text-[#888] mb-8" size={32} strokeWidth={1.5} />
                <h4 className="text-2xl font-sans font-medium mb-4 text-[#111]">JSON Schemas</h4>
                <p className="text-[#666] text-lg leading-relaxed">Tools are defined using JSON schemas that describe exactly when and how they should be used.</p>
              </div>

              <div className="bg-white p-10 hover:bg-[#fafafa] transition-colors flex flex-col h-full">
                <CheckCircle className="text-[#888] mb-8" size={32} strokeWidth={1.5} />
                <h4 className="text-2xl font-sans font-medium mb-4 text-[#111]">Well-designed tools</h4>
                <p className="text-[#666] text-lg leading-relaxed">Precise definitions improve accuracy, reduce latency, and lower computational cost significantly.</p>
              </div>

              <div className="bg-white p-10 hover:bg-[#fafafa] transition-colors flex flex-col h-full">
                <XCircle className="text-[#888] mb-8" size={32} strokeWidth={1.5} />
                <h4 className="text-2xl font-sans font-medium mb-4 text-[#111]">Poorly defined schemas</h4>
                <p className="text-[#666] text-lg leading-relaxed">Can lead to incorrect tool selection and unnecessary context window expansion.</p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-24">
            <h3 className="text-sm font-mono tracking-widest uppercase text-pastel-red-text bg-pastel-red-bg inline-block px-4 py-2 mb-12">
              Standardization
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#333] border border-[#333]">
              <div className="bg-[#111] p-10 lg:p-12 hover:bg-[#1a1a1a] transition-colors flex flex-col justify-between">
                <div>
                  <Blocks className="text-[#666] mb-8" size={36} strokeWidth={1.5} />
                  <h4 className="text-3xl font-sans font-medium mb-4 !text-white">Model Context Protocol (MCP)</h4>
                </div>
                <p className="text-[#ccc] text-lg leading-relaxed">Introduced by Anthropic, MCP is an open standard for securely connecting AI systems with external tools and data sources.</p>
              </div>

              <div className="bg-[#111] p-10 lg:p-12 hover:bg-[#1a1a1a] transition-colors flex flex-col justify-between">
                <div>
                  <Network className="text-[#666] mb-8" size={36} strokeWidth={1.5} />
                  <h4 className="text-3xl font-sans font-medium mb-4 !text-white">Agent-to-Agent (A2A)</h4>
                </div>
                <p className="text-[#ccc] text-lg leading-relaxed">Protocols that enable robust communication and coordination between multiple AI agents in distributed systems.</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
