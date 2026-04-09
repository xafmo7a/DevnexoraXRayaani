import { useState, useRef } from "react";
import SiteHeader from "@/components/SiteHeader";
import HeroPage from "@/components/HeroPage";
import BuildingPage from "@/components/BuildingPage";
import AIALeadershipSection from "@/components/AIALeadershipSection";
import IntroSplash from "@/components/IntroSplash";


const Index = () => {
  const [carouselOpen, setCarouselOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-background">
      <IntroSplash />
      <SiteHeader
        onToggleCarousel={() => setCarouselOpen((p) => !p)}
        carouselOpen={carouselOpen}
        scrollRef={scrollRef}
      />
      <div ref={scrollRef} className="h-screen overflow-y-auto">
        <HeroPage />
        <BuildingPage />
        <AIALeadershipSection />
      </div>
      
    </div>
  );
};

export default Index;
