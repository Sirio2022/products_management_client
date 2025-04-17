import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  DraftProductSchema,
  ProductFormData
} from '../../types/products/newproduct'
import FormField from './FormField'
import TextareaField from './TextareaField'
import ImageField from './ImageField'
import { usePostProducts } from '../../hooks/products/usePostProducts'
import { useState } from 'react'
import { ArrowLeftIcon, DocumentPlusIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

export default function CreateProductForm() {
  const [file, setFile] = useState<File | null>(null)
  const { onSubmit } = usePostProducts()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors, isSubmitting: formIsSubmitting }
  } = useForm<ProductFormData>({
    resolver: zodResolver(DraftProductSchema)
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

  const handleFormSubmit = async (data: ProductFormData) => {
    try {
      setIsSubmitting(true)
      onSubmit(data, file)
    } catch (error) {
      console.error('Error creating product:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header con animación de entrada */}
        <div className="mb-8 animate-fadeSlideIn">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                Create New Product
              </h2>
              <p className="text-sm text-gray-600">
                Fill in the product information below
              </p>
            </div>
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 rounded-lg
                bg-white shadow-sm ring-1 ring-gray-900/5 text-sm font-medium text-gray-700
                hover:bg-gray-50 hover:ring-gray-900/10 hover:shadow
                active:bg-gray-100 active:scale-95
                transition-all duration-200"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Products
            </Link>
          </div>
        </div>

        {/* Form con animación de entrada retrasada */}
        <div
          className="bg-white shadow-lg ring-1 ring-gray-900/5 sm:rounded-xl
          animate-fadeSlideIn [animation-delay:200ms]"
        >
          <form className="py-8 px-6" onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="space-y-6">
              {/* Form Fields con animación secuencial */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="animate-fadeSlideIn [animation-delay:300ms]">
                  <FormField
                    label="Name"
                    type="text"
                    name="name"
                    placeholder="Enter product name"
                    register={register}
                    error={errors.name}
                  />
                </div>
                <div className="animate-fadeSlideIn [animation-delay:400ms]">
                  <FormField
                    label="Price"
                    type="number"
                    name="price"
                    placeholder="Enter product price"
                    register={register}
                    error={errors.price}
                    valueAsNumber
                  />
                </div>
                <div className="animate-fadeSlideIn [animation-delay:500ms]">
                  <FormField
                    label="Stock"
                    type="number"
                    name="stock"
                    placeholder="Enter product stock"
                    register={register}
                    error={errors.stock}
                    valueAsNumber
                  />
                </div>
                <div className="animate-fadeSlideIn [animation-delay:600ms]">
                  <ImageField
                    label="Product Image"
                    name="image"
                    register={register}
                    error={errors.image}
                    placeholder="Select a product image"
                    onChange={handleFileChange}
                  />
                </div>
              </div>

              <div className="animate-fadeSlideIn [animation-delay:700ms]">
                <TextareaField
                  label="Description"
                  name="description"
                  placeholder="Enter product description"
                  register={register}
                  error={errors.description}
                />
              </div>

              {/* Submit Button con animaciones */}
              <div className="pt-6 animate-fadeSlideIn [animation-delay:800ms]">
                <button
                  type="submit"
                  disabled={isSubmitting || formIsSubmitting}
                  className={`
                    relative w-full inline-flex justify-center items-center px-6 py-3
                    rounded-lg shadow-sm text-base font-medium text-white
                    bg-gradient-to-r from-indigo-600 to-blue-600
                    hover:from-indigo-700 hover:to-blue-700
                    active:from-indigo-800 active:to-blue-800
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                    disabled:opacity-50 disabled:cursor-not-allowed
                    transition-all duration-200 overflow-hidden group
                    ${!isSubmitting && 'animate-pulse-subtle'}
                  `}
                >
                  {/* Efecto de brillo */}
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600/0 via-white/10 to-blue-600/0
                    opacity-0 group-hover:opacity-100 group-active:opacity-0
                    animate-shimmer"
                  ></span>

                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Creating...
                    </>
                  ) : (
                    <>
                      <DocumentPlusIcon className="h-5 w-5 mr-2" />
                      Create Product
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
