"use client";

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Mail, Phone, MapPin } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageHero from '../../components/PageHero';

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success('Your message has been sent. Our team will contact you shortly.');
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div>
      <Header />
      <main>
        <PageHero
          label="Contact Us"
          title="Let's Build Something Strong Together"
          description="Reach out for product inquiries, quotes, or technical support from our engineering team."
          image="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1920&auto=format&fit=crop"
        />

        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-mewar-section border border-mewar-border">
                <MapPin size={22} className="text-mewar-yellowDark shrink-0" />
                <div>
                  <h2 className="font-heading font-bold text-mewar-heading">Address</h2>
                  <p className="text-mewar-body text-sm mt-1">Industrial Area, Udaipur, Rajasthan, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-mewar-section border border-mewar-border">
                <Phone size={22} className="text-mewar-yellowDark shrink-0" />
                <div>
                  <h2 className="font-heading font-bold text-mewar-heading">Phone</h2>
                  <p className="text-mewar-body text-sm mt-1">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-mewar-section border border-mewar-border">
                <Mail size={22} className="text-mewar-yellowDark shrink-0" />
                <div>
                  <h2 className="font-heading font-bold text-mewar-heading">Email</h2>
                  <p className="text-mewar-body text-sm mt-1">info@mewarhitech.com</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5" aria-label="Contact form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-mewar-heading mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    className="w-full rounded-lg border border-mewar-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mewar-yellow/50 transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-mewar-heading mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    className="w-full rounded-lg border border-mewar-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mewar-yellow/50 transition-all duration-200"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-mewar-heading mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  required
                  type="text"
                  className="w-full rounded-lg border border-mewar-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mewar-yellow/50 transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-mewar-heading mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full rounded-lg border border-mewar-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mewar-yellow/50 transition-all duration-200 resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 bg-mewar-yellow text-mewar-ink font-bold px-8 py-4 rounded-full hover:bg-mewar-yellowDark hover:scale-105 transition-all duration-200 disabled:opacity-60 disabled:hover:scale-100"
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
