import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import Link from 'next/link';
import { Icons } from '@/components/icons';

export const metadata: Metadata = {
  metadataBase: new URL('https://audioforge.com'), // Replace with actual domain
  title: {
    default: 'AudioForge - The Ultimate Online Audio Toolkit',
    template: '%s | AudioForge',
  },
  description:
    'Convert, trim, compress, and enhance your audio files with our suite of powerful and easy-to-use online tools.',
  openGraph: {
    title: 'AudioForge - The Ultimate Online Audio Toolkit',
    description: 'A complete suite for all your audio needs.',
    siteName: 'AudioForge',
    type: 'website',
    locale: 'en_US',
    url: 'https://audioforge.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AudioForge - The Ultimate Online Audio Toolkit',
    description: 'A complete suite for all your audio needs.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AudioForge',
    url: 'https://audioforge.com', // Replace with actual domain
    logo: 'https://audioforge.com/logo.png', // Replace with actual logo URL
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased')}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <footer className="border-t bg-card text-card-foreground">
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                  <Link href="/" className="flex items-center space-x-2">
                    <Icons.logo className="h-6 w-6 text-primary" />
                    <span className="font-bold text-lg">AudioForge</span>
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    Your all-in-one online audio toolkit.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Tools</h3>
                  <nav className="flex flex-col space-y-2 text-sm">
                    <Link href="/tools/audio-converter" className="text-muted-foreground hover:text-primary">Audio Converter</Link>
                    <Link href="/tools/audio-trimmer" className="text-muted-foreground hover:text-primary">Audio Trimmer</Link>
                    <Link href="/tools/audio-compressor" className="text-muted-foreground hover:text-primary">Audio Compressor</Link>
                    <Link href="/tools/volume-booster" className="text-muted-foreground hover:text-primary">Volume Booster</Link>
                    <Link href="/tools/ai-format-tool" className="text-muted-foreground hover:text-primary">AI Format Tool</Link>
                  </nav>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Company</h3>
                  <nav className="flex flex-col space-y-2 text-sm">
                    <Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link>
                    <Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link>
                  </nav>
                </div>
                  <div>
                  <h3 className="font-semibold mb-3">Legal</h3>
                  <nav className="flex flex-col space-y-2 text-sm">
                    <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link>
                    <Link href="/terms" className="text-muted-foreground hover:text-primary">Terms of Service</Link>
                  </nav>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} AudioForge. All Rights Reserved.
              </div>
            </div>
          </footer>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
