import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ClientLogosMarquee from "@/components/home/ClientLogosMarquee";
import WelcomeTeaser from "@/components/home/WelcomeTeaser";
import WhyKingsonSection from "@/components/home/WhyKingsonSection";
import ExploreMachinesSection from "@/components/home/ExploreMachinesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import SectorGrid from "@/components/home/SectorGrid";
import VideoShowcase from "@/components/home/VideoShowcase";
import LatestProjects from "@/components/home/LatestProjects";
import ExportProjects from "@/components/home/ExportProjects";
import TeamSection from "@/components/home/TeamSection";
import AboutTeaser from "@/components/home/AboutTeaser";
import FlagshipProductsGrid from "@/components/home/FlagshipProductsGrid";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <h1 className="sr-only">Mewar Hi-Tech - Heavy Duty Crushing &amp; Screening Equipment</h1>
        
        {/* 1. Hero: BUILT TO CRUSH. MADE TO LAST. */}
        <HeroSection />

        {/* 2. Client Partner Logos Marquee */}
        <ClientLogosMarquee />

        {/* 3. Welcome Teaser: copy and stacked index image collage */}
        <WelcomeTeaser />

        {/* 4. Why Kingson: Machinery, Infrastructure, Project cards */}
        <WhyKingsonSection />

        {/* 5. Explore Our Machines: 4 category cards */}
        <ExploreMachinesSection />

        {/* 6. Why Choose Us: 4 icon cards */}
        <WhyChooseUs />

        {/* 7. Find Your Perfect Machine + 3D Experience */}
        <SectorGrid />

        {/* 8. Video Showcase: looping home-page.mp4 & fullscreen playback */}
        <VideoShowcase />

        {/* 9. Latest Projects: 8-image grid with lightbox modal */}
        <LatestProjects />

        {/* 10. Export Projects (Tanzania): 8-image grid with lightbox modal */}
        <ExportProjects />

        {/* 11. Management Team: executive leadership profiles */}
        <TeamSection />

        {/* 12. Our Impact: Stats + Catalog */}
        <AboutTeaser />

        {/* 13. Brochures & Documents: Download + Videos */}
        <FlagshipProductsGrid />
      </main>
      <Footer />
    </div>
  );
}
