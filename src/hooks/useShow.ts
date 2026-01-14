import { useQuery } from "@tanstack/react-query"
import { api } from "../api/axios"
import { ShowResponse } from "../types/Show"

export const useGetShows = () =>
  useQuery<ShowResponse>({
    queryKey: ['shows'],
    queryFn: async () => {
      const res = await api.get('/v1/shows')
      return res.data
    },
  })
