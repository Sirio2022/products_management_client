import { useMutation, useQueryClient } from '@tanstack/react-query'
import { login } from '../../services/AuthAPI'
import { LoginFormData } from '../../types/auth/login'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export function useLogin() {
  const navigate = useNavigate()

  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      queryClient.setQueryData(['user'], null)
      navigate('/')
    },
    onError: (error) => {
      toast.error(error.message)
      console.error('Login failed:', error)
    }
  })

  const onSubmit = async (data: LoginFormData) => mutate(data)

  return {
    onSubmit
  }
}
