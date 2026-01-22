export default function LoadingNav() {
  return (
    <nav className="border-b border-purple-500/20 bg-white/80 dark:bg-black/20 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 animate-pulse">
          {/* LEFT: LOGO */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-200 dark:bg-white/10" />
            <div className="h-4 sm:h-5 w-24 sm:w-28 rounded bg-gray-200 dark:bg-white/10" />
          </div>

          {/* CENTER: NAV LINKS (DESKTOP) */}
          <div className="hidden md:flex items-center gap-6">
            <div className="h-4 w-12 rounded bg-gray-200 dark:bg-white/10" />
            <div className="h-4 w-14 rounded bg-gray-200 dark:bg-white/10" />
            <div className="h-4 w-20 rounded bg-gray-200 dark:bg-white/10" />
          </div>

          {/* RIGHT: ACTIONS */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-gray-200 dark:bg-white/10" />
            <div className="hidden sm:block h-8 sm:h-9 w-20 sm:w-24 rounded-full bg-gray-200 dark:bg-white/10" />
          </div>
        </div>
      </div>
    </nav>
  )
}
