import { useQuery } from '@tanstack/react-query'
import { GetGameResponse, GetGamesResponse } from '../types/Game'
import { api } from '../api/axios'

export function useGetGames() {
  const { data, isLoading } = useQuery<GetGamesResponse>({
    queryKey: ['get-games'],
    queryFn: async () => {
      const res = await api.get('/games')
      return res.data
    },
  })

  return { data, isLoading }
}

export function useGetGamesBySlug(slug: string) {
  const { data, isLoading } = useQuery<GetGameResponse>({
    queryKey: ['get-games-slug', slug],
    queryFn: async () => {
      const res = await api.get(`/games/slug/${slug}`)
      return res.data
    },
  })

  return { data, isLoading }
}
