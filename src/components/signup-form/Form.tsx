import { useForm } from 'react-hook-form'
import { SignupFormData, signupSchema } from '../../types/auth/signup'
import FormField from './FormField'
import { useSignup } from '../../hooks/auth/useSignup'
import { UserPlusIcon } from '@heroicons/react/24/outline'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom'

function Form() {
  const { onSubmit } = useSignup()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema)
  })

  const handleFormSubmit = async (data: SignupFormData) => {
    try {
      onSubmit(data)
      reset()
    } catch (error) {
      console.error('Error signing up:', error)
    }
  }
  return (
    <div
      className="bg-white shadow-lg ring-1 ring-gray-900/5 sm:rounded-xl
          animate-fadeSlideIn [animation-delay:200ms] mb-10"
    >
      <form
        className="max-w-lg py-8 px-6"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className="space-y-6">
          <h2
            className="text-xl font-bold text-center text-gray-900 py-4
                animate-fadeSlideIn [animation-delay:200ms]"
          >
            Create an Account
          </h2>
          {/* Form Fields con animación secuencial */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="animate-fadeSlideIn [animation-delay:300ms]">
              <FormField
                label="Name"
                type="text"
                placeholder="Enter your name"
                name="name"
                register={register}
                error={errors.name}
              />
            </div>
            <div className="animate-fadeSlideIn [animation-delay:400ms]">
              <FormField
                label="Email"
                type="email"
                placeholder="Enter your email"
                name="email"
                register={register}
                error={errors.email}
              />
            </div>
            <div className="animate-fadeSlideIn [animation-delay:500ms]">
              <FormField
                label="Password"
                type="password"
                placeholder="Enter your password"
                name="password"
                register={register}
                error={errors.password}
              />
            </div>
            <div className="animate-fadeSlideIn [animation-delay:600ms]">
              <FormField
                label="Confirm Password"
                type="password"
                placeholder="Confirm your password"
                name="confirmPassword"
                register={register}
                error={errors.confirmPassword}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`
                    w-full inline-flex justify-center items-center px-6 py-3 border border-transparent 
                    rounded-lg shadow-sm text-base font-medium text-white bg-gradient-to-r 
                    from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                    disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200
                    cursor-pointer animate-pulse-subtle
                  `}
          >
            <UserPlusIcon className="h-5 w-5 mr-2" />
            {isSubmitting ? 'Creating account...' : 'Sign Up'}
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
            Already have an account? Log in
          </Link>
        </nav>
      </form>
    </div>
  )
}
export default Form
