"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();
  
  const lastScrollYRef = useRef(0);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;
      setScrolled(currentScrollY > 24);

      // Clear existing idle timer
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        // Scrolling down: hide header
        setVisible(false);
      } else {
        // Scrolling up or near top: show header immediately
        setVisible(true);
      }

      // Set timer to reveal header when scroll stops for 800ms
      scrollTimeoutRef.current = setTimeout(() => {
        setVisible(true);
      }, 800);

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`fixed top-4 left-4 right-4 z-50 max-w-[1400px] mx-auto select-none transition-transform duration-500 ease-in-out ${
      (visible || open) ? 'translate-y-0' : '-translate-y-[180%]'
    }`}>
      {/* Main floating navbar container with 3D glass effect */}
      <div
        className={`bg-white/80 backdrop-blur-md rounded-[18px] px-6 py-3 flex items-center justify-between transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 border border-[#E4E4E4] shadow-[inset_1px_1px_1px_rgba(255,255,255,0.8),_0_20px_40px_rgba(0,0,0,0.1)]' 
            : 'border-t border-l border-white/60 border-r border-b-2 border-black/10 shadow-[inset_1px_1px_1px_rgba(255,255,255,0.7),_inset_-1px_-1px_1px_rgba(0,0,0,0.05),_0_16px_36px_rgba(0,0,0,0.08)]'
        }`}
      >
        {/* Left: Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Mewar Hi-Tech home"
        >
          <img
            src="/logos/logo.png"
            alt="Mewar Hi-Tech Logo"
            className="h-10 lg:h-12 w-auto object-contain transition-all duration-300"
          />
        </Link>

        {/* Center/Right: Navigation Links for Desktop */}
        <nav
          className="hidden lg:flex items-center gap-6 xl:gap-8"
          aria-label="Primary navigation"
        >
          {/* Link 1: Home */}
          <Link
            href="/"
            className={`text-sm font-semibold tracking-wide transition-colors duration-200 text-[#111111] hover:text-[#D89B00] ${
              pathname === "/" ? "text-[#D89B00]" : ""
            }`}
          >
            Home
          </Link>

          {/* Link 2: About us (Dropdown) */}
          <div className="relative group py-2">
            <button className="text-[#111111] group-hover:text-[#D89B00] text-sm font-semibold tracking-wide flex items-center gap-1 transition-colors duration-200">
              About us
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200 text-gray-500" />
            </button>
            <div className="absolute top-full left-0 mt-1 min-w-[200px] w-max bg-white/95 backdrop-blur-md border-t border-l border-white/60 border-r border-b border-black/10 shadow-[inset_1px_1px_1px_rgba(255,255,255,0.8),_0_12px_30px_rgba(0,0,0,0.06)] rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2">
              <Link href="/about" className="block px-4 py-2.5 text-sm text-[#111111] hover:bg-gray-50/50 hover:text-[#D89B00] transition-colors whitespace-nowrap">
                Company Profile
              </Link>
              <Link href="/gallery" className="block px-4 py-2.5 text-sm text-[#111111] hover:bg-gray-50/50 hover:text-[#D89B00] transition-colors whitespace-nowrap">
                Gallery
              </Link>
              <Link href="/industries" className="block px-4 py-2.5 text-sm text-[#111111] hover:bg-gray-50/50 hover:text-[#D89B00] transition-colors whitespace-nowrap">
                Industries
              </Link>
              <Link href="/projects" className="block px-4 py-2.5 text-sm text-[#111111] hover:bg-gray-50/50 hover:text-[#D89B00] transition-colors whitespace-nowrap">
                Projects
              </Link>
            </div>
          </div>

          {/* Link 3: Products (Dropdown) */}
          <div className="relative group py-2">
            <button className="text-[#111111] group-hover:text-[#D89B00] text-sm font-semibold tracking-wide flex items-center gap-1 transition-colors duration-200">
              Products
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200 text-gray-500" />
            </button>
            <div className="absolute top-full left-0 mt-1 min-w-[240px] w-max bg-white/95 backdrop-blur-md border-t border-l border-white/60 border-r border-b border-black/10 shadow-[inset_1px_1px_1px_rgba(255,255,255,0.8),_0_12px_30px_rgba(0,0,0,0.06)] rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2">
              <Link href="/products?category=crushers" className="block px-4 py-2.5 text-sm text-[#111111] hover:bg-gray-50/50 hover:text-[#D89B00] transition-colors whitespace-nowrap">
                Crushers
              </Link>
              <Link href="/products?category=screens" className="block px-4 py-2.5 text-sm text-[#111111] hover:bg-gray-50/50 hover:text-[#D89B00] transition-colors whitespace-nowrap">
                Vibrating Screens
              </Link>
              <Link href="/products?category=feeders" className="block px-4 py-2.5 text-sm text-[#111111] hover:bg-gray-50/50 hover:text-[#D89B00] transition-colors whitespace-nowrap">
                Vibro Feeders
              </Link>
              <Link href="/products?category=ancillary" className="block px-4 py-2.5 text-sm text-[#111111] hover:bg-gray-50/50 hover:text-[#D89B00] transition-colors whitespace-nowrap">
                Sand Making & Washing
              </Link>
            </div>
          </div>

          {/* Link 4: Services */}
          <Link
            href="/services"
            className={`text-sm font-semibold tracking-wide transition-colors duration-200 text-[#111111] hover:text-[#D89B00] ${
              pathname === "/services" ? "text-[#D89B00]" : ""
            }`}
          >
            Services
          </Link>

          {/* Link 5: Careers */}
          <Link
            href="/careers"
            className={`text-sm font-semibold tracking-wide transition-colors duration-200 text-[#111111] hover:text-[#D89B00] ${
              pathname === "/careers" ? "text-[#D89B00]" : ""
            }`}
          >
            Careers
          </Link>

          {/* Link 6: Events */}
          <Link
            href="/events"
            className={`text-sm font-semibold tracking-wide transition-colors duration-200 text-[#111111] hover:text-[#D89B00] ${
              pathname === "/events" ? "text-[#D89B00]" : ""
            }`}
          >
            Events
          </Link>

          {/* Link 7: Contact Us */}
          <Link
            href="/contact"
            className={`text-sm font-semibold tracking-wide transition-colors duration-200 text-[#111111] hover:text-[#D89B00] ${
              pathname === "/contact" ? "text-[#D89B00]" : ""
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Right side CTA: Quick Inquiry/Contact Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#232D39] hover:bg-[#F4B400] text-white hover:text-black font-extrabold text-xs px-5 py-2.5 rounded-lg transition-colors duration-200 shadow-sm"
          >
            <span>Inquire Now</span>
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          className="lg:hidden p-2 rounded-lg text-[#111111] hover:bg-gray-100 transition-colors"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="absolute right-4 top-4 bottom-4 w-full max-w-xs bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
              initial={{ x: "110%" }}
              animate={{ x: 0 }}
              exit={{ x: "110%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-6 h-20 border-b border-gray-100">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2"
                >
                  <img
                    src="/logos/logo.png"
                    alt="Mewar Hi-Tech Logo"
                    className="h-10 w-auto object-contain"
                  />
                </Link>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="p-2 text-[#111111] hover:bg-gray-100 rounded-lg"
                >
                  <X size={20} />
                </button>
              </div>

              <nav
                className="flex flex-col p-6 gap-2 overflow-y-auto"
                aria-label="Mobile primary navigation"
              >
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2.5 rounded-lg text-sm font-semibold text-[#111111] hover:bg-gray-50 transition-colors"
                >
                  Home
                </Link>

                <div className="border-t border-gray-100 my-1" />
                <span className="px-4 pt-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  About Us
                </span>
                <Link
                  href="/about"
                  onClick={() => setOpen(false)}
                  className="px-6 py-2 text-sm text-[#111111] hover:text-[#D89B00]"
                >
                  Company Profile
                </Link>
                <Link
                  href="/gallery"
                  onClick={() => setOpen(false)}
                  className="px-6 py-2 text-sm text-[#111111] hover:text-[#D89B00]"
                >
                  Gallery
                </Link>
                <Link
                  href="/industries"
                  onClick={() => setOpen(false)}
                  className="px-6 py-2 text-sm text-[#111111] hover:text-[#D89B00]"
                >
                  Industries
                </Link>
                <Link
                  href="/projects"
                  onClick={() => setOpen(false)}
                  className="px-6 py-2 text-sm text-[#111111] hover:text-[#D89B00]"
                >
                  Projects
                </Link>

                <div className="border-t border-gray-100 my-1" />
                <span className="px-4 pt-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Products
                </span>
                <Link
                  href="/products?category=crushers"
                  onClick={() => setOpen(false)}
                  className="px-6 py-2 text-sm text-[#111111] hover:text-[#D89B00]"
                >
                  Crushers
                </Link>
                <Link
                  href="/products?category=screens"
                  onClick={() => setOpen(false)}
                  className="px-6 py-2 text-sm text-[#111111] hover:text-[#D89B00]"
                >
                  Vibrating Screens
                </Link>
                <Link
                  href="/products?category=feeders"
                  onClick={() => setOpen(false)}
                  className="px-6 py-2 text-sm text-[#111111] hover:text-[#D89B00]"
                >
                  Vibro Feeders
                </Link>
                <Link
                  href="/products?category=ancillary"
                  onClick={() => setOpen(false)}
                  className="px-6 py-2 text-sm text-[#111111] hover:text-[#D89B00]"
                >
                  Sand Making & Washing
                </Link>

                <div className="border-t border-gray-100 my-1" />
                <Link
                  href="/services"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2.5 rounded-lg text-sm font-semibold text-[#111111] hover:bg-gray-50 transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="/careers"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2.5 rounded-lg text-sm font-semibold text-[#111111] hover:bg-gray-50 transition-colors"
                >
                  Careers
                </Link>
                <Link
                  href="/events"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2.5 rounded-lg text-sm font-semibold text-[#111111] hover:bg-gray-50 transition-colors"
                >
                  Events
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2.5 rounded-lg text-sm font-semibold text-[#111111] hover:bg-gray-50 transition-colors"
                >
                  Contact Us
                </Link>
              </nav>

              <div className="mt-auto p-6 border-t border-gray-100 bg-gray-50 flex flex-col gap-2">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#232D39] hover:bg-[#F4B400] text-white hover:text-black font-extrabold px-6 py-3 rounded-xl transition-colors"
                >
                  <span>Inquire Now</span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
