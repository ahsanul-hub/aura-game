'use client'
import { useParams } from 'next/navigation'
import { useGetGamesBySlug } from '../../hooks/useGame'
import SpinnerGameTransaction from './components/Spinner'
import LayoutGamesTransaction from './components/Layout'
import BannerGameTransaction from './components/Banner'
import AccountComponent from './components/Account'
import LayoutData from './components/LayoutData'
import { cloneElement, ReactElement, useState } from 'react'
import { ProductComponent } from './components/Product'
import { Price } from '../../types/Game'
import { PaymentMethod } from '../../types/PaymentMethod'
import { useGetPaymentMethod } from '../../hooks/usePaymentMethod'
import PaymentMethodTransactionComponent from './components/PaymentMethod'
import ContactForm from './components/Contact'
import OrderTransactionComponent from './components/OrderTransaction'
import HelpCard from './components/Help'
import MobileOrderBar from './components/MobileOrderTransaction'

export default function GameTransaction() {
  const { slug } = useParams<{ slug: string }>()
  const [selectedPackage, setSelectedPackage] = useState<Price | null>(null)
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>(null)
  const { data: dataPaymentMethods, isLoading: isLoadingPaymentMethods } = useGetPaymentMethod()

  const activeProduct = selectedPackage ?? null
  const activePayment = selectedPayment ?? null
  const { data: dataGameDetail, isLoading: isLoadingGameDetail } = useGetGamesBySlug(slug)
  const inputs = dataGameDetail?.data?.input || []

  if (isLoadingGameDetail) {
    return <SpinnerGameTransaction />
  }

  const sections: ReactElement[] = [
    ...(inputs.length > 0
      ? [<AccountComponent game={dataGameDetail.data} key="account" gameData={inputs} />]
      : []),

    <ProductComponent key="product" game={dataGameDetail} activeProduct={activeProduct} />,
    <PaymentMethodTransactionComponent
      PaymentMethod={dataPaymentMethods}
      activePayment={activePayment}
    />,
    <ContactForm />,
  ]

  return (
    <LayoutGamesTransaction>
      <BannerGameTransaction game={dataGameDetail.data} />
      <LayoutData>
        <div className="flex flex-col gap-5 items-center">
          {sections.map((Section, i) =>
            cloneElement(Section, {
              step: i + 1,
              key: `section-${i}`,
            })
          )}
        </div>
        <div className="flex items-center flex-col ">
          <HelpCard />
          <OrderTransactionComponent />
        </div>
      </LayoutData>
      <MobileOrderBar />
    </LayoutGamesTransaction>
  )
}
