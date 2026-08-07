import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import PlaceholderSection from "@/components/shared/PlaceholderSection";

export default function Blogs() {
  return (
    <div>
      <Header />
      <main>
        <PageHero
          label="Insights"
          title="Latest News &amp; Articles"
          description="Industry insights, product updates, and engineering perspectives from Keestrack."
          image="/images/backgorund.webp"
        />
        <PlaceholderSection pageName="Blogs" />
      </main>
      <Footer />
    </div>
  );
}
