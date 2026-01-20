export const TransactionSkeleton = () => {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm p-3 sm:p-4 animate-pulse flex flex-col justify-between">
      {/* Image skeleton */}
      <div className="mb-3  h-32 sm:h-36 rounded-lg bg-slate-200 dark:bg-slate-800" />

      {/* Content */}
      <div className="space-y-2">
        <div className="h-3 w-24 bg-slate-200 dark:bg-slate-800 rounded" />
        <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded" />

        <div className="h-3 w-20 bg-slate-200 dark:bg-slate-800 rounded mt-2" />
        <div className="h-4 w-32 bg-slate-200 dark:bg-slate-800 rounded" />

        <div className="h-3 w-16 bg-slate-200 dark:bg-slate-800 rounded mt-2" />
        <div className="h-4 w-28 bg-slate-200 dark:bg-slate-800 rounded" />

        <div className="h-5 w-16 bg-slate-200 dark:bg-slate-800 rounded-full mt-2" />
      </div>
    </div>
  )
}
