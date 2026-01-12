export interface Meta {
  page: number
  limit: number
  total_data: number
  total_page: number
}

export interface ApiResponse<T> {
  status: string
  message: string
  data: T
}

export interface ApiResponseWithMeta<T> {
  status: string
  message: string
  data: T
  meta: Meta
}
