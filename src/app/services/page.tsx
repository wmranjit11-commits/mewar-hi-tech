import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import PlaceholderSection from "@/components/shared/PlaceholderSection";

export default function Services() {
  return (
    <div>
      <Header />
      <main>
        <PageHero
          label="Services"
          title="Engineering &amp; Support Services"
          description="Installation, maintenance, and technical support for every machine we manufacture."
          image="/images/hero_crusher.png"
        />
        <PlaceholderSection pageName="Services" />
      </main>
      <Footer />
    </div>
  );
}
