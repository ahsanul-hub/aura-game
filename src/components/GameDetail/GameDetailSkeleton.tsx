export const GameDetailSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-10 h-10 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />

        {/* Text */}
        <p className="text-sm text-gray-500 dark:text-gray-400">Loading game details...</p>
      </div>
    </div>
  )
}
