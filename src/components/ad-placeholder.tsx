import { cn } from "@/lib/utils"

export function AdPlaceholder({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-center rounded-lg border-2 border-dashed bg-muted text-sm text-muted-foreground",
        className
      )}
    >
      Ad Placeholder
    </div>
  )
}
