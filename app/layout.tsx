import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata: Metadata = {
  title: 'CMG - Australia Visa & Migration',
  description: 'Australia Visa Application Support from MARA-Registered Agents. Helping workers, families, and businesses navigate Australian visa pathways.',
  openGraph: {
    title: 'CMG - Australia Visa & Migration',
    description: 'Australia Visa Application Support from MARA-Registered Agents. Helping workers, families, and businesses navigate Australian visa pathways.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CMG - Australia Visa & Migration',
    description: 'Australia Visa Application Support from MARA-Registered Agents. Helping workers, families, and businesses navigate Australian visa pathways.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <body
        suppressHydrationWarning
        className="bg-yellow-50 text-neutral-900 antialiased selection:bg-yellow-200 selection:text-teal-900"
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
