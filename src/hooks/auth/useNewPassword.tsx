import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import type { NewPasswordFormData } from '../../types/auth/newPassword'
import { resetPassword } from '../../services/AuthAPI'
import { User } from '../../types/auth/user'
import { useNavigate } from 'react-router-dom'

export function useNewPassword() {
  const nagivate = useNavigate()
  const { mutate } = useMutation({
    mutationFn: resetPassword,
    onSuccess: (data) => {
      toast.success(data?.message)
      nagivate('/auth/login')
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })

  const onSubmit = async (
    formData: NewPasswordFormData,
    token: User['token']
  ) => {
    if (!formData || !token) return
    const data = { formData, token }
    mutate(data)
  }
  return {
    onSubmit
  }
}
