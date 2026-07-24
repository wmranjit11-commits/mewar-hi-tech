"use client";

import React, { use, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  FileText,
  Video,
  Info,
  Send,
  ShieldCheck,
  Zap,
  ChevronRight,
  Flame,
  Wrench,
  TrendingUp,
  Download,
  Home,
  ArrowRight,
} from "lucide-react";
import { toast } from "react-toastify";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlobButton from "@/components/ui/BlobButton";
import { PRODUCTS_DATA } from "../data";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.id;

  // Find product by slug
  const product = PRODUCTS_DATA.find((item) => item.slug === slug);

  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: `I am interested in the ${product?.name || "equipment"}. Please send me the specifications and a quote.`,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Quote request submitted successfully. Our team will contact you shortly.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: `I am interested in the ${product?.name || "equipment"}. Please send me the specifications and a quote.`,
      });
    }, 1200);
  };

  // Fallback if product not found
  if (!product) {
    return (
      <div className="bg-background min-h-screen text-foreground select-none flex flex-col justify-between">
        <Header />
        <main className="flex-grow pt-36 pb-24 flex items-center justify-center">
          <div className="text-center space-y-6 max-w-md px-6">
            <h1 className="common-heading text-4xl text-primary">
              Product Not Found
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We couldn&apos;t find the product you were looking for. Please check our catalog for our full list of crushing and screening machinery.
            </p>
            <div className="pt-2">
              <Link href="/products">
                <BlobButton variant="primary" className="!px-6 !py-3">
                  <div className="flex items-center gap-2">
                    <ArrowLeft size={16} />
                    <span>Back to Catalog</span>
                  </div>
                </BlobButton>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const showMediaSection = (product.gallery && product.gallery.length > 0) || product.video;

  // Dynamic title split for dual-line design: keeps "Jaw Crusher" or product types on the second line in primary color.
  let firstHalf = product.name;
  let secondHalf = "";

  const lowerName = product.name.toLowerCase();
  if (lowerName.includes("jaw crusher")) {
    const idx = lowerName.indexOf("jaw crusher");
    firstHalf = product.name.slice(0, idx).trim();
    secondHalf = product.name.slice(idx).trim();
  } else if (lowerName.includes("crusher")) {
    const idx = lowerName.indexOf("crusher");
    firstHalf = product.name.slice(0, idx).trim();
    secondHalf = product.name.slice(idx).trim();
  } else if (lowerName.includes("impactor")) {
    const idx = lowerName.indexOf("impactor");
    firstHalf = product.name.slice(0, idx).trim();
    secondHalf = product.name.slice(idx).trim();
  } else if (lowerName.includes("screen")) {
    const idx = lowerName.indexOf("screen");
    firstHalf = product.name.slice(0, idx).trim();
    secondHalf = product.name.slice(idx).trim();
  } else if (lowerName.includes("washer")) {
    const idx = lowerName.indexOf("washer");
    firstHalf = product.name.slice(0, idx).trim();
    secondHalf = product.name.slice(idx).trim();
  } else if (lowerName.includes("feeder")) {
    const idx = lowerName.indexOf("feeder");
    firstHalf = product.name.slice(0, idx).trim();
    secondHalf = product.name.slice(idx).trim();
  } else if (lowerName.includes("conveyor")) {
    const idx = lowerName.indexOf("conveyor");
    firstHalf = product.name.slice(0, idx).trim();
    secondHalf = product.name.slice(idx).trim();
  } else if (lowerName.includes("machine")) {
    const idx = lowerName.indexOf("machine");
    firstHalf = product.name.slice(0, idx).trim();
    secondHalf = product.name.slice(idx).trim();
  } else {
    const nameWords = product.name.split(" ");
    const halfLength = Math.ceil(nameWords.length / 2);
    firstHalf = nameWords.slice(0, halfLength).join(" ");
    secondHalf = nameWords.slice(halfLength).join(" ");
  }

  return (
    <div className="bg-background min-h-screen text-foreground select-none flex flex-col justify-between">
      <Header />

      <main className="flex-grow">
        {/* ── 1. Custom Angled Product Hero Section ── */}
        <section className="relative z-30 flex flex-col bg-[#111315] select-none pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-visible min-h-[580px] flex items-center border-b border-border/10">
          
          {/* Background Image of the Hero */}
          <div className="absolute hidden md:block lg:block inset-0 w-full h-full z-0 overflow-hidden">
            <img
              src={product.heroImage || "/images/double-toggle-oil-jaw-crusher-hero.png"}
              alt={`${product.name} background`}
              className="w-full h-full object-cover object-center scale-105"
            />
            {/* Dark gradient overlay for fallbacks */}
            <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none lg:hidden" />
          </div>

          {/* Left Angled Polygon Overlay */}
          <div 
            className="absolute inset-y-0 left-0 w-[62%] bg-gradient-to-r from-[#0F1216] via-[#0F1216]/98 to-[#0F1216]/90 z-10 pointer-events-none hidden lg:block"
            style={{ clipPath: "polygon(0 0, 85% 0, 68% 100%, 0 100%)" }}
          />

          {/* Main Hero Container */}
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-9 text-white text-left space-y-6 z-20">
              
              {/* Breadcrumbs */}
              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider">
                <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
                  <Home size={12} />
                  <span>Home</span>
                </Link>
                <ChevronRight size={10} className="text-primary" />
                <Link href="/products" className="hover:text-primary transition-colors">
                  Products
                </Link>
                <ChevronRight size={10} className="text-primary" />
                <span className="text-primary">{product.name}</span>
              </div>

              {/* Category Badge */}
              <div className="flex items-center gap-2">
                <span className="text-primary font-black text-xs uppercase tracking-widest">
                  /// {product.category.toUpperCase()} ///
                </span>
              </div>

              {/* Dynamic Styled Product Title */}
              <h1 className="common-heading text-4xl sm:text-5xl lg:text-[60px] leading-[0.95]">
                <span className="text-white">{firstHalf}</span>
                <br className="hidden sm:block" />
                <span className="text-primary">{secondHalf}</span>
              </h1>

              {/* Subheading */}
              <div className="space-y-2">
                <p className="text-xs sm:text-sm font-black uppercase tracking-widest text-primary">
                  BUILT TO CRUSH. ENGINEERED TO LAST.
                </p>
                <div className="w-16 h-1 bg-primary" style={{ clipPath: "polygon(0 0, 100% 0, 75% 100%, 0 100%)" }} />
              </div>

              {/* Intro Text Description */}
              <p className="text-xs sm:text-sm text-gray-300 font-medium leading-relaxed max-w-xl">
                Heavy duty primary crushers designed for high crushing ratio and superior performance in the <span className="text-primary font-bold">toughest mining conditions.</span>
              </p>

              {/* Action Buttons using default components */}
              <div className="flex flex-wrap gap-4 pt-2">
                <BlobButton
                  onClick={() => document.getElementById("quote-section")?.scrollIntoView({ behavior: "smooth" })}
                  variant="primary"
                  className="!w-full sm:!w-[210px] !h-[48px] !text-xs !font-black !uppercase !tracking-wider flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <FileText size={15} />
                  <span>Request Quote</span>
                  <ArrowRight size={15} />
                </BlobButton>
                
                <BlobButton
                  onClick={() => window.dispatchEvent(new Event("open-brochure-modal"))}
                  variant="secondary"
                  className="!w-full sm:!w-[210px] !h-[48px] !text-xs !font-black !uppercase !tracking-wider flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Download size={15} />
                  <span>Download Brochure</span>
                </BlobButton>
              </div>
            </div>
          </div>

          {/* Floating Horizontal Specs/Features Bar */}
          <div className="relative w-full max-w-7xl px-6 lg:px-8 z-30 mx-auto mt-12 lg:mt-0 lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-1/2">
            <div className="bg-[#12161F] text-white shadow-2xl rounded-2xl border border-white/10 p-5 lg:p-7 grid grid-cols-2 lg:flex lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-6">
              
              {/* Feature 1 */}
              <div className="flex items-center gap-3 flex-1 justify-start lg:justify-center">
                <Flame className="w-8 h-8 text-primary shrink-0" />
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-black tracking-wide uppercase">High Crushing</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase">Optimal Ratio</div>
                </div>
              </div>
              <div className="hidden lg:block w-[1px] h-8 bg-white/10 shrink-0" />

              {/* Feature 2 */}
              <div className="flex items-center gap-3 flex-1 justify-start lg:justify-center">
                <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-black tracking-wide uppercase">Robust Design</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase">Heavy Steel body</div>
                </div>
              </div>
              <div className="hidden lg:block w-[1px] h-8 bg-white/10 shrink-0" />

              {/* Feature 3 */}
              <div className="flex items-center gap-3 flex-1 justify-start lg:justify-center">
                <Wrench className="w-8 h-8 text-primary shrink-0" />
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-black tracking-wide uppercase">Low Maintenance</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase">Enclosed System</div>
                </div>
              </div>
              <div className="hidden lg:block w-[1px] h-8 bg-white/10 shrink-0" />

              {/* Feature 4 */}
              <div className="flex items-center gap-3 flex-1 justify-start lg:justify-center">
                <TrendingUp className="w-8 h-8 text-primary shrink-0" />
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-black tracking-wide uppercase">Reliable output</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase">Maximum Tonnage</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. Detailed Description & Features Section ── */}
        <section className="py-16 lg:py-24 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Side: Text and Features list */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 space-y-6 text-left"
              >
                <div>
                  <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">
                    Equipment Overview
                  </span>
                  <h2 className="common-heading text-3xl sm:text-4xl text-foreground leading-tight">
                    Reliable &amp; Engineered Performance
                  </h2>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                  {product.introText}
                </p>

                <div className="space-y-4 pt-4">
                  <h3 className="common-heading text-sm tracking-wider text-foreground">
                    Key Machine Features:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/80 shadow-sm"
                      >
                        <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                        <span className="text-xs text-muted-foreground font-semibold leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right Side: Product Main Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-5 flex justify-center"
              >
                <div className="relative rounded-3xl overflow-hidden bg-card w-full flex items-center justify-center group">
                  <img
                    src={product.mainImage}
                    alt={product.name}
                    className="max-h-[380px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 text-[10px] font-bold uppercase tracking-wider">
                    {product.subCategory}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── 3. Dynamic Media Showcase (Gallery & Video) ── */}
        {showMediaSection && (
          <section className="py-16 lg:py-24 bg-muted/40 border-b border-border">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
              <div className="max-w-3xl space-y-2">
                <span className="text-primary font-bold text-xs uppercase tracking-widest block">
                  Media &amp; Demonstrations
                </span>
                <h2 className="common-heading text-3xl text-foreground">
                  Visuals &amp; Technical Footage
                </h2>
              </div>

              {/* Grid adjusts layout dynamically based on presence of video and gallery images */}
              <div
                className={`grid grid-cols-1 ${
                  product.gallery && product.gallery.length > 0 && product.video
                    ? "lg:grid-cols-2"
                    : "lg:grid-cols-1 max-w-4xl mx-auto"
                } gap-8`}
              >
                {/* Left: Gallery Images */}
                {product.gallery && product.gallery.length > 0 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase text-foreground">
                      <FileText size={16} className="text-primary" />
                      <span>On-Site / Assembly Gallery</span>
                    </div>
                    <div className={`grid gap-4 ${
                      product.gallery.length === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"
                    }`}>
                      {product.gallery.map((imgUrl, i) => {
                        const isDiagram = imgUrl.toLowerCase().includes("horizontal-shaft-impactor");
                        return (
                          <div
                            key={i}
                            className="relative rounded-3xl overflow-hidden border border-border shadow-xl bg-card aspect-[16/10]"
                          >
                            <img
                              src={imgUrl}
                              alt={`${product.name} alternate view`}
                              className={`w-full h-full ${
                                isDiagram
                                  ? "object-contain p-2 bg-white"
                                  : "object-cover hover:scale-105 transition-transform duration-500"
                              }`}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Right: Video Demonstration */}
                {product.video && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase text-foreground">
                      <Video size={16} className="text-primary" />
                      <span>Working Mechanism Video</span>
                    </div>
                    <div className="relative rounded-3xl overflow-hidden border border-border shadow-xl bg-black aspect-[16/10] flex items-center justify-center">
                      <video
                        src={product.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ── 4. Technical Specifications Table Section ── */}
        {product.specsTable && (
          <section className="py-16 lg:py-24 bg-background border-b border-border">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
              <div className="max-w-3xl space-y-2">
                <span className="text-primary font-bold text-xs uppercase tracking-widest block">
                  Technical Data
                </span>
                <h2 className="common-heading text-3xl text-foreground">
                  Machine Specifications
                </h2>
              </div>

              {/* Responsive Specs Table Wrapper */}
              <div className="overflow-x-auto rounded-3xl border border-border shadow-xl bg-card">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-muted border-b border-border text-foreground font-bold uppercase tracking-wider">
                      {product.specsTable.headers.map((header, idx) => (
                        <th key={idx} className="p-4 sm:p-5 text-center whitespace-nowrap">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {product.specsTable.sections.map((section, sIdx) => (
                      <React.Fragment key={sIdx}>
                        {/* Section Header Row */}
                        <tr className="bg-primary/5 text-primary font-bold uppercase tracking-wider">
                          <td
                            colSpan={product.specsTable.headers.length}
                            className="p-3.5 pl-6 text-left whitespace-nowrap"
                          >
                            {section.title}
                          </td>
                        </tr>
                        {/* Rows */}
                        {section.rows.map((row, rIdx) => (
                          <tr
                            key={rIdx}
                            className="hover:bg-muted/40 transition-colors font-medium text-muted-foreground"
                          >
                            {row.map((val, cellIdx) => (
                               <td
                                 key={cellIdx}
                                 className={`p-4 text-center whitespace-nowrap ${
                                   cellIdx === 0
                                     ? "font-bold text-foreground"
                                     : cellIdx === 1 || cellIdx === 2
                                     ? "text-foreground font-semibold"
                                     : ""
                                 }`}
                               >
                                 {val}
                               </td>
                            ))}
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Specs Note */}
              {product.specsNote && (
                <div className="p-4 rounded-2xl bg-muted/30 border border-border/80 flex items-start gap-3 text-[11px] text-muted-foreground max-w-4xl leading-relaxed">
                  <Info size={16} className="text-primary shrink-0 mt-0.5" />
                  <p>{product.specsNote}</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ── 5. Quick Enquiry Request Form Section ── */}
        <section id="quote-section" className="py-16 lg:py-24 bg-muted/30 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              {/* Info Column */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6 text-left">
                <div className="space-y-4">
                  <span className="text-primary font-bold text-xs uppercase tracking-widest block">
                    Direct Quote Request
                  </span>
                  <h2 className="common-heading text-3xl text-foreground leading-tight">
                    Request Pricing &amp; Engineering Specs
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                    Interested in adding the **{product.name}** to your mineral processing plant or aggregate quarry? Fill in the details, and our heavy engineering specialists will send you a tailored spec sheet and direct quote.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-card border border-border shadow-lg space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                      <Zap size={20} />
                    </div>
                    <div>
                      <h4 className="common-heading text-sm text-foreground">
                        Instant Engineering Response
                      </h4>
                      <p className="text-[11px] text-muted-foreground font-semibold">
                        Technical consultation on capacities and Closed Side Settings (CSS)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Column */}
              <div className="lg:col-span-7">
                <div className="p-8 sm:p-10 rounded-3xl bg-card border border-border shadow-xl space-y-6 relative overflow-hidden flex flex-col justify-between h-full">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

                  <div>
                    <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-1">
                      Quick Inquiry
                    </span>
                    <h3 className="common-heading text-2xl text-foreground">
                      Equipment Enquiry Form
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-border px-4 py-2.5 text-xs bg-muted/40 focus:bg-background focus:outline-none focus:border-primary transition-all font-semibold"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-border px-4 py-2.5 text-xs bg-muted/40 focus:bg-background focus:outline-none focus:border-primary transition-all font-semibold"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                        Phone No *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="Enter your mobile number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-border px-4 py-2.5 text-xs bg-muted/40 focus:bg-background focus:outline-none focus:border-primary transition-all font-semibold"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                        Requirement Details / Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        placeholder="Enter your requirement details or message..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-border px-4 py-2.5 text-xs bg-muted/40 focus:bg-background focus:outline-none focus:border-primary transition-all font-semibold resize-none text-foreground"
                      />
                    </div>

                    {/* Disclaimer Note */}
                    <div className="p-3 rounded-xl bg-muted/50 border border-border/80 flex items-start gap-2.5 text-[11px] text-muted-foreground">
                      <ShieldCheck size={16} className="text-primary shrink-0 mt-0.5" />
                      <p>
                        <strong>Disclaimer:</strong> Information collected will be used strictly for responding to your inquiry and will not be shared with any third party.
                      </p>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <BlobButton
                        type="submit"
                        disabled={submitting}
                        variant="primary"
                        className="!w-full !py-3.5 !text-xs !font-black !uppercase !tracking-wider"
                      >
                        <span className="inline-flex items-center justify-center gap-2 whitespace-nowrap">
                          <Send size={15} />
                          <span>{submitting ? "Submitting Request..." : "Request Call &amp; Specs"}</span>
                        </span>
                      </BlobButton>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
