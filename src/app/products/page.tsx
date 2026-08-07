import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import ProductsSection from "@/components/shared/ProductsSection";
import CTASection from "@/components/shared/CTASection";

export default function Products() {
  return (
    <div>
      <Header />
      <main>
        <PageHero
          label="Our Products"
          title="Precision-Engineered Industrial Machinery"
          description="From primary crushers to complete conveyor systems, explore our full range of heavy-duty industrial equipment."
          image="/images/backgorund.webp"
        />
        <ProductsSection title="Complete Product Catalog" />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
