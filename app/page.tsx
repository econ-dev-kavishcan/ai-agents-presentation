"use client";

import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ReactPatternSection } from '../components/ReactPatternSection';
import { WhatIsFrameworkSection } from '../components/WhatIsFrameworkSection';
import { ParadigmShiftSection } from '../components/ParadigmShiftSection';
import { AnatomySection } from '../components/AnatomySection';
import { LayersSection } from '../components/LayersSection';
import { ReasoningLayerSection } from '../components/ReasoningLayerSection';
import { OrchestrationLayerSection } from '../components/OrchestrationLayerSection';
import { ToolLayerSection } from '../components/ToolLayerSection';
import { AgentLoopSection } from '../components/AgentLoopSection';
import { ExternalSystemsSection } from '../components/ExternalSystemsSection';
import { MemoryDataAccessSection } from '../components/MemoryDataAccessSection';
import { ToolsAgentProtocolsSection } from '../components/ToolsAgentProtocolsSection';
import { ModelsAgenticSystemsSection } from '../components/ModelsAgenticSystemsSection';
import { FutureProofSection } from '../components/FutureProofSection';
import { ModularDesignPatternsSection } from '../components/ModularDesignPatternsSection';
import { AbstractionLayersSection } from '../components/AbstractionLayersSection';
import { ProductionReadinessSection } from '../components/ProductionReadinessSection';
import { SingleAgentArchitectureSection } from '../components/SingleAgentArchitectureSection';
import { RouterArchitectureSection } from '../components/RouterArchitectureSection';
import { ThankYouSection } from '../components/ThankYouSection';

export default function Home() {
  return (
    <>
      <div className="bg-noise" />
      <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none -z-10 bg-grid-pattern" />
      <main className="relative z-10">
        <HeroSection />
        <ReactPatternSection />
        <ParadigmShiftSection />
        <WhatIsFrameworkSection />
        <AnatomySection />
        <LayersSection />
        <ReasoningLayerSection />
        <OrchestrationLayerSection />
        <ToolLayerSection />
        <AgentLoopSection />
        <ExternalSystemsSection />
        <MemoryDataAccessSection />
        <ToolsAgentProtocolsSection />
        <ModelsAgenticSystemsSection />
        <FutureProofSection />
        <ModularDesignPatternsSection />
        <AbstractionLayersSection />
        <ProductionReadinessSection />
        <SingleAgentArchitectureSection />
        <RouterArchitectureSection />
        <ThankYouSection />
      </main>
    </>
  );
}
