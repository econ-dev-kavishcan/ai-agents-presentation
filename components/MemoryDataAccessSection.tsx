"use client";

import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { Clock, Database, Maximize2, X } from 'lucide-react';

export const MemoryDataAccessSection = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <section className="py-32 bg-[#FBFBFA]">
      <div className="w-full max-w-6xl mx-auto px-8 lg:px-16">
        <FadeIn>
          <div className="mb-24">
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-[#888] mb-8">
              [ 11 ] Memory
            </p>
            <h2 className="text-[3.5rem] lg:text-[5rem] leading-[1] tracking-[-0.03em] font-serif max-w-4xl text-[#111]">
              Memory &amp;<br />
              <span className="italic text-[#666]">Data Access</span>
            </h2>
            <div className="mt-12 border-l border-[#333] pl-6 max-w-4xl">
              <p className="text-2xl leading-relaxed font-serif text-[#444]">
                How Agents Remember Information
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#e5e5e5] border border-[#e5e5e5] mb-24">
          <FadeIn delay={0.1} className="h-full">
            <div className="bg-white p-10 hover:bg-[#fafafa] transition-colors flex flex-col h-full">
              <Clock className="text-[#888] mb-8" size={32} strokeWidth={1.5} />
              <h3 className="text-2xl font-sans font-medium mb-4 text-[#111]">Short-Term Memory</h3>
              <ul className="list-disc pl-6 flex flex-col gap-3 text-[#666] text-lg leading-relaxed marker:text-[#ccc]">
                <li className="pl-1">Keeps track of the current conversation and ongoing tasks</li>
                <li className="pl-1">Uses summarization and context windows to avoid memory overload</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="h-full">
            <div className="bg-white p-10 hover:bg-[#fafafa] transition-colors flex flex-col h-full">
              <Database className="text-[#888] mb-8" size={32} strokeWidth={1.5} />
              <h3 className="text-2xl font-sans font-medium mb-4 text-[#111]">Long-Term Memory</h3>
              <ul className="list-disc pl-6 flex flex-col gap-3 text-[#666] text-lg leading-relaxed marker:text-[#ccc]">
                <li className="pl-1">Stores knowledge across multiple sessions</li>
                <li className="pl-1">Uses vector databases for semantic search and retrieval</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} className="h-full">
            <div className="bg-white p-10 hover:bg-[#fafafa] transition-colors flex flex-col h-full">
              <Maximize2 className="text-[#888] mb-8" size={32} strokeWidth={1.5} />
              <h3 className="text-2xl font-sans font-medium mb-4 text-[#111]">Large Context Windows</h3>
              <ul className="list-disc pl-6 flex flex-col gap-3 text-[#666] text-lg leading-relaxed marker:text-[#ccc]">
                <li className="pl-1">Anthropic Claude can process up to <strong className="text-[#111] font-medium">200K+ tokens</strong> of context</li>
                <li className="pl-1">Sub-agents help manage tasks that exceed context limits</li>
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
              src="/6.png"
              alt="Memory & Data Access"
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
            src="/6.png"
            alt="Memory & Data Access"
            className="max-w-full w-auto object-contain shadow-2xl cursor-default"
            style={{ height: '80vh' }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
