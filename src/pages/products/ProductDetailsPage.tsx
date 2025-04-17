import { useParams } from 'react-router-dom'
import { Product } from '../../types/products/product'
import { useGetProductById } from '../../hooks/products/useGetProductById'
import Spinner from '../../components/spinner/Spinner'
import NoProductsError from '../../components/NoProductsError'
import ProductDetails from '../../components/products/ProductDetails'

export default function ProductDetailsPage() {
  const params = useParams<{ productId: Product['id'] }>()
  const id = params.productId

  const { data, isLoading, error } = useGetProductById(id!)

  return (
    <>
      {data && <ProductDetails product={data.product} />}
      {isLoading && <Spinner />}
      {error && <NoProductsError>{error.message}</NoProductsError>}
    </>
  )
}
