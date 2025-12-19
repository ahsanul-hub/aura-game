'use client'

import { useParams } from 'next/navigation'
import { CheckCircle2, XCircle, Clock } from 'lucide-react'
import { formatPrice } from '../../../../utils/format_price'

type Status = 'pending' | 'success' | 'failed'

export default function TransactionStatusPage() {
  const { order_id } = useParams<{ order_id: string }>()

  // MOCK DATA
  const transaction = {
    status: 'pending' as Status,
    game: 'Mobile Legends',
    packageName: '86 Diamonds',
    paymentMethod: 'VA BCA',
    amount: 24000,
    email: 'user@email.com',
  }

  const statusConfig = {
    pending: {
      icon: <Clock className="w-14 h-14 text-yellow-400 animate-pulse" />,
      title: 'Menunggu Pembayaran',
      desc: 'Selesaikan pembayaran sesuai metode yang dipilih',
      button: 'Cek Status Pembayaran',
      btnClass:
        'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700',
    },
    success: {
      icon: <CheckCircle2 className="w-14 h-14 text-green-500" />,
      title: 'Pembayaran Berhasil',
      desc: 'Top up berhasil dan item sudah masuk ke akun kamu',
      button: 'Kembali ke Beranda',
      btnClass:
        'border border-purple-500 text-purple-600 hover:bg-purple-50 dark:hover:bg-white/10',
    },
    failed: {
      icon: <XCircle className="w-14 h-14 text-red-500" />,
      title: 'Pembayaran Gagal',
      desc: 'Transaksi gagal atau telah kedaluwarsa',
      button: 'Ulangi Transaksi',
      btnClass: 'bg-red-500 hover:bg-red-600 text-white',
    },
  }[transaction.status]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-50/40 dark:via-purple-900/40 to-background flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md animate-fadeInUp">
        <div className="bg-white/80 dark:bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-gray-200 dark:border-white/10 shadow-xl space-y-6">
          {/* STATUS */}
          <div className="flex flex-col items-center text-center gap-2">
            {statusConfig.icon}
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              {statusConfig.title}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">{statusConfig.desc}</p>
          </div>

          {/* DETAIL */}
          <div className="space-y-3 text-sm">
            <Row label="Order ID" value={order_id} />
            <Row label="Game" value={transaction.game} />
            <Row label="Paket" value={transaction.packageName} />
            <Row label="Pembayaran" value={transaction.paymentMethod} />
            <Row label="Email" value={transaction.email} />

            <div className="pt-3 mt-2 border-t border-gray-200 dark:border-white/10 flex justify-between items-center">
              <span className="font-semibold">Total</span>
              <span className="font-bold text-purple-600 text-lg">
                Rp. {formatPrice(transaction.amount)}
              </span>
            </div>
          </div>

          {/* ACTION */}
          <button
            className={`w-full rounded-full cursor-pointer py-3 font-semibold transition active:scale-95 ${statusConfig.btnClass}`}
          >
            {statusConfig.button}
          </button>
        </div>
      </div>
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium text-gray-900 dark:text-white text-right truncate">{value}</span>
    </div>
  )
}
