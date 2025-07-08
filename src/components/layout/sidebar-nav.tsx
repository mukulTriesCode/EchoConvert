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
} from 'lucide-react';
import Link from 'next/link';

const links = [
  { href: '/', label: 'AI Format Tool', icon: WandSparkles },
  { href: '/converter', label: 'Audio Converter', icon: ArrowRightLeft },
  { href: '/trimmer', label: 'Audio Trimmer', icon: Scissors },
  { href: '/compressor', label: 'Audio Compressor', icon: Shrink },
  { href: '/booster', label: 'Volume Booster', icon: Volume2 },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {links.map((link) => (
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
    </SidebarMenu>
  );
}
