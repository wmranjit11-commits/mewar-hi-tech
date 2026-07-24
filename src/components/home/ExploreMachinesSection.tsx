"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { MachineShowcase } from "../MachineShowcase";
import BlobButton from "../ui/BlobButton";

const ExploreMachinesSection: React.FC = () => {
  return (
    <section className="bg-muted py-8 lg:py-12 select-none text-left border-b border-border/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Main Cards Showcase (Full-Width) */}
        <div className="w-full">
          <MachineShowcase />
        </div>

        {/* Centered Explore All Machines Button at the bottom */}
        <div className="w-full flex justify-center mt-12">
          <Link href="/products" className="cursor-pointer">
            <BlobButton variant="secondary" className="!py-3.5 !px-8 text-xs font-black">
              <span>Explore All Machines</span>
              <ArrowRight size={14} className="stroke-[3]" />
            </BlobButton>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ExploreMachinesSection;
