export default function ErrorBanner() {
  return (
    <div className="py-10 flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center justify-center rounded-xl border border-red-200 bg-red-50 p-6 text-center">
        <p className="text-sm font-semibold text-red-600">Failed to load Content</p>

        <button
          onClick={() => window.location.reload()}
          className="mt-4 cursor-pointer rounded-md bg-red-500 px-4 py-2 text-xs text-white hover:bg-red-600"
        >
          Retry
        </button>
      </div>
    </div>
  )
}
