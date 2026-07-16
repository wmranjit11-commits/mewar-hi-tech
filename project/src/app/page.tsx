import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import SectorGrid from '../components/SectorGrid';
import ExploreMachinesSection from '../components/ExploreMachinesSection';
import AboutTeaser from '../components/AboutTeaser';
import ClientLogosMarquee from '../components/ClientLogosMarquee';
import FlagshipProductsGrid from '../components/FlagshipProductsGrid';
import YellowDealerBanner from '../components/YellowDealerBanner';
import RevolutionBanner from '../components/RevolutionBanner';
import WhyChooseUs from '../components/WhyChooseUs';
import ServiceNetworkBanner from '../components/ServiceNetworkBanner';
import InsightsPublicationsSection from '../components/InsightsPublicationsSection';
import ContactSignupBox from '../components/ContactSignupBox';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <h1 className="sr-only">Mewar Hi-Tech - Industrial Machinery Manufacturer</h1>
        <HeroSection />
        <SectorGrid />
        <ExploreMachinesSection />
        <AboutTeaser />
        <ClientLogosMarquee />
        <FlagshipProductsGrid />
        <YellowDealerBanner />
        <RevolutionBanner />
        <WhyChooseUs />
        <ServiceNetworkBanner />
        <InsightsPublicationsSection />
        <ContactSignupBox />
      </main>
      <Footer />
    </div>
  );
}
