import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Grain from '@/components/Grain';
import Nav from '@/components/Nav';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const title = 'Evrista — Creative Media & Design by Rosangela Shaijan';
const description =
  'Evrista is the creative media and design venture of Rosangela Shaijan — graphic design, digital art, editing and visual storytelling turned into content that feels personal, expressive and meaningful.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
};

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-ink font-sans text-paper">
        <Grain />
        <Nav />
        {children}
      </body>
    </html>
  );
}
