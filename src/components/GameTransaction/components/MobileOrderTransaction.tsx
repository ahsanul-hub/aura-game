'use client'
import { ShoppingCart } from 'lucide-react'

export default function MobileOrderBar() {
  return (
    <div className="xl:hidden fixed bottom-0 left-0 right-0 z-50">
      {/* blur background */}
      <div className="backdrop-blur-md bg-white/80 dark:bg-black/70 border-t border-purple-500/30 shadow-2xl px-4 py-3">
        
        <div className="flex items-center justify-between gap-3">
          {/* Harga */}
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 dark:text-purple-200">
              Total
            </span>
            <span className="text-lg font-bold text-green-500 dark:text-green-400">
              Rp. 300.000
            </span>
          </div>

          {/* Button */}
          <button
            className="
              flex-1
              bg-gradient-to-r from-pink-500 to-purple-600
              text-white font-semibold
              py-3
              rounded-full
              transition-all duration-300
              flex items-center justify-center gap-2
              text-sm
              hover:shadow-lg
              hover:shadow-purple-500/30
              active:scale-[0.97]
            "
          >
            <ShoppingCart className="w-4 h-4" />
            Beli Sekarang
          </button>
        </div>

      </div>
    </div>
  )
}
