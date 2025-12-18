'use client'

export interface GameItem {
  id: string
  title: string
  price: number
  image: string
  category: string
  rating: number
  discount?: number
}
