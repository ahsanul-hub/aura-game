import Image from 'next/image'
import { Info } from 'lucide-react'

export default function SecurityCard() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white px-4 py-4 shadow-sm">
        {/* Icon kiri */}
        <div className="flex-shrink-0">
          <Image
            src="/secure-badge.png" // taruh di /public
            alt="Garansi Aman"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>

        {/* Text */}
        <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
          <span className="font-semibold">Transaksi ini dijamin aman</span> dan garansi uang kembali{' '}
          <span className="font-semibold">10x lipat</span>.
        </p>

        {/* Info icon */}
        <button
          className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
          aria-label="Info"
        >
          <Info size={16} />
        </button>
      </div>
    </div>
  )
}
