import { useForm } from 'react-hook-form'
import FormField from './FormField'
import { useState } from 'react'
import { KeyIcon } from '@heroicons/react/24/outline'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNewPassword } from '../../hooks/auth/useNewPassword'
import {
  NewPasswordFormData,
  NewPasswordSchema
} from '../../types/auth/newPassword'
import { useSearchParams } from 'react-router-dom'

function Form() {
  const { onSubmit } = useNewPassword()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [searchParams] = useSearchParams()
  const urlToken = searchParams.get('token') ?? ''

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting: formIsSubmitting }
  } = useForm<NewPasswordFormData>({
    resolver: zodResolver(NewPasswordSchema)
  })

  const handleFormSubmit = async (formData: NewPasswordFormData) => {
    try {
      setIsSubmitting(true)
      onSubmit(formData, urlToken) // Pasar el token al servicio
    } catch (error) {
      console.error('Reset password error', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      className="bg-white shadow-lg ring-1 ring-gray-900/5 sm:rounded-xl
          animate-fadeSlideIn [animation-delay:200ms] mb-10"
    >
      <form className="py-8 px-6" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="space-y-6">
          <h2
            className="text-xl font-bold text-center text-gray-900 py-4
                animate-fadeSlideIn [animation-delay:200ms] mx-7"
          >
            Reset your password
          </h2>
          {/* Form Fields con animación secuencial */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="animate-fadeSlideIn [animation-delay:300ms]">
              <FormField
                label="New Password"
                type="password"
                placeholder="Enter your new password"
                name="password"
                register={register}
                error={errors.password}
              />
            </div>
            <div className="animate-fadeSlideIn [animation-delay:300ms]">
              <FormField
                label="Confirm New password"
                type="password"
                placeholder="Confirm your new password"
                name="confirmPassword"
                register={register}
                error={errors.confirmPassword}
              />
            </div>
          </div>
          <input type="hidden" name="token" value={urlToken} />
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
            <KeyIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2" />
            {isSubmitting ? (
              <span className="animate-pulse-subtle">Resending...</span>
            ) : (
              <span>Reset password</span>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
