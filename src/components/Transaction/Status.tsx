'use client'

import { CheckCircle2, XCircle, Clock } from 'lucide-react'

interface Props {
  status: 'pending' | 'success' | 'failed'
}

export default function TransactionStatus({ status }: Props) {
  if (status === 'success') {
    return (
      <div className="flex flex-col items-center text-center gap-3">
        <CheckCircle2 className="w-16 h-16 text-green-500" />
        <h2 className="text-xl font-bold text-green-600">Pembayaran Berhasil</h2>
        <p className="text-sm text-gray-500">Top up berhasil dan item sudah masuk ke akun kamu.</p>
      </div>
    )
  }

  if (status === 'failed') {
    return (
      <div className="flex flex-col items-center text-center gap-3">
        <XCircle className="w-16 h-16 text-red-500" />
        <h2 className="text-xl font-bold text-red-600">Pembayaran Gagal</h2>
        <p className="text-sm text-gray-500">Transaksi gagal atau telah kedaluwarsa.</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center text-center gap-3">
      <Clock className="w-16 h-16 text-yellow-500 animate-pulse" />
      <h2 className="text-xl font-bold text-yellow-600">Menunggu Pembayaran</h2>
      <p className="text-sm text-gray-500">
        Silakan selesaikan pembayaran sesuai metode yang dipilih.
      </p>
    </div>
  )
}
