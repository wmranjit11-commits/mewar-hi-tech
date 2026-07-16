import React from 'react';

const logoImages = [
  '/images/new-logo/customer-1.png',
  '/images/new-logo/customer-2.png',
  '/images/new-logo/customer-3.png',
  '/images/new-logo/customer-4.png',
  '/images/new-logo/customer-5.png',
  '/images/new-logo/customer-6.png',
  '/images/new-logo/customer-7.png',
  '/images/new-logo/customer-8.png',
  '/images/new-logo/customer-9.png',
  '/images/new-logo/customer-10.png',
  '/images/new-logo/customer-11.png',
  '/images/new-logo/customer-12.png',
];

const ClientLogosMarquee: React.FC = () => {
  return (
    <section className="py-[10px] bg-white border-y border-mewar-border overflow-hidden" aria-label="Trusted by">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-3">
        <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-mewar-heading tracking-tight">
          Our Customers
        </h2>
        <div className="w-12 h-1 bg-mewar-yellow mx-auto mt-3 rounded-full" />
      </div>
      <div className="flex gap-16 animate-[scroll_30s_linear_infinite] w-max items-center">
        {[...logoImages, ...logoImages].map((logoSrc, i) => (
          <img
            key={`${logoSrc}-${i}`}
            src={logoSrc}
            alt={`Client logo ${i + 1}`}
            className="h-20 w-auto object-contain opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
          />
        ))}
      </div>
    </section>
  );
};

export default ClientLogosMarquee;