import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageHero from '../../components/PageHero';
import PlaceholderSection from '../../components/PlaceholderSection';

export default function Projects() {
  return (
    <div>
      <Header />
      <main>
        <PageHero
          label="Our Work"
          title="Featured Projects"
          description="A showcase of our machinery deployed across major infrastructure and mining projects."
          image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1920&auto=format&fit=crop"
        />
        <PlaceholderSection pageName="Projects" />
      </main>
      <Footer />
    </div>
  );
}
