import { useForm } from 'react-hook-form'
import FormField from './FormField'
import { KeyIcon } from '@heroicons/react/24/outline'
import { zodResolver } from '@hookform/resolvers/zod'
import { useProfileNewPassword } from '../../hooks/auth/useProfileNewPassword'
import {
  ProfileNewPassword,
  ProfileNewPasswordSchema
} from '../../types/profile/newPassword'

export default function Form() {
  const { onSubmit } = useProfileNewPassword()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ProfileNewPassword>({
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    },
    resolver: zodResolver(ProfileNewPasswordSchema)
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
        <h2 className="text-2xl font-bold mb-4">Change Password</h2>
        <FormField
          type="password"
          placeholder="Current Password"
          label="Current Password"
          name="currentPassword"
          register={register}
          error={errors.currentPassword}
        />
        <FormField
          type="password"
          placeholder="New Password"
          label="New Password"
          name="newPassword"
          register={register}
          error={errors.newPassword}
        />
        <FormField
          type="password"
          placeholder="Confirm New Password"
          label="Confirm New Password"
          name="confirmNewPassword"
          register={register}
          error={errors.confirmNewPassword}
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
          <KeyIcon className="h-5 w-5 mr-2" />
          {isSubmitting ? 'Saving...' : 'Change Password'}
        </button>
      </form>
    </div>
  )
}
