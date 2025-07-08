import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import {
  SidebarProvider,
  Sidebar,
  SidebarInset,
  SidebarTrigger,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { SidebarNav } from '@/components/layout/sidebar-nav';
import { Icons } from '@/components/icons';
import Link from 'next/link';
import Script from 'next/script';

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
      <body className={cn('font-body antialiased min-h-screen bg-background flex flex-col')}>
        <SidebarProvider>
          <Sidebar>
            <SidebarHeader>
              <Link href="/" className="flex items-center gap-2">
                <Icons.logo className="w-8 h-8 text-primary" />
                <h1 className="text-xl font-semibold">AudioForge</h1>
              </Link>
            </SidebarHeader>
            <SidebarContent>
              <SidebarNav />
            </SidebarContent>
            <SidebarFooter>
              <div className="text-xs text-muted-foreground p-4 space-x-2 text-center">
                <Link href="/terms" className="hover:text-primary">Terms</Link>
                <span>•</span>
                <Link href="/privacy-policy" className="hover:text-primary">Privacy</Link>
              </div>
            </SidebarFooter>
          </Sidebar>
          <SidebarInset>
            <header className="sticky top-0 z-10 flex items-center h-14 px-4 border-b bg-background/80 backdrop-blur-sm sm:px-6 md:hidden">
              <SidebarTrigger />
              <div className="flex-1 text-center">
                <Link href="/" className="flex items-center gap-2 justify-center">
                  <Icons.logo className="w-6 h-6 text-primary" />
                  <h1 className="text-lg font-semibold">AudioForge</h1>
                </Link>
              </div>
            </header>
            <div className="flex-1">
              {children}
            </div>
            <footer className="p-4 text-center text-sm text-muted-foreground border-t">
              © {new Date().getFullYear()} AudioForge. All Rights Reserved.
            </footer>
          </SidebarInset>
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}
