import { ReactNode } from 'react'

export default function LayoutTop({ children }: { children: ReactNode }) {
  return (
    <nav className="border-b border-purple-500/30 dark:border-purple-500/20 bg-white dark:bg-black/20 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">{children}</div>
      </div>
    </nav>
  )
}
