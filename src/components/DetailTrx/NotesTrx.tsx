import { AlertCircle } from 'lucide-react'

export default function NotesCard() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 mt-6">
      <div className="rounded-2xl border border-gray-200 bg-white px-5 py-5 shadow-sm">
        {/* Header */}
        <div className="mb-3 flex items-center gap-2">
          <AlertCircle className="text-orange-500" size={18} />
          <h3 className="text-base font-semibold text-gray-800">Catatan</h3>
        </div>

        {/* Content */}
        <ul className="space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed list-disc pl-5">
          <li>Salin no. transaksi jika transaksi tanpa login.</li>
          <li>Halaman tidak perlu kamu refresh, status transaksi akan update otomatis.</li>
          <li>
            Jika perlu bantuan, hubungi Customer Care Lapakgaming via WhatsApp{' '}
            <a
              href="https://wa.me/6281280000203"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-600 hover:underline"
            >
              081280000203
            </a>
            .
          </li>
          <li>Selesaikan pembayaran sebelum batas waktu.</li>
          <li>Bayar sesuai nominal yang diminta, termasuk kode unik jika ada.</li>
          <li>Proses konfirmasi pembayaran otomatis 1–5 menit setelah kamu membayar.</li>
          <li>Jika beli voucher, cek email secara berkala untuk mendapatkan kode voucher.</li>
        </ul>
      </div>
    </div>
  )
}
