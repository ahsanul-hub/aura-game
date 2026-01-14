'use client'
import { Link, usePathname } from '../i18n/routing'
import { Menu, X, Gamepad2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { LanguageSwitcher } from './LanguageSwitcher'
import { ThemeToggle } from './ThemeToggle'
import { LogOut } from 'lucide-react'
import Cookies from 'js-cookie'

import UseLoginGoogleOauth from '../hooks/useLogin'

type AuthUser = {
  name: string
  email: string
  picture?: string
}

export function getAuthUser(): AuthUser | null {
  if (typeof window === 'undefined') return null

  const user = Cookies.get('user')
  if (!user) return null

  try {
    return JSON.parse(user)
  } catch {
    return null
  }
}

export default function useAuth() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const authUser = getAuthUser()
    setUser(authUser)
    setLoading(false)
  }, [])

  return { user, loading }
}

const logout = () => {
  Cookies.remove('token')
  Cookies.remove('user')

  window.location.href = '/'
}

export function Navigation() {
  const [openProfile, setOpenProfile] = useState(false)

  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const t = useTranslations('Navigation')
  const { loginWithGoogle } = UseLoginGoogleOauth()
  const { user, loading } = useAuth()

  useEffect(() => {
    const handler = () => setOpenProfile(false)
    window.addEventListener('click', handler)
    return () => window.removeEventListener('click', handler)
  }, [])

  const navLinks = [
    { path: '/', label: t('home'), auth: false },
    { path: '/games', label: t('games'), auth: false },
    { path: '/my-transaction', label: t('transaction'), auth: true },
  ]
  const visibleNavLinks = navLinks.filter((link) => !link.auth || user)

  if (loading) {
    return (
      <nav className="border-b border-purple-500/20 bg-white/80 dark:bg-black/20 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 animate-pulse">
            {/* LEFT: LOGO */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-white/10" />
              <div className="h-5 w-28 rounded bg-gray-200 dark:bg-white/10" />
            </div>

            {/* CENTER: NAV LINKS (DESKTOP) */}
            <div className="hidden md:flex items-center gap-6">
              <div className="h-4 w-12 rounded bg-gray-200 dark:bg-white/10" />
              <div className="h-4 w-14 rounded bg-gray-200 dark:bg-white/10" />
              <div className="h-4 w-20 rounded bg-gray-200 dark:bg-white/10" />
            </div>

            {/* RIGHT: ACTIONS */}
            <div className="flex items-center gap-4">
              <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-white/10" />
              <div className="hidden sm:block h-9 w-24 rounded-full bg-gray-200 dark:bg-white/10" />
            </div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="border-b border-purple-500/20 dark:border-purple-500/20 bg-white/80 dark:bg-black/20 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Gamepad2 className="w-8 h-8 text-purple-500 dark:text-purple-500" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-600">
              PakarGaming
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {visibleNavLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  href={path}
                  className={`${
                    pathname === path
                      ? 'text-purple-600 dark:text-purple-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  } transition-colors duration-200 font-medium`}
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4 border-l border-purple-500/20 dark:border-purple-500/20 pl-8">
              <LanguageSwitcher />
              {/* <ThemeToggle /> */}

              {!user ? (
                <button
                  onClick={loginWithGoogle}
                  className="flex items-center gap-3 bg-purple-600 cursor-pointer hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-all hover:shadow-lg hover:shadow-purple-500/25"
                >
                  {/* Google Logo */}
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    className="w-5 h-5 bg-white rounded-full p-0.5"
                  />

                  <span>{t('login')}</span>
                </button>
              ) : (
                <div className="relative">
                  <div
                    onClick={(e) => {
                      e.stopPropagation()
                      setOpenProfile((prev) => !prev)
                    }}
                    className="flex items-center gap-3 cursor-pointer select-none"
                  >
                    <img
                      src={
                        user.picture ||
                        `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(
                          user.name || 'User'
                        )}`
                      }
                      alt={user.name}
                      className="w-9 h-9 rounded-full border border-purple-500/30 bg-white"
                    />

                    <span className="text-sm font-medium text-gray-800 dark:text-white">
                      {user.name}
                    </span>
                  </div>

                  {/* Dropdown */}
                  {openProfile && (
                    <div className="absolute right-0 mt-3 w-56 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-2xl border border-purple-500/20 dark:border-purple-500/30 overflow-hidden z-50">
                      {/* Header */}
                      <div className="flex items-center gap-3 px-4 py-4 border-b border-purple-500/20">
                        <img
                          src={user.picture || '/avatar.png'}
                          alt={user.name}
                          className="w-10 h-10 rounded-full border border-purple-500/30"
                        />
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                            {user.name}
                          </p>
                          <p className="text-xs text-gray-500 truncate">{user.email}</p>
                        </div>
                      </div>

                      {/* Menu */}
                      <div className="py-2">
                        <button
                          onClick={logout}
                          className="group cursor-pointer w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-500/10 transition"
                        >
                          <LogOut className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
                          <span className="text-red-600 dark:text-red-400 font-medium">Logout</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeToggle />
            {!user ? (
              <button
                onClick={() => {
                  setIsMobileMenuOpen(!isMobileMenuOpen), loginWithGoogle()
                }}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white p-2"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            ) : (
              <div className="flex items-center gap-3 cursor-pointer">
                <img
                  src={user.picture || '/avatar.png'}
                  alt={user.name}
                  className="w-9 h-9 rounded-full"
                />
                <span className="text-sm font-medium text-gray-800 dark:text-white">
                  {user.name}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-purple-500/20 dark:border-purple-500/20">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === path
                    ? 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10'
                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-purple-50/50 dark:hover:bg-purple-500/5'
                }`}
              >
                {label}
              </Link>
            ))}
            {!user ? (
              <button
                onClick={loginWithGoogle}
                className="bg-purple-600 cursor-pointer hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-all hover:shadow-lg hover:shadow-purple-500/25"
              >
                {t('login')}
              </button>
            ) : (
              <div className="flex items-center gap-3 cursor-pointer">
                <img
                  src={user.picture || '/avatar.png'}
                  alt={user.name}
                  className="w-9 h-9 rounded-full"
                />
                <span className="text-sm font-medium text-gray-800 dark:text-white">
                  {user.name}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
