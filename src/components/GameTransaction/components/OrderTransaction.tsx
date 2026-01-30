'use client'
import { ShoppingCart } from 'lucide-react'

export default function OrderSummary() {
  return (
    <div className=" relative w-full xl:w-100 xl:self-start bg-black/5 mt-5 dark:bg-white/10  rounded-3xl p-4 sm:p-6 border border-purple-500/30 hover:border-purple-500 transition-all duration-300 shadow-xl">
      <h2 className="text-base font-bold text-gray-900 dark:text-white mb-4">Ringkasan Pesanan : </h2>

      {/* Info */}
      <div className="space-y-3 text-sm mb-4">
        <div className="flex justify-between">
          <span className="text-gray-500 text-sm dark:text-purple-200">Paket</span>
          <span className="font-medium text-gray-900 dark:text-white text-right">Testing </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500 dark:text-purple-200">Pembayaran</span>
          <span className="font-medium text-gray-900 dark:text-white text-right">BCA</span>
        </div>

        <div className="flex justify-between pt-2 border-t border-gray-200 dark:border-white/10">
          <span className="font-semibold">Total</span>
          <span className=" text-xl font-bold text-green-500 dark:text-green-400">Rp. 300.000</span>
        </div>
      </div>

      <button
        className="
    w-full
    bg-gradient-to-r from-pink-500 to-purple-600
    text-white font-semibold
    py-3
    rounded-full
    transition-all duration-300
    cursor-pointer
    flex items-center justify-center gap-2
    text-sm
    hover:shadow-lg
    hover:shadow-purple-500/30
    hover:scale-[1.03]
    active:scale-[0.97]
    disabled:opacity-60
    disabled:cursor-not-allowed
  "
      >
        <ShoppingCart className="w-4 h-4" />
        Beli
      </button>
    </div>
  )
}
