import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageHero from '../../components/PageHero';
import PlaceholderSection from '../../components/PlaceholderSection';

export default function Gallery() {
  return (
    <div>
      <Header />
      <main>
        <PageHero
          label="Gallery"
          title="Our Work in Action"
          description="A visual archive of manufacturing, installations, and machinery in the field."
          image="https://images.unsplash.com/photo-1476242906366-d8eb64c2f661?q=80&w=1920&auto=format&fit=crop"
        />
        <PlaceholderSection pageName="Gallery" />
      </main>
      <Footer />
    </div>
  );
}
