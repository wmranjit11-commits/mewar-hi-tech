import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import PlaceholderSection from "@/components/shared/PlaceholderSection";

export default function Gallery() {
  return (
    <div>
      <Header />
      <main>
        <PageHero
          label="Gallery"
          title="Our Work in Action"
          description="A visual archive of manufacturing, installations, and machinery in the field."
          image="/images/hero_crusher.png"
        />
        <PlaceholderSection pageName="Gallery" />
      </main>
      <Footer />
    </div>
  );
}
