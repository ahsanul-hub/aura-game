import { useMutation } from '@tanstack/react-query'
import { api } from '../../../api/axios'
import axios from 'axios'
import { toast } from 'sonner'

type CheckIDPayloadV2 = {
  category_code: string
  game_id: string
  provider_id: string
  game_data: Record<string, string>
}

export function useCheckIDV2() {
  return useMutation({
    mutationFn: async (payload: CheckIDPayloadV2) => {
      const res = await api.post('/v1/transactions/check-id', payload)

      return res.data
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status
        if (status === 400) {
          toast.error('Akun tidak ditemukan')
          return
        }
      }
      toast.error('Gagal cek ID')
    },
  })
}
