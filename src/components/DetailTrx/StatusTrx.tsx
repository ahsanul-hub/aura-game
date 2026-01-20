import { X, Clock, Check } from 'lucide-react'

type Status = 'EXPIRED' | 'PROCESS' | 'DONE'

interface Props {
  status?: Status
}

export default function TransactionTracking({ status = 'EXPIRED' }: Props) {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 mt-6">
      <div className="rounded-3xl border border-gray-200 bg-white px-5 py-6 shadow-sm">
        <h2 className="mb-6 text-lg font-semibold text-gray-900">Status Transaksi</h2>

        {/* Tracking */}
        <div className="relative pl-8">
          {/* Line */}
          <div className="absolute left-4 top-2 h-full w-0.5 bg-gray-200" />

          {/* STEP 1 */}
          <div className="mb-8 flex gap-4">
            <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white">
              <X size={16} />
            </div>
            <div>
              <p className="font-semibold text-red-600">Bayar</p>
              <p className="text-sm text-gray-700">Udah lewat batas waktu bayar</p>
              <p className="text-xs text-gray-500">20 Januari 2026 • 11:20</p>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="mb-8 flex gap-4 opacity-60">
            <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 text-white">
              <Clock size={16} />
            </div>
            <div>
              <p className="font-medium text-gray-600">Diproses</p>
              <p className="text-sm text-gray-500">Menunggu pembayaran</p>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="flex gap-4 opacity-60">
            <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 text-white">
              <Check size={16} />
            </div>
            <div>
              <p className="font-medium text-gray-600">Selesai</p>
              <p className="text-sm text-gray-500">Transaksi selesai</p>
            </div>
          </div>
        </div>

        {/* Alert */}
        <div className="mt-6 rounded-2xl bg-red-100 px-4 py-4">
          <p className="font-semibold text-gray-900">Udah lewat batas waktu bayar</p>
          <p className="text-sm text-gray-700">Kamu bisa buat transaksi baru.</p>
        </div>

        {/* Button */}
        <button className="mt-6 w-full rounded-full bg-blue-800 py-4 text-base font-semibold text-white hover:bg-blue-900 transition">
          Beli lagi
        </button>
      </div>
    </div>
  )
}
