'use client'

import { Link } from '../i18n/routing'
import { ArrowRight, TrendingUp, Zap } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { gamesResponse } from '../data/gamesData'
import Image from 'next/image'
import { useGetGameByCategory } from '../hooks/useGame'
import GamesByCategory from './Game/GamesByCategory'

export function Home() {
  const t = useTranslations('Home')

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1614179924047-e1ab49a0a0cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cHxlbnwxfHx8fDE3NjU3OTAwNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-purple-900/50 to-black/80 dark:from-black/80 dark:via-purple-900/50 dark:to-black/80" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 dark:bg-purple-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-purple-700 dark:text-purple-300 mb-6">
              <Zap className="w-4 h-4" />
              <span>{t('specialPromo')}</span>
            </div>
            <h1 className="text-5xl md:text-7xl text-white mb-6">{t('heroTitle')}</h1>
            <p className="text-gray-200 dark:text-gray-300 text-lg md:text-xl mb-8">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/games"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2 group"
              >
                {t('browseGames')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="border border-purple-500 dark:border-purple-500 text-purple-100 dark:text-purple-300 px-8 py-4 rounded-lg hover:bg-purple-500/20 dark:hover:bg-purple-500/20 transition-all">
                {t('viewPromo')}
              </button>
            </div>
          </div>
        </div>
      </section>

      <GamesByCategory />

      {/* Stats Section */}
      <section className="bg-gray-50/80 dark:bg-black/40 backdrop-blur-sm border-y border-purple-200 dark:border-purple-500/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Game Tersedia', value: '10,000+' },
              { label: 'Pengguna Aktif', value: '5M+' },
              { label: 'Rating Rata-rata', value: '4.8' },
              { label: 'Diskon Hingga', value: '70%' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
