import { ReactNode } from 'react'

export default function LayoutBottom({ children }: { children: ReactNode }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 border-t border-purple-500/30 backdrop-blur-md">
      <div className="flex justify-center items-center gap-2 py-3 px-2">{children}</div>
    </div>
  )
}
