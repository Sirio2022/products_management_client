import { AuthenticatedUser } from '../../types/auth/user'
import { useForm } from 'react-hook-form'
import { FormData, ProfileSchema } from '../../types/profile/profile'
import FormField from './FormField'
import { useProfile } from '../../hooks/auth/useProfile'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserPlusIcon } from '@heroicons/react/24/outline'

interface FormProps {
  readonly user: AuthenticatedUser
}

export default function Form({ user }: FormProps) {
  const { onSubmit } = useProfile()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      name: user.name,
      email: user.email
    }
  })

  return (
    <div
      className="bg-white shadow-lg ring-1 ring-gray-900/5 sm:rounded-xl
    animate-fadeSlideIn [animation-delay:200ms]"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
      >
        <h2
          className="text-xl font-bold text-center text-gray-900 py-4
                animate-fadeSlideIn [animation-delay:200ms]"
        >
          Profile
        </h2>
        <FormField
          type="text"
          placeholder="Name"
          label="Name"
          name="name"
          register={register}
          error={errors.name}
        />
        <FormField
          type="email"
          placeholder="Email"
          label="Email"
          name="email"
          register={register}
          error={errors.email}
        />

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
          {isSubmitting ? 'Saving...' : 'Update Profile'}
        </button>
      </form>
    </div>
  )
}
