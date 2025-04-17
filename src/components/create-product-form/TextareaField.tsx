import { FC } from 'react'
import { FormFieldProps } from '../../types/products/newproduct'
import ErrorMessage from '../ErrorMessage'
import { DocumentTextIcon } from '@heroicons/react/24/outline'

const TextareaField: FC<FormFieldProps> = ({
  label,
  name,
  placeholder,
  register,
  error
}) => (
  <div className="relative col-span-full">
    <label
      htmlFor={name}
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      {label}
    </label>
    <div className="mt-2">
      <div className="group relative">
        {/* Icono decorativo */}
        <div
          className="pointer-events-none absolute left-3 top-3 text-gray-400 transition-colors duration-200
          group-focus-within:text-indigo-500"
        >
          <DocumentTextIcon className="h-5 w-5" />
        </div>

        <textarea
          id={name}
          rows={4}
          className="block w-full rounded-lg border-0 py-2.5 pl-11 pr-4
            bg-white/50 backdrop-blur-sm
            text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
            placeholder:text-gray-400
            focus:ring-2 focus:ring-inset focus:ring-indigo-600
            disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200
            transition-shadow duration-200
            hover:ring-gray-400
            sm:text-sm sm:leading-6"
          placeholder={placeholder}
          {...register(name)}
        />

        {/* Efecto de brillo en el borde */}
        <div
          className="absolute inset-0 rounded-lg transition-opacity duration-200
          bg-gradient-to-r from-indigo-500/0 via-indigo-500/10 to-indigo-500/0
          opacity-0 group-hover:opacity-100 group-focus-within:opacity-0
          pointer-events-none"
        ></div>
      </div>
    </div>
    {error && <ErrorMessage>{error.message}</ErrorMessage>}
  </div>
)

export default TextareaField
