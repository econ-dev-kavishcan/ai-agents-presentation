"use client";

import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { Blocks, Users, CreditCard, X } from 'lucide-react';

export const ToolsAgentProtocolsSection = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <section className="py-32 bg-[#FBFBFA]">
      <div className="w-full max-w-6xl mx-auto px-8 lg:px-16">
        <FadeIn>
          <div className="mb-24">
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-[#888] mb-8">
              [ 12 ] Tools
            </p>
            <h2 className="text-[3.5rem] lg:text-[5rem] leading-[1] tracking-[-0.03em] font-serif max-w-4xl text-[#111]">
              Tools &amp;<br />
              <span className="italic text-[#666]">Agent Protocols</span>
            </h2>
            <div className="mt-12 border-l border-[#333] pl-6 max-w-4xl">
              <p className="text-2xl leading-relaxed font-serif text-[#444]">
                How Agents Connect and Collaborate
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#e5e5e5] border border-[#e5e5e5] mb-24">
          <FadeIn delay={0.1} className="h-full">
            <div className="bg-white p-10 hover:bg-[#fafafa] transition-colors flex flex-col h-full">
              <Blocks className="text-[#888] mb-8" size={32} strokeWidth={1.5} />
              <h3 className="text-2xl font-sans font-medium mb-4 text-[#111]">MCP <span className="text-lg text-[#888] font-normal block mt-1">(Model Context Protocol)</span></h3>
              <ul className="list-disc pl-6 flex flex-col gap-3 text-[#666] text-lg leading-relaxed marker:text-[#ccc]">
                <li className="pl-1">Standard interface for connecting AI agents to tools and data sources</li>
                <li className="pl-1">Reduces the complexity of custom integrations</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="h-full">
            <div className="bg-white p-10 hover:bg-[#fafafa] transition-colors flex flex-col h-full">
              <Users className="text-[#888] mb-8" size={32} strokeWidth={1.5} />
              <h3 className="text-2xl font-sans font-medium mb-4 text-[#111]">A2A <span className="text-lg text-[#888] font-normal block mt-1">(Agent-to-Agent Protocol)</span></h3>
              <ul className="list-disc pl-6 flex flex-col gap-3 text-[#666] text-lg leading-relaxed marker:text-[#ccc]">
                <li className="pl-1">Allows multiple agents to communicate and delegate tasks</li>
                <li className="pl-1">Enables collaborative and distributed workflows</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} className="h-full">
            <div className="bg-white p-10 hover:bg-[#fafafa] transition-colors flex flex-col h-full">
              <CreditCard className="text-[#888] mb-8" size={32} strokeWidth={1.5} />
              <h3 className="text-2xl font-sans font-medium mb-4 text-[#111]">x402 <span className="text-lg text-[#888] font-normal block mt-1">Payment Protocol</span></h3>
              <ul className="list-disc pl-6 flex flex-col gap-3 text-[#666] text-lg leading-relaxed marker:text-[#ccc]">
                <li className="pl-1">Enables AI agents to make secure automated payments</li>
                <li className="pl-1">Supports blockchain-based API and service transactions</li>
              </ul>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <div 
            className="w-full border border-[#eee] bg-white p-4 lg:p-12 cursor-pointer hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center relative group"
            onClick={() => setIsImageOpen(true)}
          >
            <img 
              src="/7.png" 
              alt="Tools & Agent Protocols" 
              className="w-full max-w-5xl h-auto opacity-90 group-hover:opacity-100 transition-opacity"
            />
            <div className="absolute bg-[#111] text-white text-xs tracking-widest uppercase px-4 py-2 font-mono bottom-8 right-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
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
            src="/7.png" 
            alt="Tools & Agent Protocols" 
            className="max-w-full w-auto object-contain shadow-2xl cursor-default"
            style={{ height: '80vh' }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
