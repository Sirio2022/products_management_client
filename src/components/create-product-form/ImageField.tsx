import { FC, useState } from 'react'
import { FormFieldProps } from '../../types/products/newproduct'
import ErrorMessage from '../ErrorMessage'
import {
  PhotoIcon,
  ArrowUpTrayIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'

const ImageField: FC<FormFieldProps> = ({
  label,
  name,
  placeholder,
  register,
  error,
  onChange
}) => {
  const [fileName, setFileName] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) {
      setFileName(file.name)
    } else {
      setFileName(null)
    }

    if (onChange) {
      onChange(e)
    }
  }

  const handleRemoveFile = () => {
    setFileName(null)
    if (onChange) {
      // Crear un evento sintético correcto
      const input = document.createElement('input')
      input.type = 'file'
      const event = new Event('change', {
        bubbles: true
      }) as unknown as React.ChangeEvent<HTMLInputElement>
      Object.defineProperty(event, 'target', { writable: false, value: input })
      onChange(event)
    }
  }

  return (
    <div className="relative">
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <div
          className="group relative flex justify-center rounded-lg border-2 border-dashed border-gray-300/50 
          px-6 py-10 transition-colors duration-200 
          hover:border-indigo-300/70 hover:bg-indigo-50/50
          active:border-indigo-400/70 active:bg-indigo-100/50"
        >
          <div className="text-center">
            <PhotoIcon
              className="mx-auto h-12 w-12 text-gray-300 transition-colors duration-200
                group-hover:text-indigo-400 group-active:text-indigo-500"
              aria-hidden="true"
            />
            <div className="mt-4">
              <label
                htmlFor={name}
                className="relative cursor-pointer rounded-md bg-white/80 backdrop-blur-sm
                  px-3 py-2 text-sm font-semibold text-indigo-600 shadow-sm ring-1 ring-inset ring-gray-300/50
                  hover:ring-indigo-300 hover:bg-white hover:text-indigo-500
                  active:ring-indigo-400 active:bg-indigo-50 active:scale-95
                  focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2
                  transition-all duration-200"
              >
                <ArrowUpTrayIcon className="h-4 w-4 inline-block mr-1" />
                <span>Select file</span>
                <input
                  id={name}
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  {...register(name)}
                  onChange={handleFileChange}
                />
              </label>
              {fileName ? (
                <div className="mt-3 flex items-center justify-center gap-2 text-sm text-gray-600">
                  <span className="truncate max-w-[200px]">{fileName}</span>
                  <button
                    type="button"
                    onClick={handleRemoveFile}
                    className="p-1 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors"
                  >
                    <XMarkIcon className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
              ) : (
                <p className="mt-2 text-sm text-gray-500">
                  {placeholder ?? 'or drag and drop'}
                </p>
              )}
            </div>
          </div>

          {/* Efecto de brillo al hover */}
          <div className="absolute inset-0 -z-10 overflow-hidden rounded-lg">
            <div
              className="absolute inset-0 bg-gradient-to-r from-indigo-100/0 via-indigo-100/30 to-indigo-100/0
              opacity-0 group-hover:opacity-100 group-active:opacity-0
              translate-x-[-100%] group-hover:translate-x-[100%]
              transition-all duration-1000 ease-in-out"
            ></div>
          </div>
        </div>
      </div>
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </div>
  )
}

export default ImageField
