import React from 'react';
import type { Metadata } from 'next';
import { Theme } from '@radix-ui/themes';
import { ToastContainer } from 'react-toastify';
import Script from 'next/script';
import { ThemeProvider } from '@/components/ui/ThemeContext';

import { Inter, Oswald } from 'next/font/google';

import '@radix-ui/themes/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const oswald = Oswald({ 
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
});

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
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${oswald.variable}`} suppressHydrationWarning>
      <body className="min-h-screen font-sans" suppressHydrationWarning>
        <Script 
          src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js" 
          type="module" 
          strategy="afterInteractive" 
          crossOrigin="anonymous"
        />
        <Script id="chunk-load-error-handler" strategy="beforeInteractive">
          {`
            window.addEventListener('error', function(e) {
              var msg = e.message || '';
              if (msg.indexOf('Loading chunk') > -1 || msg.indexOf('ChunkLoadError') > -1) {
                window.location.reload();
              }
            });
          `}
        </Script>
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
