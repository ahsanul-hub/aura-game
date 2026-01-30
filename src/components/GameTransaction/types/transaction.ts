export interface CreateOrderRequest {
  email: string
  game_data: Record<string, string>
  package: GamePackage
  payment: PaymentInfo
  provider_id: string
  game_id: string
  amount: number
}

export interface GamePackage {
  product_id: string
  product_name: string
  product_sku: string
}

export interface PaymentInfo {
  payment_method_id: string
  payment_channel: string
}
