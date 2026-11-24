import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://srinithianand.com'),
  title: 'Srinithi Anand | Award Winning Singer, Performer & Artist',
  description:
    'Official portfolio of Srinithi Anand – Award winning singer, live stage performer and recording artist. Featured across Lakshman Sruthi, UK Murali Orchestra, TV reality shows, and international concert tours.',
  keywords: [
    'Srinithi Anand',
    'Singer',
    'Performer',
    'Artist',
    'Lakshman Sruthi',
    'UK Murali Orchestra',
    'Super Singer',
    'Playback Singer',
    'Carnatic Singer',
  ],
  authors: [{ name: 'Srinithi Anand' }],
  openGraph: {
    title: 'Srinithi Anand | Award Winning Singer & Performer',
    description: 'A Voice That Creates Unforgettable Moments.',
    url: 'https://srinithianand.com',
    siteName: 'Srinithi Anand Official',
    images: [
      {
        url: '/images/hero/hero1.png',
        width: 1200,
        height: 630,
        alt: 'Srinithi Anand - Official Artist Website',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/images/hero/hand.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-bg-primary text-text-primary antialiased selection:bg-gold-champagne/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
