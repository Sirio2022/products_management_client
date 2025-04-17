import { useForm } from 'react-hook-form'
import FormField from './FormField'
import { useState } from 'react'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom'
import { NewCodeFormData, NewCodeSchema } from '../../types/auth/confirmAccount'
import { useResendPasswordCode } from '../../hooks/auth/useResendPasswordCode'

function Form() {
  const { onSubmit } = useResendPasswordCode()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting: formIsSubmitting }
  } = useForm<NewCodeFormData>({
    resolver: zodResolver(NewCodeSchema)
  })

  const handleFormSubmit = async (data: NewCodeFormData) => {
    try {
      setIsSubmitting(true)
      onSubmit(data)
      reset() // Reset the form after submission
    } catch (error) {
      console.error('Error loggin :', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      className="bg-white shadow-lg ring-1 ring-gray-900/5 sm:rounded-xl
    animate-fadeSlideIn [animation-delay:200ms]"
    >
      <form
        className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-md space-y-5"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <h2
          className="text-xl font-bold text-center text-gray-900 py-4
                animate-fadeSlideIn [animation-delay:200ms]"
        >
          Forgot Password?
        </h2>
        <FormField
          label="Email"
          type="email"
          placeholder="Enter your email"
          name="email"
          register={register}
          error={errors.email}
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={formIsSubmitting || isSubmitting}
          className={`
                    w-full inline-flex justify-center items-center px-6 py-3 border border-transparent 
                    rounded-lg shadow-sm text-base font-medium text-white bg-gradient-to-r 
                    from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                    disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200
                    cursor-pointer animate-pulse-subtle
                  `}
        >
          <EnvelopeIcon className="h-5 w-5 mr-2" />
          {isSubmitting ? 'Sending...' : 'Send Code'}
        </button>

        <nav
          className="flex justify-center mt-6 text-sm font-medium text-gray-500 hover:text-gray-700
            transition-all duration-200"
        >
          <Link
            to="/auth/login"
            className="text-indigo-600 hover:text-indigo-500"
          >
            Already have an account? Login
          </Link>
        </nav>
      </form>
    </div>
  )
}

export default Form
