import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import IndustriesGrid from "@/components/shared/IndustriesGrid";
import PlaceholderSection from "@/components/shared/PlaceholderSection";

export default function Industries() {
  return (
    <div>
      <Header />
      <main>
        <PageHero
          label="Industries"
          title="Sectors We Power"
          description="Our machinery serves critical industries across mining, construction, energy, and infrastructure."
          image="/images/backgorund.webp"
        />
        <IndustriesGrid />
        <PlaceholderSection pageName="Industries" />
      </main>
      <Footer />
    </div>
  );
}
