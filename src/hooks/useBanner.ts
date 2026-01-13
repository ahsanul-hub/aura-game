import { useQuery } from '@tanstack/react-query'
import { api } from '../api/axios'
import { BannerResponse } from '../types/Banner'

export const useGetBanners = () =>
  useQuery<BannerResponse>({
    queryKey: ['banners'],
    queryFn: async () => {
      const res = await api.get('/v1/banners')
      return res.data
    },
  })
