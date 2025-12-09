import { useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { TimelineCarousel } from "./components/TimelineCarousel";
import { FeaturedMoments } from "./components/FeaturedMoments";
import { CharacterEncounter } from "./components/CharacterEncounter";
import { Footer } from "./components/Footer";
import { FloatingNav } from "./components/FloatingNav";
import { YearSelector } from "./components/YearSelector";
import { EncounterInterface } from "./components/EncounterInterface";
import { AncientTransition } from "./components/transitions/AncientTransition";
import { MedievalTransition } from "./components/transitions/MedievalTransition";
import { IndustrialTransition } from "./components/transitions/IndustrialTransition";
import { ModernTransition } from "./components/transitions/ModernTransition";
import { FutureTransition } from "./components/transitions/FutureTransition";
import { PyramidsTransition } from "./components/transitions/PyramidsTransition";
import { SpaceTransition } from "./components/transitions/SpaceTransition";
import { DimensionsTransition } from "./components/transitions/DimensionsTransition";
import { MedievalMomentTransition } from "./components/transitions/MedievalMomentTransition";
import { EraAncient } from "./components/eras/EraAncient";
import { EraMedieval } from "./components/eras/EraMedieval";
import { EraIndustrial } from "./components/eras/EraIndustrial";
import { EraModern } from "./components/eras/EraModern";
import { EraFuture } from "./components/eras/EraFuture";
import { MomentPyramids } from "./components/moments/MomentPyramids";
import { MomentSpace } from "./components/moments/MomentSpace";
import { MomentDimensions } from "./components/moments/MomentDimensions";
import { MomentMedieval } from "./components/moments/MomentMedieval";

type View = "landing" | "yearSelector" | "encounter" | "transition" | "era" | "momentTransition" | "moment";
type EraId = "ancient" | "medieval" | "industrial" | "modern" | "future";
type MomentId = "pyramids" | "space" | "nebula" | "castle";

export default function App() {
  const [currentView, setCurrentView] = useState<View>("landing");
  const [selectedEra, setSelectedEra] = useState<EraId | null>(null);
  const [selectedMoment, setSelectedMoment] = useState<MomentId | null>(null);

  const handleEraClick = (eraId: string) => {
    setSelectedEra(eraId as EraId);
    setCurrentView("transition");
  };

  const handleTransitionComplete = () => {
    setCurrentView("era");
  };

  const handleMomentClick = (momentId: string) => {
    setSelectedMoment(momentId as MomentId);
    setCurrentView("momentTransition");
  };

  const handleMomentTransitionComplete = () => {
    setCurrentView("moment");
  };

  const handleEnterPortal = () => {
    setCurrentView("yearSelector");
  };

  const handleYearConfirm = (eraId: string) => {
    setSelectedEra(eraId as EraId);
    setCurrentView("transition");
  };

  const handleStartEncounter = () => {
    setCurrentView("encounter");
  };

  const handleBackToTimeline = () => {
    setCurrentView("landing");
    setSelectedEra(null);
    setSelectedMoment(null);
  };

  const handleCloseYearSelector = () => {
    setCurrentView("landing");
  };

  // Render transition based on selected era
  const renderTransition = () => {
    if (!selectedEra) return null;

    switch (selectedEra) {
      case "ancient":
        return <AncientTransition onComplete={handleTransitionComplete} />;
      case "medieval":
        return <MedievalTransition onComplete={handleTransitionComplete} />;
      case "industrial":
        return <IndustrialTransition onComplete={handleTransitionComplete} />;
      case "modern":
        return <ModernTransition onComplete={handleTransitionComplete} />;
      case "future":
        return <FutureTransition onComplete={handleTransitionComplete} />;
      default:
        return null;
    }
  };

  // Render era detail page based on selected era
  const renderEraPage = () => {
    if (!selectedEra) return null;

    switch (selectedEra) {
      case "ancient":
        return <EraAncient onBack={handleBackToTimeline} />;
      case "medieval":
        return <EraMedieval onBack={handleBackToTimeline} />;
      case "industrial":
        return <EraIndustrial onBack={handleBackToTimeline} />;
      case "modern":
        return <EraModern onBack={handleBackToTimeline} />;
      case "future":
        return <EraFuture onBack={handleBackToTimeline} />;
      default:
        return null;
    }
  };

  // Render moment transition based on selected moment
  const renderMomentTransition = () => {
    if (!selectedMoment) return null;

    switch (selectedMoment) {
      case "pyramids":
        return <PyramidsTransition onComplete={handleMomentTransitionComplete} />;
      case "space":
        return <SpaceTransition onComplete={handleMomentTransitionComplete} />;
      case "nebula":
        return <DimensionsTransition onComplete={handleMomentTransitionComplete} />;
      case "castle":
        return <MedievalMomentTransition onComplete={handleMomentTransitionComplete} />;
      default:
        return null;
    }
  };

  // Render moment detail page based on selected moment
  const renderMomentPage = () => {
    if (!selectedMoment) return null;

    switch (selectedMoment) {
      case "pyramids":
        return <MomentPyramids onBack={handleBackToTimeline} />;
      case "space":
        return <MomentSpace onBack={handleBackToTimeline} />;
      case "nebula":
        return <MomentDimensions onBack={handleBackToTimeline} />;
      case "castle":
        return <MomentMedieval onBack={handleBackToTimeline} />;
      default:
        return null;
    }
  };

  // Show transition
  if (currentView === "transition") {
    return renderTransition();
  }

  // Show era detail page
  if (currentView === "era") {
    return renderEraPage();
  }

  // Show moment transition
  if (currentView === "momentTransition") {
    return renderMomentTransition();
  }

  // Show moment detail page
  if (currentView === "moment") {
    return renderMomentPage();
  }

  // Show encounter interface
  if (currentView === "encounter") {
    return <EncounterInterface onBack={handleBackToTimeline} />;
  }

  return (
    <div className="relative min-h-screen">
      {/* Background Noise Texture */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')]" />
      
      {/* Floating Navigation */}
      <FloatingNav />

      {/* Main Content */}
      <main>
        <div id="hero">
          <HeroSection onEnterPortal={handleEnterPortal} />
        </div>
        
        <div id="timeline">
          <TimelineCarousel onEraClick={handleEraClick} />
        </div>
        
        <div id="moments">
          <FeaturedMoments onMomentClick={handleMomentClick} />
        </div>
        
        <div id="encounters">
          <CharacterEncounter onStartEncounter={handleStartEncounter} />
        </div>
        
        <Footer />
      </main>

      {/* Ambient Light Effects */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      {/* Year Selector Modal */}
      {currentView === "yearSelector" && (
        <YearSelector 
          onClose={handleCloseYearSelector}
          onConfirm={handleYearConfirm}
        />
      )}
    </div>
  );
}