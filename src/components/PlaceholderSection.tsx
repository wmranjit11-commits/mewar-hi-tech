import React from 'react';
    import { Construction } from 'lucide-react';

    interface PlaceholderSectionProps {
      pageName: string;
    }

    const PlaceholderSection: React.FC<PlaceholderSectionProps> = ({ pageName }) => {
      return (
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="w-16 h-16 rounded-full bg-mewar-section border border-mewar-border flex items-center justify-center mx-auto mb-6">
              <Construction size={28} className="text-mewar-yellowDark" />
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-mewar-heading mb-3">
              Coming Soon
            </h2>
            <p className="text-mewar-body">
              The {pageName} page is being crafted. Use Meku to generate content for this page.
            </p>
          </div>
        </section>
      );
    };

    export default PlaceholderSection;