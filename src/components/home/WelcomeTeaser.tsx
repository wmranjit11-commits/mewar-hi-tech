"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlobButton from "@/components/ui/BlobButton";
import Container from "../ui/Container";

export default function WelcomeTeaser() {
  return (
    <section className="py-6 lg:py-10 bg-background overflow-hidden border-b border-border/60">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-primary font-bold text-xs uppercase tracking-widest block">
                Welcome to Mewar
              </span>
              <h2 className="common-heading text-3xl sm:text-4xl text-foreground font-bold leading-tight">
                Mewar Hitech Engineering Limited
              </h2>
            </div>
            <div className="text-muted-foreground text-sm leading-relaxed space-y-4 font-medium">
              <p>
                Mewar Hitech is a leading manufacturer and exporter of
                heavy-duty crushing, screening, and size reduction equipment.
                With decades of industrial expertise, we design machines
                engineered for maximum durability, high performance, and
                continuous operation under extreme loads.
              </p>
              <p>
                We offer complete turnkey projects including plant layout
                design, manufacturing, supply, erection, commissioning, and
                dedicated maintenance support. Our state-of-the-art
                manufacturing plant is equipped with modern tooling and
                precision machinery to ensure every equipment meets strict
                quality standards.
              </p>
            </div>
            <div className="pt-2">
              <Link href="/about">
                <BlobButton
                  variant="primary"
                  className="!px-6 !py-3 !text-xs !font-bold !uppercase !tracking-wider flex items-center gap-2"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight size={14} />
                </BlobButton>
              </Link>
            </div>
          </div>

          {/* Right Image Collage Column */}
          <div className="lg:col-span-6 py-10 flex justify-center relative min-h-[450px] sm:min-h-[550px] lg:min-h-[600px] xl:min-h-[650px] w-full">
            {/* Image 1 (Background left) */}
            <div className="absolute left-4 top-8 w-[60%] aspect-square rounded-xl overflow-hidden border border-border shadow-lg rotate-[-3deg] hover:rotate-0 hover:z-20 transition-all duration-300">
              <img
                src="/images/index-1.jpg"
                alt="Plant installation assembly"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Image 2 (Background right) */}
            <div className="absolute right-4 top-16 w-[55%] aspect-square rounded-xl overflow-hidden border border-border shadow-lg rotate-[4deg] hover:rotate-0 hover:z-20 transition-all duration-300">
              <img
                src="/images/index-2.jpg"
                alt="Crusher component parts"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Image 3 (Foreground center) */}
            <div className="absolute left-[20%] top-[35%] w-[60%] aspect-[4/3] rounded-xl overflow-hidden border border-primary/20 shadow-2xl rotate-[-1deg] hover:rotate-0 z-10 hover:z-20 hover:border-primary/40 transition-all duration-300 bg-card">
              <img
                src="/images/index-3.jpg"
                alt="Welcome project deployment"
                className="w-full h-full object-cover p-2.5 bg-card"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
