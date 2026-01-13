import Link from 'next/link'
import Image from 'next/image'
import { useLocale } from 'next-intl'
import { useGetGameByCategory } from '../../hooks/useGame'

export default function GamesByCategory() {
  const locale = useLocale()
  const { data, isLoading } = useGetGameByCategory()

  if (isLoading) return null

  const sortedCategories = [...(data?.data ?? [])].sort((a, b) => {
    if (a.category_name === 'Popular') return -1
    if (b.category_name === 'Popular') return 1
    return 0
  })

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      {sortedCategories.map((category) => {
        const isPopularCategory = category.category_name === 'Popular'
        const isNewCategory = category.category_name === 'Baru'
        const enableScroll = category.games.length > 6

        return (
          <div key={category.category_id}>
            {/* HEADER */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
                {category.category_name}
              </h2>
            </div>

            {/* GAMES */}
            <div
              className={
                enableScroll
                  ? 'flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide'
                  : 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'
              }
            >
              {category.games.map((game) => (
                <Link
                  key={game.id}
                  href={`/${locale}/games/${game.slug}`}
                  className={`group relative rounded-2xl overflow-hidden
                  bg-black border border-white/10
                  hover:border-purple-500/60
                  hover:shadow-lg hover:shadow-purple-500/20
                  transition-all duration-300
                  ${enableScroll ? 'min-w-[160px] sm:min-w-[180px] snap-start' : ''}`}
                >
                  {/* RIBBON */}
                  {isPopularCategory && (
                    <div
                      className="absolute top-3 left-[-42px] rotate-[-45deg]
                      bg-gradient-to-r from-pink-500 to-purple-600
                      text-white text-[10px] font-bold px-14 py-1 shadow-lg z-20"
                    >
                      POPULAR
                    </div>
                  )}

                  {isNewCategory && (
                    <div
                      className="absolute top-3 left-[-42px] rotate-[-45deg]
                      bg-gradient-to-r from-emerald-500 to-green-600
                      text-white text-[10px] font-bold px-14 py-1 shadow-lg z-20"
                    >
                      NEW
                    </div>
                  )}

                  {/* IMAGE */}
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={game.thumbnail_url}
                      alt={game.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  </div>

                  {/* TITLE */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-sm font-medium text-white line-clamp-2">{game.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )
      })}
    </section>
  )
}
