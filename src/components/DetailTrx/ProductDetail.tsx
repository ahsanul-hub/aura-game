import Image from 'next/image'

export default function ProductDetailCard() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 mt-6">
      <div className="rounded-2xl border border-gray-200 bg-white px-5 py-6 shadow-sm">
        {/* Title */}
        <h2 className="mb-6 text-lg sm:text-xl font-semibold text-gray-900">Detail Produk</h2>

        {/* Header product */}
        <div className="mb-6 flex items-start gap-4">
          {/* Icon */}
          <div className="flex-shrink-0">
            <Image
              src="/terabox.png" // taruh di /public
              alt="TeraBox"
              width={56}
              height={56}
              className="rounded-xl object-contain"
            />
          </div>

          {/* Info */}
          <div>
            <span className="inline-block rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
              VOUCHER
            </span>

            <h3 className="mt-2 text-base sm:text-lg font-semibold text-gray-900">
              TeraBox 1 Month Premium
            </h3>

            <p className="text-sm text-gray-500">TeraBox Gift Card</p>
          </div>
        </div>

        {/* Detail list */}
        <div className="space-y-4 text-sm sm:text-base">
          <div className="grid grid-cols-3 gap-2">
            <span className="text-gray-500">Produk</span>
            <span className="col-span-2 font-medium text-gray-900">TeraBox Gift Card</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <span className="text-gray-500">Nominal</span>
            <span className="col-span-2 font-medium text-gray-900">TeraBox 1 Month Premium</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <span className="text-gray-500">Jumlah</span>
            <span className="col-span-2 font-medium text-gray-900">1</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <span className="text-gray-500">Email</span>
            <span className="col-span-2 font-medium text-gray-900 break-all">
              alfian.jw@gmail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
