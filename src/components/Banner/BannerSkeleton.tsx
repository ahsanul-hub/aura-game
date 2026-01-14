export function ShowSkeleton() {
  return (
    <section className="flex justify-center items-center w-full max-w-5xl mx-auto px-4 py-10 animate-pulse">
      <div className="flex gap-6">
        <div className="h-80 w-[1000px] rounded-2xl bg-gray-200 dark:bg-white/10" />
      </div>
    </section>
  )
}
