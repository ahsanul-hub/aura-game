import { useMutation, useQuery } from '@tanstack/react-query'
import { api } from '../api/axios'
import { GetTransactionResponse } from '../types/Transaction'
import { toast } from 'sonner'
import axios from 'axios'
import { OrderFormValues } from '../schemas/order_schema'

export function useCreateTransaction() {
  return useMutation({
    mutationFn: async (payload: any) => {
      const res = await api.post('/v1/transactions', payload)
      return res.data
    },
    onError: () => {
      toast.error('Gagal membuat transaksi')
    },
  })
}

export function useGetTransaction(id: string) {
  const { data, isLoading } = useQuery<GetTransactionResponse>({
    queryKey: ['get-transaction-detail', id],
    queryFn: async () => {
      const res = await api.get(`/v1/transactions/${id}`)
      return res.data
    },
  })

  return { data, isLoading }
}

export function useCheckID(payload: OrderFormValues, country: string, code: string) {
  return useQuery({
    queryKey: ['check-id', code, payload.game_data],
    enabled: false,
    queryFn: async () => {
      const res = await axios.post(
        'https://dev.lapakgaming.com/api/uid-check',
        {},
        {
          params: {
            category_code: code,
            ...payload.game_data,
          },
          headers: {
            Authorization: `Bearer 04fd8332dd54203687042170740acaf08d775ad9d4be2f83b256f4e3bb16f6bb`,
            'X-COUNTRY': country,
          },
        }
      )

      return res.data
    },
  })
}
