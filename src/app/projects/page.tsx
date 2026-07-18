import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import PlaceholderSection from "@/components/shared/PlaceholderSection";

export default function Projects() {
  return (
    <div>
      <Header />
      <main>
        <PageHero
          label="Our Work"
          title="Featured Projects"
          description="A showcase of our machinery deployed across major infrastructure and mining projects."
          image="/images/hero_crusher.png"
        />
        <PlaceholderSection pageName="Projects" />
      </main>
      <Footer />
    </div>
  );
}
