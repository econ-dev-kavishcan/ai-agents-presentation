"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Eye, X } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const ParadigmShiftSection = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section className="py-32">
      <div className="w-full max-w-6xl mx-auto px-8 lg:px-16 relative">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
            <div className="lg:col-span-12">
              <p className="text-sm font-mono tracking-[0.2em] uppercase text-[#888] mb-8">
                [ 02 ] Comparison
              </p>
              <h2 className="text-[3.5rem] leading-none tracking-[-0.03em] font-serif">
                The Core<br />
                <span className="italic text-[#888]">Shift</span>
              </h2>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-16 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#333] text-[#111]">
                  <th className="py-4 pr-6 font-semibold text-base tracking-wide">Capability</th>
                  <th className="py-4 px-6 font-semibold text-base tracking-wide">Traditional Framework</th>
                  <th className="py-4 pl-6 font-semibold text-base tracking-wide">Agent Framework</th>
                </tr>
              </thead>
              <tbody className="text-lg font-sans text-[#666]">
                <tr className="border-b border-[#e5e5e5]">
                  <td className="py-6 pr-6 font-semibold text-[#111]">Architecture</td>
                  <td className="py-6 px-6">
                    <button
                      onClick={() => setActiveImage('/2.png')}
                      className="flex items-center gap-2 px-4 py-2 text-base font-medium border border-[#e5e5e5] hover:border-[#333] hover:bg-white-hover transition-colors rounded-full"
                    >
                      <Eye size={16} /> View Architecture
                    </button>
                  </td>
                  <td className="py-6 pl-6">
                    <button
                      onClick={() => setActiveImage('/3.png')}
                      className="flex items-center gap-2 px-4 py-2 text-base font-medium border border-[#e5e5e5] hover:border-[#333] hover:bg-white-hover transition-colors rounded-full"
                    >
                      <Eye size={16} /> View Architecture
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-[#e5e5e5]">
                  <td className="py-6 pr-6 font-semibold text-[#111]">Control flow</td>
                  <td className="py-6 px-6">Developer-defined routes and conditionals</td>
                  <td className="py-6 pl-6">LLM decides dynamically at runtime</td>
                </tr>
                <tr className="border-b border-[#e5e5e5]">
                  <td className="py-6 pr-6 font-semibold text-[#111]">Tool orchestration</td>
                  <td className="py-6 px-6">Static API integrations, fixed endpoints</td>
                  <td className="py-6 pl-6">Dynamic tool selection based on reasoning</td>
                </tr>
                <tr className="border-b border-[#e5e5e5]">
                  <td className="py-6 pr-6 font-semibold text-[#111]">Memory management</td>
                  <td className="py-6 px-6">Database/session storage (developer-managed)</td>
                  <td className="py-6 pl-6">Built-in conversational and long-term memory</td>
                </tr>
                <tr className="border-b border-[#e5e5e5]">
                  <td className="py-6 pr-6 font-semibold text-[#111]">LLM integration</td>
                  <td className="py-6 px-6">Not applicable</td>
                  <td className="py-6 pl-6">Native support for model reasoning and planning</td>
                </tr>
                <tr className="border-b border-[#e5e5e5]">
                  <td className="py-6 pr-6 font-semibold text-[#111]">Behavior modification</td>
                  <td className="py-6 px-6">Code changes and redeployment</td>
                  <td className="py-6 pl-6">Plain-English instruction changes at runtime</td>
                </tr>
                <tr className="border-b border-[#e5e5e5]">
                  <td className="py-6 pr-6 font-semibold text-[#111]">Multi-agent coordination</td>
                  <td className="py-6 px-6">Microservice orchestration (developer-designed)</td>
                  <td className="py-6 pl-6">Framework-managed agent collaboration</td>
                </tr>
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>

      {/* Image Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-canvas/90 backdrop-blur-md">
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 md:top-8 md:right-8 p-3 text-[#666] hover:text-[#111] bg-white border border-[#e5e5e5] rounded-full shadow-lg z-60 flex items-center justify-center"
          >
            <X size={24} />
          </button>

          <div className="relative w-full max-w-5xl h-[80vh] bg-white border border-[#333] rounded-xl shadow-2xl flex items-center justify-center overflow-hidden p-4">
            <Image
              src={activeImage}
              alt="Architecture Diagram Enlarged"
              fill
              className="object-contain p-4"
            />
          </div>
        </div>
      )}
    </section>
  );
};
