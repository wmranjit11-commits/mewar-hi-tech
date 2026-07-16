"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ContactSignupBox: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing, ${name || 'friend'}!`);
    setEmail('');
    setName('');
  };

  return (
    <section className="py-16 bg-[#F7F7F7] select-none border-t border-[#E4E4E4]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* Left Column: Newsletter Signup (Cols 1-7) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 bg-white border border-[#E4E4E4] p-8 lg:p-10 flex flex-col justify-between"
        >
          <div>
            <h3 className="font-heading text-2xl font-extrabold text-[#111111] uppercase tracking-wide mb-3">
              Subscribe to our newsletter
            </h3>
            <p className="text-[#666666] text-xs leading-relaxed mb-8 max-w-md">
              Receive news, press updates, and alerts regarding new product launches and heavy machinery developments directly to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First & Last Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border border-[#E4E4E4] px-4 py-3 text-sm rounded-none focus:outline-none focus:border-[#F4B400] text-black bg-white"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-[#E4E4E4] px-4 py-3 text-sm rounded-none focus:outline-none focus:border-[#F4B400] text-black bg-white"
              />
            </div>
            <button
              type="submit"
              className="bg-[#F4B400] hover:bg-[#D89B00] text-black font-extrabold text-xs uppercase tracking-wider px-8 py-3.5 transition-colors rounded-none"
            >
              Sign Up
            </button>
          </form>
        </motion.div>

        {/* Right Column: Contact Card Box (Cols 8-12) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 relative rounded-none overflow-hidden min-h-[280px] flex flex-col justify-end p-8 lg:p-10 text-white"
        >
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full z-0">
            <img
              src="/images/latest-process-machinery.jpg"
              alt="Mewar Hi-Tech headquarters office"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60 hover:bg-black/55 transition-colors duration-300" />
          </div>

          {/* Content */}
          <div className="relative z-10 space-y-6">
            <h3 className="font-heading text-2xl font-black uppercase tracking-wide leading-tight">
              You have questions?<br />Contact us!
            </h3>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#F4B400] hover:bg-[#D89B00] text-black font-extrabold text-xs uppercase tracking-wider px-8 py-3.5 transition-colors rounded-none shadow-md"
            >
              <span>Contact us</span>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSignupBox;
