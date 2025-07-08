import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';

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
          <footer className="p-4 text-center text-sm text-muted-foreground border-t">
            © {new Date().getFullYear()} AudioForge. All Rights Reserved.
          </footer>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
