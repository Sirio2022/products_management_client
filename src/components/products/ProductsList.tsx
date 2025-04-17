import { Link } from 'react-router-dom'
import { Product } from '../../types/products/product'
import { formatoMoneda } from '../../utils/formatoMoneda'
import { useDeleteProduct } from '../../hooks/products/useDeleteProduct'
import {
  PencilSquareIcon,
  TrashIcon,
  ShoppingBagIcon,
  ExclamationTriangleIcon,
  EyeIcon
} from '@heroicons/react/24/outline'

interface ProductsProps {
  readonly products: Product[]
}

export default function ProductsList({ products }: ProductsProps) {
  const { onDelete } = useDeleteProduct()

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <ShoppingBagIcon className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-sm font-medium text-gray-900">No products</h3>
        <p className="mt-1 text-sm text-gray-500">
          Get started by creating a new product.
        </p>
        <div className="mt-6">
          <Link
            to="/add/product"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add new product
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white rounded-xl shadow-sm ring-1 ring-gray-200 hover:shadow-lg hover:ring-gray-300 transition-all duration-300"
          >
            {/* Badge de Out of Stock */}
            {product.stock === 0 && (
              <div className="absolute top-3 left-3 z-10">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 shadow-sm">
                  <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                  Out of Stock
                </div>
              </div>
            )}

            {/* Imagen con overlay y botón de ver detalles */}
            <Link
              to={`/details/product/${product.id}`}
              className="block relative aspect-square overflow-hidden rounded-t-xl bg-gray-100"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/90 text-gray-900 shadow-lg backdrop-blur-sm">
                  <EyeIcon className="h-5 w-5 mr-2" />
                  View Details
                </span>
              </div>
            </Link>

            {/* Contenido */}
            <div className="p-4 sm:p-6">
              <div className="min-h-[100px]">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300 truncate">
                  <Link to={`/details/product/${product.id}`}>
                    {product.name}
                  </Link>
                </h3>
                <p className="mt-1 sm:mt-2 text-sm text-gray-600 line-clamp-2">
                  {product.description}
                </p>
              </div>

              {/* Precio y Stock */}
              <div className="mt-4 space-y-3">
                <div className="flex flex-wrap items-center gap-2 justify-between">
                  <div className="inline-flex items-center px-2 py-1 rounded-md bg-gray-100">
                    <ShoppingBagIcon className="h-4 w-4 text-gray-500 mr-1.5 flex-shrink-0" />
                    <span
                      className={`text-sm font-medium ${
                        product.stock > 10
                          ? 'text-green-700'
                          : 'text-yellow-700'
                      }`}
                    >
                      {product.stock} units
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-base sm:text-lg font-bold text-gray-900">
                      {formatoMoneda(product.price)}
                    </span>
                  </div>
                </div>
                {product.stock > 0 && (
                  <div className="text-center">
                    <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
                      In stock
                    </span>
                  </div>
                )}
              </div>

              {/* Botones */}
              <div className="mt-4 sm:mt-6 grid grid-cols-1 gap-2 sm:gap-3">
                <Link
                  to={`/edit/product/${product.id}`}
                  className="inline-flex items-center justify-center px-2 sm:px-4 py-2 bg-yellow-50 text-yellow-700 hover:bg-yellow-100 rounded-lg font-medium transition-colors duration-300 text-sm"
                >
                  <PencilSquareIcon className="h-4 sm:h-5 w-4 sm:w-5 mr-1 sm:mr-1.5 flex-shrink-0" />
                  <span className="truncate">Edit</span>
                </Link>
                <button
                  onClick={() => onDelete(product.id)}
                  className="inline-flex items-center justify-center px-2 sm:px-4 py-2 bg-red-50 text-red-700 hover:bg-red-100 rounded-lg font-medium transition-colors duration-300 text-sm"
                >
                  <TrashIcon className="h-4 sm:h-5 w-4 sm:w-5 mr-1 sm:mr-1.5 flex-shrink-0" />
                  <span className="truncate">Delete</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
