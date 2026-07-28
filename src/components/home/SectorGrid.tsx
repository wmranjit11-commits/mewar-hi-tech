"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  RotateCcw,
  ArrowLeft,
  ArrowRight as ArrowRightIcon,
  Box,
  ZoomIn,
  ZoomOut,
  MapPin,
  Camera,
  ChevronDown,
} from "lucide-react";
import BlobButton from "@/components/ui/BlobButton";
import Container from "../ui/Container";

const SectorGrid: React.FC = () => {
  const [application, setApplication] = useState("Quarry");
  const [material, setMaterial] = useState("Hard Rock");
  const [capacity, setCapacity] = useState("150 - 300 TPH");
  const [power, setPower] = useState("Electric");

  const viewerRef = React.useRef<any>(null);

  const handleZoomIn = () => {
    if (viewerRef.current) {
      viewerRef.current.zoom(1);
    }
  };

  const handleZoomOut = () => {
    if (viewerRef.current) {
      viewerRef.current.zoom(-1);
    }
  };

  const handleReset = () => {
    if (viewerRef.current) {
      viewerRef.current.cameraOrbit = "0deg 75deg auto";
      viewerRef.current.fieldOfView = "auto";
    }
  };

  return (
    <section className="py-8 lg:py-10 bg-background text-foreground select-none text-left border-y border-border/10">
      <Container>
        <div className="flex flex-col lg:flex-row overflow-hidden items-start gap-8">
          
          {/* Left Form Panel */}
          <div className="w-full lg:w-[35%] py-4 bg-background flex flex-col justify-start">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-2.5">
              Find Your Perfect Machine
            </p>
            <h2 className="font-sans text-3xl font-black text-foreground leading-none mb-4 uppercase tracking-tight">
              SMART TOOLS.
              <br />
              SMARTER CHOICE.
            </h2>
            <p className="text-xs text-muted-foreground mb-6 font-medium leading-relaxed">
              Select your application and material to discover the ideal machine for maximum performance.
            </p>
            <form className="space-y-4 font-bold text-xs">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] text-muted-foreground mb-1.5 uppercase tracking-wider">Application</label>
                  <div className="relative">
                    <select
                      value={application}
                      onChange={(e) => setApplication(e.target.value)}
                      className="w-full appearance-none border border-border rounded text-xs bg-card text-foreground py-2.5 pl-3 pr-8 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary font-semibold shadow-sm"
                    >
                      <option>Quarry</option>
                      <option>Mining</option>
                      <option>Recycling</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-2.5 top-3 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] text-muted-foreground mb-1.5 uppercase tracking-wider">Material</label>
                  <div className="relative">
                    <select
                      value={material}
                      onChange={(e) => setMaterial(e.target.value)}
                      className="w-full appearance-none border border-border rounded text-xs bg-card text-foreground py-2.5 pl-3 pr-8 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary font-semibold shadow-sm"
                    >
                      <option>Hard Rock</option>
                      <option>Gravel</option>
                      <option>Concrete</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-2.5 top-3 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] text-muted-foreground mb-1.5 uppercase tracking-wider">Output Capacity</label>
                  <div className="relative">
                    <select
                      value={capacity}
                      onChange={(e) => setCapacity(e.target.value)}
                      className="w-full appearance-none border border-border rounded text-xs bg-card text-foreground py-2.5 pl-3 pr-8 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary font-semibold shadow-sm"
                    >
                      <option>150 - 300 TPH</option>
                      <option>300 - 500 TPH</option>
                      <option>500+ TPH</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-2.5 top-3 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] text-muted-foreground mb-1.5 uppercase tracking-wider">Power Source</label>
                  <div className="relative">
                    <select
                      value={power}
                      onChange={(e) => setPower(e.target.value)}
                      className="w-full appearance-none border border-border rounded text-xs bg-card text-foreground py-2.5 pl-3 pr-8 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary font-semibold shadow-sm"
                    >
                      <option>Electric</option>
                      <option>Diesel</option>
                      <option>Hybrid</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-2.5 top-3 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>
              
              <div className="pt-2">
                <BlobButton
                  variant="primary"
                  type="button"
                  className="!w-auto !py-3 !text-xs !font-black px-6 rounded"
                >
                  <div className="flex items-center gap-2 whitespace-nowrap">
                    <span>Find My Machine</span>
                    <ArrowRight size={14} className="stroke-[2.5]" />
                  </div>
                </BlobButton>
              </div>
            </form>
          </div>

          {/* Thin Vertical Divider */}
          <div className="hidden lg:block w-[1px] self-stretch bg-border mx-2" />

          {/* Right 3D Experience Panel */}
          <div className="w-full lg:w-[65%] py-4 bg-background flex flex-col justify-start gap-4">
            <div>
              <p className="text-primary font-bold text-xs uppercase tracking-widest mb-4">
                Interactive 3D Experience
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                
                {/* Feature Lists (2/5 Width) */}
                <div className="md:col-span-2 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="text-muted-foreground hover:text-primary transition-colors shrink-0">
                      <RotateCcw size={18} strokeWidth={2.2} />
                    </div>
                    <span className="text-[11px] font-bold text-foreground uppercase tracking-wider font-sans">
                      360° Machine View
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-muted-foreground hover:text-primary transition-colors shrink-0">
                      <MapPin size={18} strokeWidth={2.2} />
                    </div>
                    <span className="text-[11px] font-bold text-foreground uppercase tracking-wider font-sans">
                      Interactive Hotspots
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-muted-foreground hover:text-primary transition-colors shrink-0">
                      <Camera size={18} strokeWidth={2.2} />
                    </div>
                    <span className="text-[11px] font-bold text-foreground uppercase tracking-wider font-sans">
                      Detailed Specifications
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-muted-foreground hover:text-primary transition-colors shrink-0">
                      <MapPin size={18} strokeWidth={2.2} />
                    </div>
                    <span className="text-[11px] font-bold text-foreground uppercase tracking-wider font-sans">
                      Real Operation Insights
                    </span>
                  </div>
                </div>

                {/* 3D Viewer model-viewer (3/5 Width) */}
                <div className="md:col-span-3 flex flex-col items-center relative w-full">
                  
                  <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-border bg-card/30 flex items-center justify-center p-2">
                    <model-viewer
                      ref={viewerRef}
                      src="/3dmodel/Meshy_AI_Kingson_Cone_Crusher_0704110926_texture.glb"
                      poster="/images/robust_crusher_design.png"
                      alt="3D Kingson Cone Crusher Model"
                      auto-rotate
                      camera-controls
                      ar
                      shadow-intensity="1"
                      interaction-prompt="none"
                      auto-rotate-delay="0"
                      className="w-full h-full rounded-2xl"
                      style={{ width: "100%", height: "300px" }}
                    >
                      {/* Hotspots */}
                      <button
                        slot="hotspot-1"
                        data-position="-0.2m 0.5m 0.3m"
                        className="w-6 h-6 bg-card rounded-full flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform border border-primary/40 text-primary font-black text-xs"
                      >
                        +
                      </button>
                      <button
                        slot="hotspot-2"
                        data-position="0.2m 0.6m -0.1m"
                        className="w-6 h-6 bg-card rounded-full flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform border border-primary/40 text-primary font-black text-xs"
                      >
                        +
                      </button>
                    </model-viewer>
                  </div>

                  {/* Floating White View Control Bar */}
                  <div className="flex items-center bg-card rounded-md shadow-md border border-border px-5 py-2.5 gap-4 z-20 mt-4">
                    <button 
                      onClick={handleReset}
                      type="button"
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 text-[10px] font-black uppercase tracking-wider"
                    >
                      <span>360°</span>
                      <RotateCcw size={12} strokeWidth={2.5} />
                    </button>
                    <div className="w-[1px] h-3.5 bg-border" />
                    <button 
                      onClick={handleZoomOut}
                      type="button"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ZoomOut size={14} strokeWidth={2.5} />
                    </button>
                    <button 
                      onClick={handleZoomIn}
                      type="button"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ZoomIn size={14} strokeWidth={2.5} />
                    </button>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default SectorGrid;
