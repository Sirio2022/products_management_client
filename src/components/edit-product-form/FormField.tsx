import { FC } from 'react'
import { FormEditFieldProps } from '../../types/products/editproduct'
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'

const FormField: FC<FormEditFieldProps> = ({
  label,
  type,
  name,
  placeholder,
  register,
  error,
  valueAsNumber
}) => (
  <div className="mb-6">
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
    </label>
    <div className="relative rounded-md shadow-sm">
      <input
        className={`
          block w-full rounded-lg border-0 py-3 px-4 text-gray-900 ring-1 ring-inset 
          placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6
          ${
            error
              ? 'ring-red-300 focus:ring-red-500 text-red-900'
              : 'ring-gray-300 focus:ring-indigo-600'
          }
          transition-all duration-200
        `}
        type={type}
        placeholder={placeholder}
        {...register(name, { valueAsNumber })}
      />
      {error && (
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
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

export default FormField
