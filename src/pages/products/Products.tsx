import { Link } from 'react-router-dom'
import { useGetAllProducts } from '../../hooks/products/useGetAllProducts'
import ProductsList from '../../components/products/ProductsList'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import Spinner from '../../components/spinner/Spinner'
import ErrorMessage from '../../components/ErrorMessage'

export default function Products() {
  const { products, isLoading, error } = useGetAllProducts()

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner />
      </div>
    )
  }

  if (error) {
    return (
      <>
        <div className="flex justify-center items-center mb-20">
          <ErrorMessage>{error.message}</ErrorMessage>
        </div>

        <div className="flex justify-center items-center">
          <Link
            to="/new/product"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
          >
            <PlusCircleIcon className="h-5 w-5 mr-2" />
            Add new product
          </Link>
        </div>
      </>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Products
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              A list of all the products in your inventory.
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <Link
              to="/new/product"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
            >
              <PlusCircleIcon className="h-5 w-5 mr-2" />
              Add new product
            </Link>
          </div>
        </div>
        <div className="mt-8">
          <ProductsList products={products} />
        </div>
      </div>
    </div>
  )
}
