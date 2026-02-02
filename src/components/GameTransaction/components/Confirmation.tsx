'use client'
import { Price } from '../../../types/Game'
import { PaymentMethod } from '../../../types/PaymentMethod'
import { formatPrice } from '../../../utils/format_price'

interface ConfirmModalProps {
  Product: Price | null
  Payment: PaymentMethod | null
  onClose: () => void
  onConfirm: () => void
}

export default function ConfirmModal({
  Product,
  Payment,
  onClose,
  onConfirm,
}: ConfirmModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      {/* Card */}
      <div
        className="bg-white dark:bg-zinc-900 rounded-2xl p-6 w-full max-w-md shadow-2xl animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
          Konfirmasi Pembelian
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          Pastikan pesanan kamu sudah benar sebelum lanjut pembayaran.
        </p>

        {/* Order Detail */}
        <div className="text-sm space-y-2 mb-5">
          <div className="flex justify-between">
            <span className="text-gray-500 dark:text-gray-400">Paket</span>
            <span className="font-medium text-right">{Product?.name}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500 dark:text-gray-400">Pembayaran</span>
            <span className="font-medium text-right">{Payment?.full_name}</span>
          </div>

          <div className="flex justify-between font-semibold border-t pt-2">
            <span>Total</span>
            <span className="text-green-600">
              Rp {formatPrice(Product?.selling_price || 0)}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2 rounded-xl border border-gray-300 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
          >
            Batal
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:scale-[1.02] active:scale-[0.98] transition"
          >
            Ya, Lanjutkan
          </button>
        </div>
      </div>
    </div>
  )
}
