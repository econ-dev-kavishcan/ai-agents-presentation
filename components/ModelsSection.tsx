import React from 'react';
import { FadeIn } from './FadeIn';

export const ModelsSection = () => {
  return (
    <section className="py-32 bg-[#F3F3F1]">
      <div className="w-full max-w-6xl mx-auto px-8 lg:px-16">
        <FadeIn>
          <div className="text-center mb-24">
            <p className="text-sm font-mono tracking-[0.2em] uppercase text-[#888] mb-6">
              [ 13 ] Infrastructure
            </p>
            <h2 className="text-[3.5rem] lg:text-[4.5rem] leading-none tracking-[-0.03em] font-serif">
              Models &amp; Memory
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border-subtle">
          
          <div className="bg-[#F3F3F1] p-12 lg:p-16">
            <FadeIn delay={0.1}>
              <h3 className="text-4xl font-serif mb-8 border-b border-[#333] inline-block pb-2">Memory Architecture</h3>
              <div className="space-y-12 mt-12">
                <div>
                  <h4 className="text-base font-sans tracking-widest uppercase text-[#111] mb-3">01. Short-Term</h4>
                  <p className="text-xl text-[#666]">Keeps track of current tasks and conversation utilizing extreme summarization to avoid context window overload.</p>
                </div>
                <div>
                  <h4 className="text-base font-sans tracking-widest uppercase text-[#111] mb-3">02. Long-Term</h4>
                  <p className="text-xl text-[#666]">Stores knowledge natively across sessions using dedicated Vector Databases for precise semantic retrieval.</p>
                </div>
                <div>
                  <h4 className="text-base font-sans tracking-widest uppercase text-[#111] mb-3">03. Large Context</h4>
                  <p className="text-xl text-[#666]">Modern frontier models effortlessly process upwards of 200K+ tokens natively in a single pass.</p>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="bg-white p-12 lg:p-16">
            <FadeIn delay={0.2}>
              <h3 className="text-4xl font-serif mb-8 border-b border-[#333] inline-block pb-2">Model Strategy</h3>
              <div className="space-y-12 mt-12">
                <div>
                  <h4 className="text-base font-sans tracking-widest uppercase text-[#111] mb-3">A. Frontier Models</h4>
                  <p className="text-xl text-[#666]">Highly advanced reasoning and native tool-use capabilities out-of-the-box (e.g. Claude).</p>
                </div>
                <div>
                  <h4 className="text-base font-sans tracking-widest uppercase text-[#111] mb-3">B. Local Models</h4>
                  <p className="text-xl text-[#666]">Executed privately for cost savings. These mandate strict error handling algorithms and timeouts.</p>
                </div>
                <div>
                  <h4 className="text-base font-sans tracking-widest uppercase text-[#111] mb-3">C. Multi-Model</h4>
                  <p className="text-xl text-[#666]">Combines text, high-resolution vision, and specialized embeddings tailored for precise granular tasks.</p>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};
