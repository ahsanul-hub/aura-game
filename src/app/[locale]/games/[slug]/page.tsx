'use client'

import { useParams } from 'next/navigation'
import { useGetGamesBySlug } from '../../../../hooks/useGame'
import { useState } from 'react'
import { CheckCircle2, Info, Mail, ShoppingCart } from 'lucide-react'
import Image from 'next/image'

const GameDetail = () => {
  const { slug } = useParams<{ slug: string }>()
  const { data: dataGameDetail, isLoading: isLoadingGameDetail } = useGetGamesBySlug(slug)
  const [email, setEmail] = useState('')

  const [userId, setUserId] = useState('')
  const [selectedPackage, setSelectedPackage] = useState(null)
  const [selectedPayment, setSelectedPayment] = useState(null)

  const packages = [
    { id: 1, coins: '3350 Coins', price: 8495, originalPrice: 10901, discount: 22, image: '💎' },
    { id: 2, coins: '6700 Coins', price: 15315, originalPrice: 18919, discount: 19, image: '💎' },
    { id: 3, coins: '33500 Coins', price: 76577, originalPrice: 92793, discount: 17, image: '💎' },
    {
      id: 4,
      coins: '67500 Coins',
      price: 153153,
      originalPrice: 184685,
      discount: 17,
      image: '💎',
    },
    {
      id: 5,
      coins: '202500 Coins',
      price: 458559,
      originalPrice: 554955,
      discount: 17,
      image: '💎',
    },
    {
      id: 6,
      coins: '406800 Coins',
      price: 917117,
      originalPrice: 1014414,
      discount: 10,
      image: '💎',
    },
  ]

  const paymentMethods = [
    { id: 1, name: 'Dana', icon: '💳' },
    { id: 2, name: 'QRIS', icon: '📱' },
    { id: 3, name: 'Bank Transfer', icon: '🏦' },
    { id: 4, name: 'ShopeePay', icon: '🛍️' },
    { id: 5, name: 'OVO', icon: '💰' },
    { id: 6, name: 'Indomaret', icon: '🏪' },
    { id: 7, name: 'Alfamart', icon: '🏬' },
    { id: 8, name: 'Kartu Kredit', icon: '💳' },
  ]

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID').format(price)
  }

  const handleSubmit = () => {
    if (!userId || !selectedPackage || !selectedPayment) {
      alert('Mohon lengkapi semua field!')
      return
    }
    alert('Top-up berhasil diproses! 🎉')
  }

  return (
    <div className="min-h-screen  bg-gradient-to-br from-background via-purple-50/50 dark:via-purple-900/50 to-background">
      <div className="max-w-6xl mx-auto flex flex-row gap-4 p-4">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-lg flex  items-center rounded-3xl px-6 py-5 mb-6 border border-white/20 shadow-xl min-h-[120px] max-h-32">
          <div className="flex items-center gap-5 w-full">
            {/* Icon / Thumbnail */}
            <div className="relative w-20 h-20 shrink-0 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl shadow-md overflow-hidden">
              {dataGameDetail?.data?.thumbnail_url && (
                <Image
                  src={dataGameDetail.data.thumbnail_url}
                  alt={dataGameDetail.data.name ?? 'Game Thumbnail'}
                  fill
                  className="object-cover"
                  priority
                />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h1 className="text-xl font-bold text-white leading-tight truncate">
                {dataGameDetail?.data?.name}
              </h1>

              <p className="text-sm text-purple-200 leading-snug line-clamp-2 mt-1">
                Top up items hanya {dataGameDetail?.data?.name} dalam hitungan detik!
              </p>

              <div className="flex gap-2 mt-3">
                <span className="inline-flex items-center bg-green-500/20 text-green-300 px-2.5 py-1 rounded-full text-xs font-medium border border-green-400/30">
                  ✓ Aman
                </span>
                <span className="inline-flex items-center bg-blue-500/20 text-blue-300 px-2.5 py-1 rounded-full text-xs font-medium border border-blue-400/30">
                  ✓ Instan
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* User ID Input */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-5 mb-6 border border-white/20 shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-lg font-bold text-white">Masukkan ID</h2>
              <Info className="w-4 h-4 text-purple-300" />
            </div>

            <p className="text-purple-200 mb-3 text-xs leading-snug">
              Untuk menemukan ID Xena Anda, masuk ke akun Anda di aplikasi. Klik Informasi Pribadi
              di halaman SAYA.
            </p>

            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Masukkan User ID Xena Anda"
              className="w-full px-4 py-3 rounded-2xl bg-white/20 border border-white/30 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 focus:bg-white/30 transition-all text-sm"
            />
          </div>

          {/* Package Selection */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-5 mb-6 border border-white/20 shadow-xl">
            <h2 className="text-lg font-bold text-white mb-4">Pilih Nominal Top Up</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedPackage(pkg)}
                  className={`relative cursor-pointer rounded-2xl p-3 transition-all duration-300 ${
                    selectedPackage?.id === pkg.id
                      ? 'bg-gradient-to-br from-purple-500 to-pink-500 border border-white shadow-md scale-[1.02]'
                      : 'bg-white/20 border border-white/30 hover:bg-white/30 hover:scale-[1.01]'
                  }`}
                >
                  {selectedPackage?.id === pkg.id && (
                    <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  )}

                  {pkg.discount > 0 && (
                    <div className="absolute -top-2 -left-2 bg-red-500 text-white px-2 py-0.5 rounded-full text-[11px] font-bold shadow">
                      -{pkg.discount}%
                    </div>
                  )}

                  <div className="text-3xl mb-1 text-center">{pkg.image}</div>

                  <h3 className="text-sm font-semibold text-white text-center mb-0.5">
                    {pkg.coins}
                  </h3>

                  <div className="text-center">
                    <p className="text-[11px] text-purple-200">Dari</p>
                    <p className="text-sm font-bold text-white">Rp. {formatPrice(pkg.price)}</p>

                    {pkg.discount > 0 && (
                      <p className="text-[11px] text-purple-300 line-through">
                        Rp. {formatPrice(pkg.originalPrice)}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-5 mb-6 border border-white/20 shadow-xl">
            <h2 className="text-lg font-bold text-white mb-4">Pilih Pembayaran</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {paymentMethods.map((payment) => (
                <div
                  key={payment.id}
                  onClick={() => setSelectedPayment(payment)}
                  className={`cursor-pointer rounded-2xl p-3 transition-all duration-300 ${
                    selectedPayment?.id === payment.id
                      ? 'bg-gradient-to-br from-blue-500 to-cyan-500 border border-white shadow-md scale-[1.02]'
                      : 'bg-white/20 border border-white/30 hover:bg-white/30 hover:scale-[1.01]'
                  }`}
                >
                  <div className="text-2xl text-center mb-1">{payment.icon}</div>

                  <p className="text-white text-center text-xs font-medium truncate">
                    {payment.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Email Input */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-5 mb-6 border border-white/20 shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-lg font-bold text-white">Email</h2>
              <Mail className="w-4 h-4 text-purple-300" />
            </div>

            <p className="text-purple-200 mb-3 text-xs leading-snug">
              Email digunakan untuk mengirimkan bukti pembayaran & status transaksi.
            </p>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="contoh@email.com"
              className="w-full px-4 py-3 rounded-2xl bg-white/20 border border-white/30 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 focus:bg-white/30 transition-all text-sm"
            />
          </div>

          {/* Order Summary & Buy Button */}
          {(userId || selectedPackage || selectedPayment) && (
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-5 border border-white/20 shadow-xl">
              <h2 className="text-lg font-bold text-white mb-4">Ringkasan Pesanan</h2>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-purple-200 text-sm">
                  <span>User ID:</span>
                  <span className="text-white font-medium truncate max-w-[60%] text-right">
                    {userId || '-'}
                  </span>
                </div>

                <div className="flex justify-between text-purple-200 text-sm">
                  <span>Paket:</span>
                  <span className="text-white font-medium">{selectedPackage?.coins || '-'}</span>
                </div>

                <div className="flex justify-between text-purple-200 text-sm">
                  <span>Pembayaran:</span>
                  <span className="text-white font-medium">{selectedPayment?.name || '-'}</span>
                </div>

                <div className="border-t border-white/20 pt-2 mt-2">
                  <div className="flex justify-between">
                    <span className="text-white font-semibold">Total:</span>
                    <span className="text-white font-semibold">
                      {selectedPackage ? `Rp. ${formatPrice(selectedPackage.price)}` : '-'}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] flex items-center justify-center gap-2 text-sm"
              >
                <ShoppingCart className="w-5 h-5" />
                Beli Sekarang
              </button>

              <p className="text-center text-purple-200 text-xs mt-3">
                Dengan melanjutkan, Anda menyetujui syarat dan ketentuan kami
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default GameDetail
