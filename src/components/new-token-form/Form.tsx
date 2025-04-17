import { useForm } from 'react-hook-form'
import FormField from './FormField'
import { useState } from 'react'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom'
import { useResendCode } from '../../hooks/auth/useResendCode'
import { NewCodeFormData, NewCodeSchema } from '../../types/auth/confirmAccount'

function Form() {
  const { onSubmit } = useResendCode()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting: formIsSubmitting }
  } = useForm<NewCodeFormData>({
    resolver: zodResolver(NewCodeSchema)
  })

  const handleFormSubmit = async (data: NewCodeFormData) => {
    try {
      setIsSubmitting(true)
      onSubmit(data)
    } catch (error) {
      console.error('Error loggin :', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      className="bg-amber-100 shadow-lg ring-1 ring-gray-900/5 sm:rounded-xl
          animate-fadeSlideIn [animation-delay:200ms]"
    >
      <h1
        className="text-xl font-bold text-center text-gray-900 py-4
                animate-fadeSlideIn [animation-delay:200ms] mx-7"
      >
        Resend Confirmation Code
      </h1>
      <form className="py-8 px-6" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="space-y-6">
          {/* Form Fields con animación secuencial */}
          <div className="grid grid-cols-2">
            <div className="col-span-2 animate-fadeSlideIn [animation-delay:300ms]">
              <FormField
                label="Email"
                type="email"
                placeholder="Enter your email"
                name="email"
                register={register}
                error={errors.email}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={formIsSubmitting || isSubmitting}
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
            <EnvelopeIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2" />
            {isSubmitting ? (
              <span className="animate-pulse-subtle">Resending...</span>
            ) : (
              <span>Resend code</span>
            )}
          </button>
        </div>
        <nav
          className="mt-6 text-sm font-medium text-gray-500 hover:text-gray-700
            transition-all duration-200"
        >
          <Link
            to="/auth/login"
            className="text-indigo-600 hover:text-indigo-500"
          >
            Already have an account? Login
          </Link>

          <span className="mx-2">|</span>

          <Link
            to="/auth/forgot-password"
            className="text-indigo-600 hover:text-indigo-500"
          >
            Forgot password?
          </Link>
        </nav>
      </form>
    </div>
  )
}

export default Form
