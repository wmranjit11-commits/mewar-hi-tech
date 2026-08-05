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
        <div className="max-w-3xl mb-8 text-center mx-auto space-y-2">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block font-sans">
            OUR MACHINERY
          </span>
          <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight uppercase text-[#0A1A3B] dark:text-white">
            EXPLORE OUR MACHINES
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
