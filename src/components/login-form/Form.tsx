import { useForm } from 'react-hook-form'
import { LoginFormData, loginSchema } from '../../types/auth/login'
import FormField from './FormField'
import { useLogin } from '../../hooks/auth/useLogin'
import { UserIcon } from '@heroicons/react/24/outline'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom'

function Form() {
  const { onSubmit } = useLogin()

  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting }
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  })

  const handleFormSubmit = async (data: LoginFormData) => {
    try {
      await onSubmit(data)
    } catch (error) {
      console.error('Error loggin :', error)
    }
  }

  return (
    <>
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
            Welcome Back!
          </h2>
          <FormField
            label="Email"
            type="email"
            placeholder="Enter your email"
            name="email"
            register={register}
            error={errors.email}
          />

          <FormField
            label="Password"
            type="password"
            placeholder="Enter your password"
            name="password"
            register={register}
            error={errors.password}
          />

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
            <UserIcon className="h-5 w-5 mr-2" />
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>

          <p className="flex items-center justify-center text-gray-500 mb-2">
            <Link
              to="/auth/forgot-password"
              className="text-indigo-400 hover:text-indigo-500 underline text-lg"
            >
              Forgot your password?
            </Link>
          </p>
        </form>
      </div>

      {/* Navigation Links */}

      <nav
        className="mt-2 text-sm font-medium text-gray-500 hover:text-gray-700
       transition-all duration-200 mb-10"
      >
        <p className="flex items-center justify-center text-lime-600 mb-2 ">
          Don't have an account yet?
        </p>
        <Link
          to="/auth/signup"
          className="flex items-center justify-center text-indigo-400 hover:text-indigo-500 underline text-lg"
        >
          Create your Free account now
        </Link>
      </nav>
    </>
  )
}

export default Form
