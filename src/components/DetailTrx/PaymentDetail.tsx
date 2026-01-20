import Image from 'next/image'

export default function PaymentDetailCard() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 mt-6">
      <div className="rounded-3xl border border-gray-200 bg-white px-5 py-6 shadow-sm">
        {/* Title */}
        <h2 className="mb-6 text-lg sm:text-xl font-semibold text-gray-900">Detail Pembayaran</h2>

        {/* Status & Method */}
        <div className="mb-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-500">Status pembayaran</span>
            <span className="rounded-full border border-orange-400 px-4 py-1 text-sm font-semibold text-orange-500">
              BELUM DIBAYAR
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-500">Metode pembayaran</span>
            <div className="flex items-center gap-3">
              <Image
                src="/qris.png" // taruh di /public
                alt="QRIS"
                width={56}
                height={24}
                className="object-contain"
              />
              <span className="text-sm font-medium text-gray-900">QRIS</span>
            </div>
          </div>
        </div>

        <hr className="mb-6 border-gray-200" />

        {/* Amount */}
        <div className="space-y-4 text-sm sm:text-base">
          <div className="flex items-center justify-between">
            <span className="text-gray-500">Total transaksi</span>
            <span className="font-medium text-gray-900">Rp60.099</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-500">Total pembayaran</span>
            <span className="text-lg font-bold text-gray-900">Rp60.099</span>
          </div>
        </div>
      </div>
    </div>
  )
}
