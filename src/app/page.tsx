import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ExploreMachinesSection from "@/components/home/ExploreMachinesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import SectorGrid from "@/components/home/SectorGrid";
import AboutTeaser from "@/components/home/AboutTeaser";
import FlagshipProductsGrid from "@/components/home/FlagshipProductsGrid";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <h1 className="sr-only">Keestrack - Heavy Duty Crushing &amp; Screening Equipment</h1>
        {/* 1. Hero: BUILT TO CRUSH. MADE TO LAST. */}
        <HeroSection />
        {/* 2. Explore Our Machines: 4 category cards */}
        <ExploreMachinesSection />
        {/* 3. Why Choose Us: 4 icon cards */}
        <WhyChooseUs />
        {/* 4. Find Your Perfect Machine + 3D Experience */}
        <SectorGrid />
        {/* 5. Our Impact: Stats + Catalog */}
        <AboutTeaser />
        {/* 6. Brochures & Documents: Download + Videos */}
        <FlagshipProductsGrid />
      </main>
      <Footer />
    </div>
  );
}
