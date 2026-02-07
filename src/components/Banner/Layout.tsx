import { ReactNode } from 'react'

export default function LayoutBanner({ children }: { children: ReactNode }) {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-10 ">
      <div className="relative group overflow-hidden rounded-2xl bg-gray-100 shadow-2xl">
        {children}
      </div>
    </div>
  )
}
