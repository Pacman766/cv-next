import type { Metadata } from 'next';
import {
  Bricolage_Grotesque,
  Fraunces,
  Inter,
  JetBrains_Mono,
} from 'next/font/google';
import './globals.css';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
  axes: ['opsz'],
  weight: 'variable',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz'],
  weight: 'variable',
  style: ['normal', 'italic'],
});

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'Viktor Kondratsiuk — Web Developer',
  description:
    'Viktor Kondratsiuk — Web Developer with 4 years of experience in JavaScript, TypeScript, React/Next.js and Vue. Available for new opportunities.',
  openGraph: {
    title: 'Viktor Kondratsiuk — Web Developer',
    description:
      'Web Developer with 4 years of experience crafting high-performance frontends with JavaScript, TypeScript, React/Next.js and Vue.',
    type: 'website',
    images: ['/uploads/VIK.jpg'],
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='8' fill='%231a1714'/><text x='16' y='22' text-anchor='middle' font-family='sans-serif' font-weight='700' font-size='15' fill='%23f6f3ee'>VK</text></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
