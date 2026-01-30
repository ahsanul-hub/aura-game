'use client'

import { CheckCircle2 } from 'lucide-react'
import { GetPaymentMethodResponse, PaymentMethod } from '../../../types/PaymentMethod'
import Image from 'next/image'

interface PaymentMethodProps {
  PaymentMethod: GetPaymentMethodResponse
  activePayment: PaymentMethod | null
  step?: number
}

export default function PaymentMethodTransactionComponent({
  PaymentMethod,
  activePayment,
  step,
}: PaymentMethodProps) {
  return (
    <div className="relative w-full sm:w-150 ">
      {/* Step Badge */}
      <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[11px] sm:text-xs font-bold bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-md border-2 border-white dark:border-zinc-900 z-10">
        {step}
      </div>

      <div className="bg-black/5 dark:bg-white/10  rounded-3xl p-4 sm:p-6 border border-purple-500/30 hover:border-purple-500 transition-all duration-300 shadow-xl">
        {/* Header */}
        <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-4">
          Pilih Pembayaran
        </h2>

        {/* Payment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {PaymentMethod?.data?.map((payment) => {
            const isSelected = activePayment?.id === payment.id
            return (
              <div
                key={payment.id}
                className={`
              relative cursor-pointer rounded-2xl p-3
              transition-all duration-300 
              flex flex-row items-center gap-3 min-h-[60px]
              ${
                isSelected
                  ? 'border-2 border-purple-500 bg-white dark:bg-white/20 shadow-md scale-[1.02]'
                  : 'border border-purple-500/30 bg-white/80 dark:bg-white/20 hover:border-purple-500 hover:bg-white dark:hover:bg-white/30 hover:scale-[1.01]'
              }
            `}
              >
                {/* Selected Badge */}
                {isSelected && (
                  <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1 shadow-md">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`flex items-center justify-center h-12 w-12 rounded-xl transition-all ${isSelected ? 'bg-white shadow-md' : 'bg-transparent'}`}
                >
                  <Image
                    src={payment.icon_url}
                    alt={payment.name}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>

                {/* Name */}
                <p className="text-gray-900 dark:text-white text-sm sm:text-sm font-medium leading-snug line-clamp-2 flex-1">
                  {payment.full_name}
                </p>

                {/* Price */}
                <div className="flex w-auto justify-end ">
                  <p className="sm:text-sm font-semibold text-purple-600 dark:text-purple-400">
                    Rp 500.000
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
