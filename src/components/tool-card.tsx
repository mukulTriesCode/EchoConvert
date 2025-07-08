import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Link from "next/link";
import type { ReactNode } from "react";

type ToolCardProps = {
  href: string;
  title: string;
  description: string;
  icon: ReactNode;
};

export function ToolCard({ href, title, description, icon }: ToolCardProps) {
  return (
    <Link href={href} className="group block">
      <Card className="h-full transition-all duration-300 ease-in-out group-hover:shadow-lg group-hover:border-primary">
        <CardHeader className="flex flex-row items-start gap-4 space-y-0 p-4">
          <div className="p-3 bg-primary/10 text-primary rounded-lg">
            {icon}
          </div>
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription className="mt-1">{description}</CardDescription>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}
