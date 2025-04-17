import { useForm } from 'react-hook-form'
import {
  DraftEditProductSchema,
  ProductEditFormData
} from '../../types/products/editproduct'
import FormField from './FormField'
import TextareaField from './TextareaField'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import ImageField from './ImageField'
import { ProductById } from '../../types/products/product'
import { useEditProduct } from '../../hooks/products/useEditProduct'
import { ArrowLeftIcon, DocumentCheckIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

interface FormProps {
  readonly data: ProductById
}

function Form({ data }: FormProps) {
  const { product } = data
  const { onSubmit } = useEditProduct(product.id)
  const [file, setFile] = useState<File | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors, isSubmitting }
  } = useForm<ProductEditFormData>({
    resolver: zodResolver(DraftEditProductSchema),
    defaultValues: {
      name: product.name,
      price: product.price,
      stock: product.stock,
      description: product.description
    }
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0]
      setFile(selectedFile)
      setValue('image', selectedFile)
      clearErrors('image')
    } else {
      setFile(null)
      setValue('image', null)
    }
  }

  const handleFormSubmit = (data: ProductEditFormData) => {
    onSubmit(data, file)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Edit Product</h2>
              <p className="mt-1 text-sm text-gray-600">
                Update your product information below
              </p>
            </div>
            <Link
              to={`/details/product/${product.id}`}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Details
            </Link>
          </div>
        </div>

        {/* Form */}
        <div
          className="bg-white shadow-lg ring-1 ring-gray-900/5 sm:rounded-xl
          animate-fadeSlideIn [animation-delay:200ms]"
        >
          <form className="py-8 px-6" onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="space-y-6">
              {/* Current Image Preview */}
              {product.image && (
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-48 h-48 object-contain rounded-lg shadow-sm"
                  />
                  <p className="mt-2 text-sm text-gray-500">Current image</p>
                </div>
              )}

              {/* Form Fields */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <FormField
                  label="Name"
                  type="text"
                  name="name"
                  placeholder="Enter product name"
                  register={register}
                  error={errors.name}
                />
                <FormField
                  label="Price"
                  type="number"
                  name="price"
                  placeholder="Enter product price"
                  register={register}
                  error={errors.price}
                  valueAsNumber
                />
                <FormField
                  label="Stock"
                  type="number"
                  name="stock"
                  placeholder="Enter product stock"
                  register={register}
                  error={errors.stock}
                  valueAsNumber
                />
                <ImageField
                  label="Product Image"
                  name="image"
                  register={register}
                  error={errors.image}
                  placeholder="Select a new image"
                  onChange={handleFileChange}
                />
              </div>

              <TextareaField
                label="Description"
                name="description"
                placeholder="Enter product description"
                register={register}
                error={errors.description}
              />

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    w-full inline-flex justify-center items-center px-6 py-3 border border-transparent 
                    rounded-lg shadow-sm text-base font-medium text-white bg-gradient-to-r 
                    from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                    disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200
                  `}
                >
                  <DocumentCheckIcon className="h-5 w-5 mr-2" />
                  {isSubmitting ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
