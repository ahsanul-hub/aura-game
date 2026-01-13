'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Banner = {
  id: number
  image: string
}

const banners: Banner[] = [
  { id: 1, image: 'https://images.unsplash.com/photo-1614179924047-e1ab49a0a0cf?q=80&w=1600' },
  { id: 2, image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=1600' },
  { id: 3, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600' },
]

const SLIDE_WIDTH = 720
const SLIDE_GAP = 40
const AUTOPLAY = 5000 // 5 detik

export default function BannerCarousel() {
  const [index, setIndex] = useState(0)
  const total = banners.length
  const timerRef = useRef<NodeJS.Timeout>()

  const next = () => setIndex((prev) => (prev + 1 >= total ? 0 : prev + 1))
  const prev = () => setIndex((prev) => (prev - 1 < 0 ? total - 1 : prev - 1))

  // autoplay
  useEffect(() => {
    timerRef.current = setInterval(next, AUTOPLAY)
    return () => timerRef.current && clearInterval(timerRef.current)
  }, [])

  const resetAutoplay = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(next, AUTOPLAY)
  }

  return (
    <div className="w-full flex justify-center mt-10 relative">
      <div className="relative w-[800px] h-[400px] overflow-hidden">
        {/* TRACK */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * (SLIDE_WIDTH + SLIDE_GAP)}px)`,
          }}
        >
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="flex-shrink-0 w-[720px] h-full mx-[20px] relative rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={banner.image}
                alt={`Banner ${banner.id}`}
                width={720}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* ARROW DI LUAR TRACK */}
        <button
          onClick={() => {
            prev()
            resetAutoplay()
          }}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full z-10"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={() => {
            next()
            resetAutoplay()
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full z-10"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}
