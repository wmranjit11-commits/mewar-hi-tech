import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageHero from '../../components/PageHero';
import ProductsSection from '../../components/ProductsSection';
import CTASection from '../../components/CTASection';

export default function Products() {
  return (
    <div>
      <Header />
      <main>
        <PageHero
          label="Our Products"
          title="Precision-Engineered Industrial Machinery"
          description="From primary crushers to complete conveyor systems, explore our full range of heavy-duty industrial equipment."
          image="https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=1920&auto=format&fit=crop"
        />
        <ProductsSection title="Complete Product Catalog" />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
