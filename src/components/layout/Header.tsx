"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Search, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BlobButton from "@/components/ui/BlobButton";
import { useTheme } from "@/components/ui/ThemeContext";

/* ─── Navigation Data ─── */
const navItems = [
  {
    label: "Machines",
    children: [
      { label: "Crushers", to: "/products?category=crushers" },
      { label: "Screeners", to: "/products?category=screens" },
      { label: "Stackers", to: "/products" },
      { label: "Feeders", to: "/products?category=feeders" },
      { label: "View all Machines", to: "/products" },
    ],
  },
  {
    label: "Applications",
    children: [
      { label: "Quarrying", to: "/industries" },
      { label: "Mining", to: "/industries" },
      { label: "Recycling", to: "/industries" },
      { label: "Road & Infra", to: "/industries" },
      { label: "View all Applications", to: "/industries" },
    ],
  },
  {
    label: "Support",
    children: [
      { label: "Parts & Services", to: "/services" },
      { label: "Technical Support", to: "/services" },
      { label: "Service Network", to: "/services" },
      { label: "Downloads", to: "/services" },
      { label: "FAQ", to: "/services" },
    ],
  },
  {
    label: "Parts & Services",
    to: "/services",
  },
  {
    label: "About Us",
    children: [
      { label: "About Us", to: "/about" },
      { label: "Careers", to: "/careers" },
      { label: "News & Media", to: "/blogs" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
  {
    label: "News & Media",
    children: [
      { label: "Latest News", to: "/blogs" },
      { label: "Events", to: "/events" },
      { label: "Gallery", to: "/gallery" },
      { label: "Projects", to: "/projects" },
    ],
  },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [expandedSubmenu, setExpandedSubmenu] = useState<string | null>(null);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const lastScrollYRef = useRef(0);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;
      setScrolled(currentScrollY > 24);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setVisible(true);
      }, 800);

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const themes: Array<{ key: "light" | "dark"; color: string; label: string }> = [
    { key: "light", color: "bg-white border border-gray-300", label: "Light" },
    { key: "dark", color: "bg-gray-800", label: "Dark" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 select-none transition-transform duration-500 ease-in-out ${
          visible || open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Main nav bar */}
        <div
        className={`w-full px-6 lg:px-8 py-3 flex items-center justify-between transition-all duration-300 ${
          theme === "light"
            ? scrolled
              ? "bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm"
              : "bg-white/80 backdrop-blur-sm border-b border-gray-100"
            : scrolled
              ? "bg-secondary/95 backdrop-blur-md shadow-lg"
              : "bg-secondary/80 backdrop-blur-sm"
        }`}
      >
        {/* Left: Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 shrink-0"
          aria-label="Mewar Hi-Tech home"
        >
          <div className="w-full h-[64px] rounded flex items-center justify-center shrink-0 overflow-hidden">
            <img
              src={theme === "dark" ? "/logos/logo-dark.png" : "/logos/logo.png"}
              alt="Mewar Hi-Tech Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </Link>

        {/* Center: Desktop Navigation */}
        <nav
          className="hidden xl:flex items-center gap-1"
          aria-label="Primary navigation"
        >
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group py-2">
                <button className={`text-[13px] font-semibold tracking-wide flex items-center gap-1 px-3 py-1.5 transition-colors duration-200 hover:text-primary ${
                  theme === "light" ? "text-gray-800" : "text-secondary-foreground/80"
                }`}>
                  {item.label}
                  <ChevronDown
                    size={13}
                    className="group-hover:rotate-180 transition-transform duration-200 opacity-50"
                  />
                </button>
                <div className={`absolute top-full left-0 mt-1 min-w-[220px] w-max border shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2 ${
                  theme === "light"
                    ? "bg-white border-gray-200"
                    : "bg-secondary border-border/30"
                }`}>
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.to}
                      className={`block px-5 py-2.5 text-[13px] hover:bg-primary/10 hover:text-primary transition-colors whitespace-nowrap font-medium ${
                        theme === "light"
                          ? "text-gray-700"
                          : "text-secondary-foreground/70"
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.to!}
                className={`text-[13px] font-semibold tracking-wide px-3 py-1.5 transition-colors duration-200 hover:text-primary ${
                  theme === "light"
                    ? pathname === item.to ? "text-primary" : "text-gray-800"
                    : pathname === item.to ? "text-primary" : "text-secondary-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Right side: Icons + Theme + CTA */}
        <div className="flex items-center gap-3">
          {/* Theme toggle pills */}
          <div className="hidden lg:flex items-center gap-1.5 mr-1">
            {themes.map((t) => (
              <button
                key={t.key}
                onClick={() => setTheme(t.key)}
                className={`w-5 h-5 rounded-full transition-all duration-200 ${t.color} ${
                  theme === t.key
                    ? "ring-2 ring-primary ring-offset-1 ring-offset-secondary scale-110"
                    : "opacity-60 hover:opacity-100"
                }`}
                aria-label={`Switch to ${t.label} theme`}
                title={t.label}
              />
            ))}
          </div>

          {/* Globe / Language */}
          <button className={`hidden lg:flex items-center gap-1 hover:text-primary transition-colors p-1.5 ${
            theme === "light" ? "text-gray-700" : "text-secondary-foreground/60"
          }`}>
            <Globe size={16} strokeWidth={1.5} />
            <span className="text-[11px] font-bold uppercase">EN</span>
          </button>

          {/* Search */}
          <button className={`hidden lg:flex hover:text-primary transition-colors p-1.5 ${
            theme === "light" ? "text-gray-700" : "text-secondary-foreground/60"
          }`}>
            <Search size={16} strokeWidth={1.5} />
          </button>

          {/* Contact CTA */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <BlobButton
                variant="primary"
                className="!py-2 !px-5 !text-[11px] !font-black"
              >
                Contact Us
              </BlobButton>
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <button
            className={`xl:hidden p-2 rounded-lg hover:bg-black/5 transition-colors ${
              theme === "light" ? "text-gray-800" : "text-secondary-foreground"
            }`}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>

    {/* ─── Mobile Drawer ─── */}
    <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className={`absolute right-0 top-0 bottom-0 w-full max-w-xs shadow-2xl flex flex-col overflow-hidden ${
                theme === "light" ? "bg-white border-l border-gray-100" : "bg-secondary"
              }`}
              initial={{ x: "110%" }}
              animate={{ x: 0 }}
              exit={{ x: "110%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drawer header */}
              <div className={`flex items-center justify-between px-6 h-16 border-b ${
                theme === "light" ? "border-gray-150" : "border-border/20"
              }`}>
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2"
                >
                  <div className="w-5 lg:w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
                    <img
                      src={theme === "dark" ? "/logos/logo-dark.png" : "/logos/logo.png"}
                      alt="Mewar Hi-Tech Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className={`font-heading font-black text-base ${
                    theme === "light" ? "text-black" : "text-secondary-foreground"
                  }`}>
                    Mewar Hi-Tech
                  </span>
                </Link>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className={`p-2 rounded-lg hover:bg-black/5 ${
                    theme === "light" ? "text-gray-800" : "text-secondary-foreground hover:text-primary"
                  }`}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer nav links */}
              <nav
                className="flex flex-col p-4 gap-1 overflow-y-auto flex-1"
                aria-label="Mobile primary navigation"
              >
                {/* Theme selector for mobile */}
                <div className="flex items-center gap-2 px-4 py-3 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mr-2">Theme</span>
                  {themes.map((t) => (
                    <button
                      key={t.key}
                      onClick={() => setTheme(t.key)}
                      className={`w-6 h-6 rounded-full transition-all ${t.color} ${
                        theme === t.key
                          ? "ring-2 ring-primary ring-offset-1 ring-offset-secondary scale-110"
                          : "opacity-50"
                      }`}
                      aria-label={`Switch to ${t.label} theme`}
                    />
                  ))}
                </div>

                {navItems.map((item) => {
                  const hasChildren = !!item.children;
                  const isExpanded = expandedSubmenu === item.label;

                  return (
                    <div key={item.label} className="border-b border-border/5 last:border-b-0">
                      {hasChildren ? (
                        <>
                          <button
                            onClick={() => setExpandedSubmenu(isExpanded ? null : item.label)}
                            className={`w-full px-4 py-3 flex items-center justify-between text-sm font-bold transition-colors uppercase tracking-wider text-left ${
                              theme === "light" ? "text-gray-800 hover:text-primary" : "text-secondary-foreground hover:text-primary"
                            }`}
                          >
                            <span>{item.label}</span>
                            <ChevronDown
                              size={14}
                              className={`transform transition-transform duration-200 opacity-60 ${
                                isExpanded ? "rotate-180 text-primary" : ""
                              }`}
                            />
                          </button>
                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className="overflow-hidden bg-black/[0.03]"
                              >
                                <div className="py-2 pl-4 flex flex-col gap-1">
                                  {item.children!.map((child) => (
                                    <Link
                                      key={child.label}
                                      href={child.to}
                                      onClick={() => setOpen(false)}
                                      className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors block ${
                                        theme === "light"
                                          ? "text-gray-600 hover:text-primary"
                                          : "text-secondary-foreground/70 hover:text-primary"
                                      }`}
                                    >
                                      {child.label}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={item.to!}
                          onClick={() => setOpen(false)}
                          className={`px-4 py-3 text-sm font-bold uppercase tracking-wider transition-colors block ${
                            theme === "light"
                              ? "text-gray-800 hover:text-primary"
                              : "text-secondary-foreground hover:text-primary"
                          }`}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </nav>

            {/* Drawer footer CTA */}
            <div className={`p-4 border-t ${
              theme === "light" ? "border-gray-150" : "border-border/20"
            }`}>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block"
              >
                <BlobButton
                  variant="primary"
                  className="!w-full !py-3 !text-xs !font-black"
                >
                  Contact Us
                </BlobButton>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </>
  );
};

export default Header;
