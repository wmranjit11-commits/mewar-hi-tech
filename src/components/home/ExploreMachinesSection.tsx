"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { MachineShowcase } from "../MachineShowcase";
import BlobButton from "../ui/BlobButton";
import Container from "../ui/Container";

const ExploreMachinesSection: React.FC = () => {
  return (
    <section className="bg-muted py-6 lg:py-8 select-none text-left border-b border-border/10">
      <Container>
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-center mx-auto space-y-3">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block font-sans">
            Our Products
          </span>
          <h2 className="common-heading text-3xl sm:text-4xl lg:text-5xl text-foreground font-bold tracking-tight">
            Explore Our Machines
          </h2>
        </div>
        
        {/* Main Cards Showcase (Full-Width) */}
        <div className="w-full">
          <MachineShowcase />
        </div>

        {/* Centered Explore All Machines Button at the bottom */}
        <div className="w-full flex justify-center mt-12">
          <Link href="/products" className="cursor-pointer">
            <BlobButton variant="secondary" className="!py-3.5 !px-8 text-xs font-bold">
              <span>Explore All Machines</span>
              <ArrowRight size={14} className="stroke-[3]" />
            </BlobButton>
          </Link>
        </div>

      </Container>
    </section>
  );
};

export default ExploreMachinesSection;
