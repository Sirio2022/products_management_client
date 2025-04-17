import { FC } from 'react'
import { FormFieldProps } from '../../types/profile/newPassword'
import ErrorMessage from '../ErrorMessage'

const FormField: FC<FormFieldProps> = ({
  type,
  placeholder,
  label,
  name,
  register,
  error,
  valueAsNumber
}) => (
  <div className="mb-4 flex flex-col gap-2">
    <label
      htmlFor={name}
      className="block text-sm font-medium leading-6 text-gray-900 mb-2"
    >
      {label}
    </label>
    <input
      type={type}
      id={name}
      placeholder={placeholder}
      {...register(name, { valueAsNumber })}
      className="block w-full rounded-lg border-0 px-4 py-2.5
               bg-white/50 backdrop-blur-sm
               text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
               placeholder:text-gray-400 
               focus:ring-2 focus:ring-inset focus:ring-indigo-600 
               hover:ring-gray-400
               disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200
               transition-all duration-200
               sm:text-sm sm:leading-6"
    />
    {error && <ErrorMessage>{error.message}</ErrorMessage>}
  </div>
)

export default FormField
