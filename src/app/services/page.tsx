import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageHero from '../../components/PageHero';
import PlaceholderSection from '../../components/PlaceholderSection';

export default function Services() {
  return (
    <div>
      <Header />
      <main>
        <PageHero
          label="Services"
          title="Engineering & Support Services"
          description="Installation, maintenance, and technical support for every machine we manufacture."
          image="https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=1920&auto=format&fit=crop"
        />
        <PlaceholderSection pageName="Services" />
      </main>
      <Footer />
    </div>
  );
}
