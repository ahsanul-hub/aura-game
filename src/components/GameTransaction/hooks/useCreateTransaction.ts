import { useMutation } from "@tanstack/react-query"
import { CreateOrderRequest } from "../types/transaction"
import { api } from "../../../api/axios"
import { toast } from "sonner"

export function useCreateTransactionV2() {
  return useMutation({
    mutationFn: async (payload: CreateOrderRequest) => {
      const res = await api.post('/v1/transactions', payload)
      return res.data
    },
    onError: () => {
      toast.error('Gagal membuat transaksi')
    },
  })
}