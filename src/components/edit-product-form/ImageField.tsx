import { FC } from 'react'
import { FormEditFieldProps } from '../../types/products/editproduct'
import { PhotoIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid'

interface ImageFieldProps
  extends Omit<FormEditFieldProps, 'type' | 'valueAsNumber'> {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ImageField: FC<ImageFieldProps> = ({
  label,
  name,
  placeholder,
  register,
  error,
  onChange
}) => (
  <div className="mb-6">
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
    </label>
    <div className="relative">
      <div
        className={`
        mt-1 flex justify-center rounded-lg border-2 border-dashed px-6 py-10
        ${
          error
            ? 'border-red-300 bg-red-50'
            : 'border-gray-300 hover:border-indigo-400'
        }
        transition-colors duration-200
      `}
      >
        <div className="text-center">
          <PhotoIcon
            className={`mx-auto h-12 w-12 ${
              error ? 'text-red-400' : 'text-gray-400'
            }`}
            aria-hidden="true"
          />
          <div className="mt-4 flex text-sm leading-6 text-gray-600">
            <label
              htmlFor={name}
              className={`
                relative cursor-pointer rounded-md font-semibold 
                ${
                  error
                    ? 'text-red-600 hover:text-red-500'
                    : 'text-indigo-600 hover:text-indigo-500'
                }
              `}
            >
              <span>Upload a file</span>
              <input
                id={name}
                type="file"
                className="sr-only"
                accept="image/*"
                {...register(name)}
                onChange={onChange}
              />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs leading-5 text-gray-600">{placeholder}</p>
        </div>
      </div>
      {error && (
        <div className="absolute top-3 right-3">
          <ExclamationCircleIcon
            className="h-5 w-5 text-red-500"
            aria-hidden="true"
          />
        </div>
      )}
    </div>
    {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
  </div>
)

export default ImageField
