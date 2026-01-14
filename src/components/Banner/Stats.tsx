export default function Stats() {
  return (
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
  )
}
