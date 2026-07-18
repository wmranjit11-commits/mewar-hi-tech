"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import { Mail, Phone, MapPin } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import BlobButton from "@/components/ui/BlobButton";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Your message has been sent. Our team will contact you shortly.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="bg-background min-h-screen text-foreground select-none">
      <Header />
      <main>
        <PageHero
          label="Contact Us"
          title="Let's Build Something Strong Together"
          description="Reach out for product inquiries, quotes, or technical support from our engineering team."
          image="/images/hero_crusher.png"
        />

        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
                <MapPin size={22} className="text-primary shrink-0" />
                <div>
                  <h2 className="font-heading font-black text-foreground uppercase text-sm">Address</h2>
                  <p className="text-muted-foreground text-xs mt-1 font-semibold">Industrial Area, Udaipur, Rajasthan, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
                <Phone size={22} className="text-primary shrink-0" />
                <div>
                  <h2 className="font-heading font-black text-foreground uppercase text-sm">Phone</h2>
                  <p className="text-muted-foreground text-xs mt-1 font-semibold">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
                <Mail size={22} className="text-primary shrink-0" />
                <div>
                  <h2 className="font-heading font-black text-foreground uppercase text-sm">Email</h2>
                  <p className="text-muted-foreground text-xs mt-1 font-semibold">info@keestrack.com</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5 font-semibold" aria-label="Contact form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-[10px] uppercase font-bold text-muted-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    className="w-full rounded-lg border border-border px-4 py-3 focus:outline-none focus:border-primary text-foreground bg-card text-xs"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] uppercase font-bold text-muted-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    className="w-full rounded-lg border border-border px-4 py-3 focus:outline-none focus:border-primary text-foreground bg-card text-xs"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-[10px] uppercase font-bold text-muted-foreground mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  required
                  type="text"
                  className="w-full rounded-lg border border-border px-4 py-3 focus:outline-none focus:border-primary text-foreground bg-card text-xs"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[10px] uppercase font-bold text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full rounded-lg border border-border px-4 py-3 focus:outline-none focus:border-primary text-foreground bg-card text-xs resize-none"
                />
              </div>
              <div className="pt-2">
                <BlobButton
                  type="submit"
                  disabled={submitting}
                  variant="primary"
                  className="!py-3.5 !px-8 text-xs font-black"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </BlobButton>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
