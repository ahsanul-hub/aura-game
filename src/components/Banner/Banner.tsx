'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Banner = {
  id: number
  image: string
  title: string
}

const banners: Banner[] = [
  {
    id: 1,
    title: 'Slide 1',
    image: 'https://images.unsplash.com/photo-1614179924047-e1ab49a0a0cf?q=80&w=1600',
  },
  {
    id: 2,
    title: 'Slide 2',
    image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=1600',
  },
  {
    id: 3,
    title: 'Slide 3',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600',
  },
]

const AUTOPLAY_DELAY = 5000

export default function BannerCarousel() {
  const [index, setIndex] = useState(0)
  const total = banners.length

  // Use useCallback to keep the function stable for the useEffect
  const next = useCallback(() => {
    setIndex((prev) => (prev + 1 >= total ? 0 : prev + 1))
  }, [total])

  const prev = () => {
    setIndex((prev) => (prev - 1 < 0 ? total - 1 : prev - 1))
  }

  // Handle Autoplay
  useEffect(() => {
    const timer = setInterval(next, AUTOPLAY_DELAY)
    return () => clearInterval(timer)
  }, [next, index]) // index in deps resets timer on manual click

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-10">
      <div className="relative group overflow-hidden rounded-2xl bg-gray-100 shadow-2xl">
        {/* TRACK */}
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="w-full flex-shrink-0 relative aspect-[16/9] md:aspect-[21/9]"
            >
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                priority={banner.id === 1}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          ))}
        </div>

        {/* NAVIGATION ARROWS - Hidden on mobile, shown on hover on desktop */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-2 md:p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-2 md:p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* PAGINATION DOTS */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 transition-all duration-300 rounded-full ${
                index === i ? 'w-8 bg-white' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
