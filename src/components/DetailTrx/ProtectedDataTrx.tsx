import { ShieldAlert } from 'lucide-react'

export default function ProtectDataCard() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 mt-6">
      <div className="rounded-2xl border border-gray-200 bg-white px-5 py-5 shadow-sm">
        {/* Header */}
        <div className="mb-2 flex items-center gap-2">
          <ShieldAlert className="text-blue-600" size={20} />
          <h3 className="text-base sm:text-lg font-semibold text-gray-800">Protect Your Data</h3>
        </div>

        {/* Sub title */}
        <p className="mb-3 text-sm sm:text-base font-medium text-gray-600">Jaga Keamanan Datamu</p>

        {/* Content */}
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          Data & bukti pembayaran itu <span className="font-semibold text-red-600">rahasia</span>.
          Jangan berikan ke siapapun kecuali pihak resmi Lapakgaming{' '}
          <span className="font-medium">(jika perlu)</span>.
        </p>
      </div>
    </div>
  )
}
