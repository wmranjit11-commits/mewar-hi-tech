"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { ChevronDown, MessageSquare, Wrench, PackageSearch, Truck } from "lucide-react";
import BlobButton from "@/components/ui/BlobButton";
import Link from "next/link";

const FAQ_CATEGORIES = [
  {
    id: "general",
    icon: MessageSquare,
    title: "General Inquiries",
    faqs: [
      {
        question: "What types of equipment does Mewar Hitech manufacture?",
        answer: "We manufacture a wide range of heavy-duty crushing, screening, and size reduction equipment, including Double Toggle Jaw Crushers, Cone Crushers, Vertical Shaft Impactors (VSI), Vibrating Screens, and Sand Washers."
      },
      {
        question: "Is Mewar Hitech ISO certified?",
        answer: "Yes, Mewar Hitech Engineering Ltd is an ISO 9001:2008 certified company, committed to delivering high-quality and reliable industrial solutions."
      },
      {
        question: "Can I get a custom plant designed for my specific needs?",
        answer: "Absolutely. Our expert design team can tailor complete crushing and screening plants from 50 TPH to 500 TPH based on your specific feed size, required output, and material type."
      }
    ]
  },
  {
    id: "technical",
    icon: Wrench,
    title: "Technical Support",
    faqs: [
      {
        question: "Do you provide installation and commissioning services?",
        answer: "Yes, our certified field engineers provide complete on-site installation, structural alignment, and trial commissioning for all plants and heavy equipment."
      },
      {
        question: "What is your standard SLA for technical support?",
        answer: "We guarantee a 48-hour SLA response time for our service engineers to reach any site within India, and typically within a week globally."
      },
      {
        question: "Where can I find the manuals or specifications for my machine?",
        answer: "Detailed specifications are provided during delivery. For additional copies or technical manuals, you can contact our After-Sales support team directly."
      }
    ]
  },
  {
    id: "spares",
    icon: PackageSearch,
    title: "Spares & Maintenance",
    faqs: [
      {
        question: "Do you supply genuine spare parts for older models?",
        answer: "Yes, we maintain an extensive inventory of genuine spare parts including jaw plates, cone mantles, blow bars, and screens for both current and older models."
      },
      {
        question: "How do I order replacement wear parts?",
        answer: "You can order spare parts directly through our 'Spare Parts' section under the Services menu or by contacting our dedicated spares department at spares@kingsoncrusher.com."
      },
      {
        question: "Do you offer maintenance contracts?",
        answer: "We offer comprehensive Annual Maintenance Contracts (AMC) to ensure your equipment runs optimally with minimized downtime."
      }
    ]
  }
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(FAQ_CATEGORIES[0].id);
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="bg-background min-h-screen text-foreground select-none">
      <Header />

      <main>
        <PageHero
          label="Support & Help Center"
          title="FREQUENTLY ASKED QUESTIONS"
          description="Find quick answers to common questions about our machinery, spare parts, and after-sales support."
          image="/images/infrastructure-2.jpg"
        />

        <section className="py-16 bg-background relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Sidebar - Categories */}
              <div className="lg:col-span-4">
                <div className="bg-card border border-border/80 rounded-3xl p-6 shadow-sm sticky top-24 space-y-8">
                  
                  {/* Categories List */}
                  <div>
                    <h3 className="font-sans font-black text-xs uppercase tracking-widest text-primary mb-4 pl-2">
                      FAQ Categories
                    </h3>
                    <div className="space-y-2">
                      {FAQ_CATEGORIES.map((category) => {
                        const Icon = category.icon;
                        const isActive = activeCategory === category.id;
                        return (
                          <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`w-full flex items-center gap-3 p-4 rounded-2xl text-xs font-bold transition-all duration-300 ${
                              isActive
                                ? "bg-primary text-primary-foreground shadow-md"
                                : "bg-background text-muted-foreground hover:bg-muted/30 hover:text-foreground border border-border/60"
                            }`}
                          >
                            <Icon size={18} className={isActive ? "text-primary-foreground" : "text-primary"} />
                            <span>{category.title}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Quick Contact Section */}
                  <div className="pt-2 space-y-4 text-left">
                    <p className="text-xs text-muted-foreground font-semibold leading-relaxed px-2">
                      If you couldn't find the answer you're looking for, feel free to contact our dedicated support team directly.
                    </p>
                    <Link href="/contact" className="block pt-2">
                      <BlobButton variant="secondary" className="!py-3 !px-5 text-xs w-full flex justify-center uppercase tracking-wider">
                        <span>Contact Support</span>
                      </BlobButton>
                    </Link>
                  </div>

                </div>
              </div>

              {/* Right Content - Accordion */}
              <div className="lg:col-span-8 space-y-4">
                <AnimatePresence mode="wait">
                  {FAQ_CATEGORIES.map((category) => (
                    category.id === activeCategory && (
                      <motion.div
                        key={category.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <h2 className="common-heading text-2xl font-black text-foreground uppercase mb-6 pl-2">
                          {category.title}
                        </h2>

                        {category.faqs.map((faq, idx) => {
                          const faqId = `${category.id}-${idx}`;
                          const isOpen = openFaqId === faqId;

                          return (
                            <div 
                              key={faqId} 
                              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                                isOpen ? "bg-card border-primary/40 shadow-sm" : "bg-background border-border/60 hover:border-primary/20"
                              }`}
                            >
                              <button
                                onClick={() => toggleFaq(faqId)}
                                className="w-full flex items-center justify-between p-5 text-left"
                              >
                                <span className="font-bold text-sm text-foreground pr-8">
                                  {faq.question}
                                </span>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                                  isOpen ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                                }`}>
                                  <ChevronDown 
                                    size={16} 
                                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} 
                                  />
                                </div>
                              </button>
                              
                              <AnimatePresence>
                                {isOpen && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                  >
                                    <div className="px-5 pb-5 pt-1 text-sm text-muted-foreground font-semibold leading-relaxed border-t border-border/30 mx-5">
                                      {faq.answer}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
