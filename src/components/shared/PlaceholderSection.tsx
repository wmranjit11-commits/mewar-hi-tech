import React from "react";
import { Construction } from "lucide-react";

interface PlaceholderSectionProps {
  pageName: string;
}

const PlaceholderSection: React.FC<PlaceholderSectionProps> = ({ pageName }) => {
  return (
    <section className="py-24 lg:py-32 bg-background select-none">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center mx-auto mb-6 shadow-sm">
          <Construction size={28} className="text-primary" />
        </div>
        <h2 className="font-heading text-2xl sm:text-3xl font-black text-foreground mb-3 uppercase">
          Coming Soon
        </h2>
        <p className="text-muted-foreground text-sm font-medium">
          The {pageName} page is being crafted. We are preparing rich media and full technical catalogs for this section.
        </p>
      </div>
    </section>
  );
};

export default PlaceholderSection;