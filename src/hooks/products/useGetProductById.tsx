import { getProductById } from '../../services/ProductsAPI'
import { Product } from '../../types/products/product'
import { useQuery } from '@tanstack/react-query'

export function useGetProductById(id: Product['id']) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['editProduct', id],
    queryFn: () => getProductById(id),
    retry: 1
  })

  if (isLoading) {
    return { product: {}, isLoading: true }
  }

  return {
    data,
    isLoading: false,
    error
  }
}
