"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Product3DData, HotspotData } from "@/data/3d-products-data";

type ViewMode = "showroom" | "viewer";

interface ExperienceState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  activeProduct: Product3DData | null;
  setActiveProduct: (product: Product3DData | null) => void;
  activeHotspot: HotspotData | null;
  setActiveHotspot: (hotspot: HotspotData | null) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  loadingProgress: number;
  setLoadingProgress: (progress: number) => void;
}

const ExperienceContext = createContext<ExperienceState | undefined>(undefined);

export const ExperienceProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("showroom");
  const [activeProduct, setActiveProduct] = useState<Product3DData | null>(null);
  const [activeHotspot, setActiveHotspot] = useState<HotspotData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  return (
    <ExperienceContext.Provider
      value={{
        isOpen,
        setIsOpen,
        viewMode,
        setViewMode,
        activeProduct,
        setActiveProduct,
        activeHotspot,
        setActiveHotspot,
        isLoading,
        setIsLoading,
        loadingProgress,
        setLoadingProgress,
      }}
    >
      {children}
    </ExperienceContext.Provider>
  );
};

export const useExperience = () => {
  const context = useContext(ExperienceContext);
  if (context === undefined) {
    throw new Error("useExperience must be used within an ExperienceProvider");
  }
  return context;
};
