"use client";

import React from 'react';
import { FadeIn } from './FadeIn';
import { CircleDollarSign, Zap } from 'lucide-react';

export const ProductionReadinessSection = () => {
  const tableData = [
    { pattern: 'Error handling', whatItDoes: 'Catch tool failures gracefully', pillar: 'Reliability' },
    { pattern: 'Retry with backoff', whatItDoes: 'Handle transient failures', pillar: 'Reliability' },
    { pattern: 'Timeout management', whatItDoes: 'Prevent infinite loops', pillar: 'Reliability' },
    { pattern: 'Observability', whatItDoes: 'Understand agent behavior', pillar: 'Operational Excellence' },
    { pattern: 'Human-in-the-loop', whatItDoes: 'Safety net for high-stakes actions', pillar: 'Security' },
    { pattern: 'Guardrails', whatItDoes: 'Prevent harmful or off-topic outputs', pillar: 'Security' },
    { pattern: 'Cost controls', whatItDoes: 'Manage inference spend', pillar: 'Cost Optimization' },
  ];

  return (
    <section className="py-32 bg-[#FBFBFA]">
      <div className="w-full max-w-6xl mx-auto px-8 lg:px-16">
        <FadeIn>
          <div className="mb-24">
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-[#888] mb-8">
              [ 17 ] Production
            </p>
            <h2 className="text-[3.5rem] lg:text-[5rem] leading-[1] tracking-[-0.03em] font-serif max-w-4xl text-[#111]">
              Production Readiness<br />
              <span className="italic text-[#666]">Patterns</span>
            </h2>
          </div>
        </FadeIn>

        {/* Table Section */}
        <FadeIn delay={0.2}>
          <div className="mb-24 overflow-x-auto bg-white border border-[#e5e5e5] p-2 lg:p-8">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b-2 border-[#111]">
                  <th className="py-6 px-4 font-sans font-medium text-[#111] text-lg w-[30%]">Pattern</th>
                  <th className="py-6 px-4 font-sans font-medium text-[#111] text-lg w-[45%]">What It Does</th>
                  <th className="py-6 px-4 font-sans font-medium text-[#111] text-lg w-[25%]">Well-Architected Pillar</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, idx) => (
                  <tr key={idx} className="border-b border-[#e5e5e5] hover:bg-[#fafafa] transition-colors">
                    <td className="py-6 px-4 font-sans font-medium text-[#111]">{row.pattern}</td>
                    <td className="py-6 px-4 font-serif text-[#666] text-lg">{row.whatItDoes}</td>
                    <td className="py-6 px-4 font-sans text-[#888]">{row.pillar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e5e5e5] border border-[#e5e5e5]">
          <FadeIn delay={0.3} className="h-full">
            <div className="bg-white p-10 hover:bg-[#fafafa] transition-colors flex flex-col h-full">
              <CircleDollarSign className="text-[#888] mb-8" size={32} strokeWidth={1.5} />
              <h3 className="text-2xl font-sans font-medium mb-4 text-[#111]">Cost Optimization</h3>
              <ul className="list-disc pl-6 flex flex-col gap-3 text-[#666] text-lg leading-relaxed marker:text-[#ccc]">
                <li className="pl-1">Use smaller models for simple tasks</li>
                <li className="pl-1">Reserve powerful models for complex reasoning</li>
                <li className="pl-1">Monitor token usage and inference costs</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} className="h-full">
            <div className="bg-white p-10 hover:bg-[#fafafa] transition-colors flex flex-col h-full">
              <Zap className="text-[#888] mb-8" size={32} strokeWidth={1.5} />
              <h3 className="text-2xl font-sans font-medium mb-4 text-[#111]">Performance Efficiency</h3>
              <ul className="list-disc pl-6 flex flex-col gap-3 text-[#666] text-lg leading-relaxed marker:text-[#ccc]">
                <li className="pl-1">Use streaming responses for lower latency</li>
                <li className="pl-1">Apply batch inference for large-scale workloads</li>
                <li className="pl-1">Optimize throughput for production systems</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
