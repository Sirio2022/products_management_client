import { FC } from 'react'
import { FormFieldProps } from '../../types/products/newproduct'
import ErrorMessage from '../ErrorMessage'

const FormField: FC<FormFieldProps> = ({
  label,
  type,
  name,
  placeholder,
  register,
  error,
  valueAsNumber
}) => (
  <div className="relative">
    <label
      htmlFor={name}
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      {label}
    </label>
    <div className="mt-2">
      <div className="group relative">
        <input
          type={type}
          id={name}
          className="block w-full rounded-lg border-0 px-4 py-2.5
            bg-white/50 backdrop-blur-sm
            text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
            placeholder:text-gray-400 
            focus:ring-2 focus:ring-inset focus:ring-indigo-600 
            hover:ring-gray-400
            disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200
            transition-all duration-200
            sm:text-sm sm:leading-6"
          placeholder={placeholder}
          {...register(name, { valueAsNumber })}
        />

        {/* Efecto de brillo en el borde */}
        <div
          className="absolute inset-0 rounded-lg transition-opacity duration-200
          bg-gradient-to-r from-indigo-500/0 via-indigo-500/10 to-indigo-500/0
          opacity-0 group-hover:opacity-100 group-focus-within:opacity-0
          pointer-events-none -z-10"
        ></div>
      </div>
    </div>
    {error && <ErrorMessage>{error.message}</ErrorMessage>}
  </div>
)

export default FormField
