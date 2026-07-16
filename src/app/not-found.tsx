import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <div>
      <Header />
      <main className="min-h-[70vh] flex items-center justify-center pt-32 pb-24 bg-white">
        <div className="max-w-md mx-auto px-6 text-center">
          <p className="font-heading text-7xl font-extrabold text-mewar-yellow mb-4">404</p>
          <h1 className="font-heading text-2xl font-bold text-mewar-heading mb-3">Page Not Found</h1>
          <p className="text-mewar-body mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-mewar-yellow text-mewar-ink font-bold px-6 py-3 rounded-full hover:bg-mewar-yellowDark hover:scale-105 transition-all duration-200"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
