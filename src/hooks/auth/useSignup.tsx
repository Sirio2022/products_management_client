import { useMutation } from '@tanstack/react-query'
import { SignupFormData } from '../../types/auth/signup'
import { createAccount } from '../../services/AuthAPI'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export function useSignup() {
  const navigate = useNavigate()

  const { mutate } = useMutation({
    mutationFn: createAccount,
    onSuccess: (data) => {
      toast.success(data?.message)
      navigate('/auth/login')
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })

  const onSubmit = async (formData: SignupFormData) => mutate(formData)

  return {
    onSubmit
  }
}
