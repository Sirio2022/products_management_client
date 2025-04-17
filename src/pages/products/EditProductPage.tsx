import { Link, useParams } from 'react-router-dom'
import { useGetProductById } from '../../hooks/products/useGetProductById'
import Spinner from '../../components/spinner/Spinner'
import NoProductsError from '../../components/NoProductsError'
import Form from '../../components/edit-product-form/Form'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function EditProduct() {
  const params = useParams<{ productId: string }>()
  const id = params.productId

  const { data, isLoading, error } = useGetProductById(id!)

  return (
    <>
      <div className=" flex flex-col items-center justify-center md:flex-row md:justify-between md:items-center">
        <h2 className="text-4xl font-extrabold text-slate-500 uppercase">
          Edit Product
        </h2>

        <Link
          to="/"
          className="inline-flex items-center px-4 py-2 rounded-lg
                bg-white shadow-sm ring-1 ring-gray-900/5 text-sm font-medium text-gray-700
                hover:bg-gray-50 hover:ring-gray-900/10 hover:shadow
                active:bg-gray-100 active:scale-95
                transition-all duration-200 mb-10"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back to Products
        </Link>
      </div>

      {data && <Form data={data} />}

      {isLoading && <Spinner />}
      {error && <NoProductsError>{error.message}</NoProductsError>}
    </>
  )
}
