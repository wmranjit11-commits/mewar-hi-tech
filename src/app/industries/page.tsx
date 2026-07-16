import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageHero from '../../components/PageHero';
import IndustriesGrid from '../../components/IndustriesGrid';
import PlaceholderSection from '../../components/PlaceholderSection';

export default function Industries() {
  return (
    <div>
      <Header />
      <main>
        <PageHero
          label="Industries"
          title="Sectors We Power"
          description="Our machinery serves critical industries across mining, construction, energy, and infrastructure."
          image="https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=1920&auto=format&fit=crop"
        />
        <IndustriesGrid />
        <PlaceholderSection pageName="Industries" />
      </main>
      <Footer />
    </div>
  );
}
