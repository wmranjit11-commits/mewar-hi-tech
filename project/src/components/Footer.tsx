"use client";
import React from 'react';
import Link from 'next/link';
import { Facebook, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';

const columns = [
  {
    title: 'Products',
    links: [
      { label: 'Crushers', to: '/products' },
      { label: 'Screens', to: '/products' },
      { label: 'Shredders', to: '/products' },
      { label: 'Ancillary equipment', to: '/products' },
    ],
  },
  {
    title: 'Parts & Services',
    links: [
      { label: 'Spare Parts', to: '/services' },
      { label: 'Maintenance', to: '/services' },
      { label: 'Technical Support', to: '/services' },
      { label: 'Dealer Locator', to: '/contact' },
    ],
  },
  {
    title: 'About us',
    links: [
      { label: 'Our Story', to: '/about' },
      { label: 'Careers', to: '/services' },
      { label: 'Sustainability', to: '/about' },
      { label: 'Governance', to: '/about' },
    ],
  },
  {
    title: 'Media',
    links: [
      { label: 'News & Press', to: '/blogs' },
      { label: 'Gallery', to: '/gallery' },
      { label: 'Exhibitions', to: '/blogs' },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#E4E4E4] text-[#111111] select-none">
      {/* Upper Footer Links */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
        
        {/* Left Column: Logo & Description */}
        <div className="lg:col-span-2 space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logos/logo.png"
              alt="Mewar Hi-Tech Logo"
              className="h-12 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </Link>
          <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
            Performance in every detail. Engineering tomorrow's mobile crushing and screening solutions.
          </p>
        </div>

        {/* Link Columns */}
        {columns.map((col) => (
          <div key={col.title} className="space-y-4">
            <h4 className="font-heading font-extrabold text-xs uppercase tracking-wider text-gray-400">
              {col.title}
            </h4>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.to}
                    className="text-xs text-gray-500 hover:text-[#D89B00] transition-colors duration-200"
                  >
                    {col.title === 'About us' && link.label === 'Our Story' ? (
                      <span className="italic font-serif font-normal lowercase">{link.label}</span>
                    ) : (
                      link.label
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Copyright & Socials */}
      <div className="border-t border-[#E4E4E4]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex flex-wrap gap-4 md:gap-8">
            <p>&copy; {new Date().getFullYear()} Mewar Hi-Tech. All rights reserved.</p>
            <Link href="/contact" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-black transition-colors">Terms of Purchase</Link>
            <Link href="/contact" className="hover:text-black transition-colors">Sales Conditions</Link>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {[Linkedin, Facebook, Youtube, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-gray-400 hover:text-[#F4B400] transition-colors duration-200"
                aria-label="Social Link"
              >
                <Icon size={16} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Extreme Bottom Black Bar */}
      <div className="w-full h-2.5 bg-black" />
    </footer>
  );
};

export default Footer;