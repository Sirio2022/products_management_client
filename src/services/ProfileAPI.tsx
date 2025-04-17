import { isAxiosError } from 'axios'
import axiosInstance from '../lib/axios'
import { UpdateProfileResponseSchema } from '../types/profile/profile'
import { AuthenticatedUser } from '../types/auth/user'
import { ProfileNewPassword } from '../types/profile/newPassword'

async function updateProfile(formData: AuthenticatedUser) {
  try {
    const { data } = await axiosInstance.patch('/auth/profile', formData)
    const response = UpdateProfileResponseSchema.safeParse(data)
    if (response.success) {
      return response.data
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(
        error.response?.data.message ||
          JSON.stringify(error.response?.data.errors[0].message)
      )
    }
  }
}

async function updateProfilePassword(formData: ProfileNewPassword) {
  try {
    const { data } = await axiosInstance.post(
      '/auth/profile/change-password',
      formData
    )
    const response = UpdateProfileResponseSchema.safeParse(data)
    if (response.success) {
      return response.data
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(
        error.response?.data.message ||
          JSON.stringify(error.response?.data.errors[0].message)
      )
    }
  }
}

export { updateProfile, updateProfilePassword }
