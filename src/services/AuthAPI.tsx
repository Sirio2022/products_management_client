import axiosInstance from '../lib/axios'
import { isAxiosError } from 'axios'
import {
  AuthenticatedUserSchema,
  ConfirmAccount,
  CreateAccountSchema,
  User,
  UserAccountSchema
} from '../types/auth/user'
import { SignupFormData } from '../types/auth/signup'
import {
  ConfirmAccountTokenSchema,
  NewCodeFormData
} from '../types/auth/confirmAccount'
import { LoginFormData } from '../types/auth/login'
import { NewPasswordFormData } from '../types/auth/newPassword'

async function createAccount(formData: SignupFormData) {
  try {
    const { data } = await axiosInstance.post('/auth/signup', formData)

    const response = CreateAccountSchema.safeParse(data)

    if (response.success) {
      return response.data
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(
        error.response?.data.message ??
          JSON.stringify(error.response?.data.errors[0].message)
      )
    }
  }
}

async function confirmAccount(formData: ConfirmAccount['token']) {
  try {
    const { data } = await axiosInstance.post('/auth/confirm-account', {
      token: formData
    })

    const response = ConfirmAccountTokenSchema.safeParse(data)

    if (response.success) {
      return response.data
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(
        error.response?.data.message ??
          JSON.stringify(error.response?.data.errors[0].message)
      )
    }
  }
}
async function resendCode(formData: NewCodeFormData) {
  try {
    const { data } = await axiosInstance.post(
      '/auth/resend-confirmation',
      formData
    )

    const response = ConfirmAccountTokenSchema.safeParse(data)

    if (response.success) {
      return response.data
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(
        error.response?.data.message ??
          JSON.stringify(error.response?.data.errors[0].message)
      )
    }
  }
}

async function login(formData: LoginFormData) {
  try {
    const { data } = await axiosInstance.post('/auth/login', formData)

    const response = UserAccountSchema.safeParse(data)

    if (response.success) {
      localStorage.setItem('AccessToken', response.data.token)
      return response.data
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(
        error.response?.data.message ??
          JSON.stringify(error.response?.data.errors[0].message)
      )
    }
  }
}

async function forgotPassword(formData: NewCodeFormData) {
  try {
    const { data } = await axiosInstance.post('/auth/forgot-password', formData)

    const response = ConfirmAccountTokenSchema.safeParse(data)

    if (response.success) {
      return response.data
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(
        error.response?.data.message ??
          JSON.stringify(error.response?.data.errors[0].message)
      )
    }
  }
}

async function confirmPasswordToken(formData: ConfirmAccount['token']) {
  try {
    const { data } = await axiosInstance.post('/auth/validate-password-token', {
      token: formData
    })

    const response = ConfirmAccountTokenSchema.safeParse(data)

    if (response.success) {
      return response.data
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(
        error.response?.data.message ??
          JSON.stringify(error.response?.data.errors[0].message)
      )
    }
  }
}

async function resetPassword({
  formData,
  token
}: {
  formData: NewPasswordFormData
  token: User['token']
}) {
  try {
    const { data } = await axiosInstance.post(
      `/auth/reset-password/${token}`,
      formData
    )

    const response = ConfirmAccountTokenSchema.safeParse(data)

    if (response.success) {
      return response.data
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(
        error.response?.data.message ??
          JSON.stringify(error.response?.data.errors[0].message)
      )
    }
  }
}

async function getUser() {
  try {
    const { data } = await axiosInstance.get('/auth/user')

    const response = AuthenticatedUserSchema.safeParse(data)

    if (response.success) {
      return response.data
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(
        error.response?.data.message ??
          JSON.stringify(error.response?.data.errors[0].message)
      )
    }
  }
}

export {
  createAccount,
  confirmAccount,
  resendCode,
  login,
  forgotPassword,
  confirmPasswordToken,
  resetPassword,
  getUser
}
