import type { LucideProps } from "lucide-react"

export const Icons = {
  logo: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 12.5a10 10 0 0 1 20 0V14" />
      <path d="M2 14h2.5" />
      <path d="M19.5 14H22" />
      <path d="M4 12.5a8 8 0 0 1 16 0V14a3 3 0 0 1-3 3h-2" />
      <path d="M6 14a3 3 0 0 0 3 3h2" />
      <path d="M12 17a3 3 0 0 0 3-3V9a3 3 0 0 0-6 0v5" />
    </svg>
  ),
}
