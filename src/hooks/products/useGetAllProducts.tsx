import { useQuery } from '@tanstack/react-query'
import { getAllProducts } from '../../services/ProductsAPI'

export function useGetAllProducts() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
    retry: 1
  })

  if (isLoading)
    return {
      products: [],
      isLoading: true
    }

  return {
    products: data || [],
    isLoading: false,
    error
  }
}
