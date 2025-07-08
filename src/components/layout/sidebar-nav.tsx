'use client';

import { usePathname } from 'next/navigation';
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import {
  WandSparkles,
  ArrowRightLeft,
  Scissors,
  Shrink,
  Volume2,
  Home,
  Grip,
} from 'lucide-react';
import Link from 'next/link';

const mainLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/tools', label: 'All Tools', icon: Grip },
];

const toolLinks = [
  { href: '/tools/ai-format-tool', label: 'AI Format Tool', icon: WandSparkles },
  { href: '/tools/audio-converter', label: 'Audio Converter', icon: ArrowRightLeft },
  { href: '/tools/audio-trimmer', label: 'Audio Trimmer', icon: Scissors },
  { href: '/tools/audio-compressor', label: 'Audio Compressor', icon: Shrink },
  { href: '/tools/volume-booster', label: 'Volume Booster', icon: Volume2 },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {mainLinks.map((link) => (
        <SidebarMenuItem key={link.href}>
          <SidebarMenuButton
            asChild
            isActive={pathname === link.href}
            tooltip={link.label}
          >
            <Link href={link.href}>
              <link.icon />
              <span>{link.label}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
      <div className="px-2 pt-4 pb-2 text-xs font-medium text-sidebar-foreground/70">Tools</div>
      {toolLinks.map((link) => (
        <SidebarMenuItem key={link.href}>
          <SidebarMenuButton
            asChild
            isActive={pathname.startsWith(link.href)}
            tooltip={link.label}
          >
            <Link href={link.href}>
              <link.icon />
              <span>{link.label}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
