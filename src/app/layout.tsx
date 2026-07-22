import React from 'react';
import type { Metadata } from 'next';
import { Theme } from '@radix-ui/themes';
import { ToastContainer } from 'react-toastify';
import Script from 'next/script';
import { ThemeProvider } from '@/components/ui/ThemeContext';

import '@radix-ui/themes/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles.css';

export const metadata: Metadata = {
  title: "Mewar Hi-Tech - Heavy Duty Crushing & Screening Equipment",
  description: "Innovative crushing and screening solutions engineered to perform and built to last.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="min-h-screen font-sans">
        <Script 
          src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js" 
          type="module" 
          strategy="afterInteractive" 
          crossOrigin="anonymous"
        />
        <ThemeProvider>
          <Theme appearance="inherit" radius="large" scaling="100%">
            <main className="min-h-screen font-sans">
              {children}
              <ToastContainer
                position="top-right"
                autoClose={3000}
                newestOnTop
                closeOnClick
                pauseOnHover
              />
            </main>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
