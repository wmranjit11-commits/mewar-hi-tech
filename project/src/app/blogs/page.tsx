import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageHero from '../../components/PageHero';
import PlaceholderSection from '../../components/PlaceholderSection';

export default function Blogs() {
  return (
    <div>
      <Header />
      <main>
        <PageHero
          label="Insights"
          title="Latest News & Articles"
          description="Industry insights, product updates, and engineering perspectives from Mewar Hi-Tech."
          image="https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=1920&auto=format&fit=crop"
        />
        <PlaceholderSection pageName="Blogs" />
      </main>
      <Footer />
    </div>
  );
}
