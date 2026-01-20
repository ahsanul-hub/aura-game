import NotesCard from '../../../components/DetailTrx/NotesTrx'
import PaymentDetailCard from '../../../components/DetailTrx/PaymentDetail'
import ProductDetailCard from '../../../components/DetailTrx/ProductDetail'
import ProtectDataCard from '../../../components/DetailTrx/ProtectedDataTrx'
import SecurityCard from '../../../components/DetailTrx/SecureTrx'
import TransactionTracking from '../../../components/DetailTrx/StatusTrx'

export default function DetailTransactionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-50/40 dark:via-purple-900/40 to-background flex items-center justify-center px-4 py-10">
      {/* Main Container */}
      <div className="flex flex-row w-[1000px] border-2 border-black">
        {/* Left Column */}
        <div className="flex-auto">
          <TransactionTracking />
          <ProductDetailCard />
          <PaymentDetailCard />
        </div>
        {/* Right Column */}
        <div>
          <SecurityCard />
          <NotesCard />
          <ProtectDataCard />
        </div>
      </div>
    </div>
  )
}
