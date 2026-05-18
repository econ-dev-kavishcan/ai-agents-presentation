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
              <p className="text-xs font-mono tracking-[0.2em] uppercase text-text-tertiary mb-8">
                [ 02 ] Comparison
              </p>
              <h2 className="text-[3.5rem] leading-none tracking-[-0.03em] font-serif">
                The Core<br />
                <span className="italic text-text-tertiary">Shift</span>
              </h2>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-16 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border-strong text-text-primary">
                  <th className="py-4 pr-6 font-semibold text-sm tracking-wide">Capability</th>
                  <th className="py-4 px-6 font-semibold text-sm tracking-wide">Traditional Framework</th>
                  <th className="py-4 pl-6 font-semibold text-sm tracking-wide">Agent Framework</th>
                </tr>
              </thead>
              <tbody className="text-base font-sans text-text-secondary">
                <tr className="border-b border-border-subtle">
                  <td className="py-6 pr-6 font-semibold text-text-primary">Architecture</td>
                  <td className="py-6 px-6">
                    <button
                      onClick={() => setActiveImage('/2.png')}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border-subtle hover:border-border-strong hover:bg-surface-hover transition-colors rounded-full"
                    >
                      <Eye size={16} /> View Architecture
                    </button>
                  </td>
                  <td className="py-6 pl-6">
                    <button
                      onClick={() => setActiveImage('/3.png')}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border-subtle hover:border-border-strong hover:bg-surface-hover transition-colors rounded-full"
                    >
                      <Eye size={16} /> View Architecture
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-border-subtle">
                  <td className="py-6 pr-6 font-semibold text-text-primary">Control flow</td>
                  <td className="py-6 px-6">Developer-defined routes and conditionals</td>
                  <td className="py-6 pl-6">LLM decides dynamically at runtime</td>
                </tr>
                <tr className="border-b border-border-subtle">
                  <td className="py-6 pr-6 font-semibold text-text-primary">Tool orchestration</td>
                  <td className="py-6 px-6">Static API integrations, fixed endpoints</td>
                  <td className="py-6 pl-6">Dynamic tool selection based on reasoning</td>
                </tr>
                <tr className="border-b border-border-subtle">
                  <td className="py-6 pr-6 font-semibold text-text-primary">Memory management</td>
                  <td className="py-6 px-6">Database/session storage (developer-managed)</td>
                  <td className="py-6 pl-6">Built-in conversational and long-term memory</td>
                </tr>
                <tr className="border-b border-border-subtle">
                  <td className="py-6 pr-6 font-semibold text-text-primary">LLM integration</td>
                  <td className="py-6 px-6">Not applicable</td>
                  <td className="py-6 pl-6">Native support for model reasoning and planning</td>
                </tr>
                <tr className="border-b border-border-subtle">
                  <td className="py-6 pr-6 font-semibold text-text-primary">Behavior modification</td>
                  <td className="py-6 px-6">Code changes and redeployment</td>
                  <td className="py-6 pl-6">Plain-English instruction changes at runtime</td>
                </tr>
                <tr className="border-b border-border-subtle">
                  <td className="py-6 pr-6 font-semibold text-text-primary">Multi-agent coordination</td>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-background/90 backdrop-blur-md">
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 md:top-8 md:right-8 p-3 text-text-secondary hover:text-text-primary bg-surface border border-border-subtle rounded-full shadow-lg z-[60] flex items-center justify-center"
          >
            <X size={24} />
          </button>

          <div className="relative w-full max-w-5xl h-[80vh] bg-surface border border-border-strong rounded-xl shadow-2xl flex items-center justify-center overflow-hidden p-4">
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
