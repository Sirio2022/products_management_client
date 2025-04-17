import { Link } from 'react-router-dom'
import { Product } from '../../types/products/product'
import {
  PencilSquareIcon,
  ArrowLeftIcon,
  CurrencyDollarIcon,
  ClipboardDocumentCheckIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline'

interface ProductDetailsProps {
  readonly product: Product
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="max-w-4xl mx-auto my-10">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="md:flex">
          {/* Imagen */}
          <div className="md:w-1/2 bg-gradient-to-br from-gray-50 to-gray-100 p-8">
            <div className="relative group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img
                className="w-full h-[400px] object-contain bg-white rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                src={product.image}
                alt={product.name}
              />
              {/* Efecto de brillo */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 
                opacity-0 group-hover:opacity-100 
                translate-x-[-100%] group-hover:translate-x-[100%]
                transition-all duration-1000 ease-in-out pointer-events-none"
              />
            </div>
          </div>

          {/* Detalles */}
          <div className="md:w-1/2 p-8">
            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-1">
                Product ID: {product.id}
              </p>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  <ShoppingBagIcon className="h-4 w-4 mr-1" />
                  In Stock: {product.stock}
                </div>
                <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  <CurrencyDollarIcon className="h-4 w-4 mr-1" />$
                  {product.price.toFixed(2)}
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Información adicional */}
            <div className="border-t border-gray-200 pt-6 space-y-4">
              <div className="flex justify-between items-center">
                <div className="inline-flex items-center text-gray-600">
                  <ClipboardDocumentCheckIcon className="h-5 w-5 mr-2" />
                  <span>Availability</span>
                </div>
                <span
                  className={`font-medium ${
                    product.stock > 0 ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div className="inline-flex items-center text-gray-600">
                  <CurrencyDollarIcon className="h-5 w-5 mr-2" />
                  <span>Price</span>
                </div>
                <span className="font-medium text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div className="inline-flex items-center text-gray-600">
                  <ShoppingBagIcon className="h-5 w-5 mr-2" />
                  <span>Stock</span>
                </div>
                <span className="font-medium text-gray-900">
                  {product.stock} units
                </span>
              </div>
            </div>

            {/* Botones */}
            <div className="mt-8 space-x-4 flex">
              <Link
                to={`/edit/product/${product.id}`}
                className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <PencilSquareIcon className="h-5 w-5" />
                <span>Edit Product</span>
              </Link>
              <Link
                to="/"
                className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <ArrowLeftIcon className="h-5 w-5" />
                <span>Back to Products</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
