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
import { AdPlaceholder } from '@/components/ad-placeholder';

export const metadata: Metadata = {
  title: {
    default: 'AudioForge - The Ultimate Online Audio Toolkit',
    template: '%s | AudioForge',
  },
  description:
    'Convert, trim, compress, and enhance your audio files with our suite of powerful and easy-to-use online tools.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('font-body antialiased min-h-screen bg-background')}>
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
            {children}
          </SidebarInset>
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}
