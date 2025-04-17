import { useMutation } from '@tanstack/react-query'
import { resendCode } from '../../services/AuthAPI'
import { toast } from 'react-toastify'
import { NewCodeFormData } from '../../types/auth/confirmAccount'
import { useNavigate } from 'react-router-dom'

export function useResendCode() {
  const navigate = useNavigate()
  const { mutate } = useMutation({
    mutationFn: resendCode,
    onSuccess: (data) => {
      toast.success(data?.message)
    },
    onError: (error) => {
      toast.error(error.message)
      navigate('/auth/login')
    }
  })

  const onSubmit = (data: NewCodeFormData) => {
    mutate(data)
  }

  return {
    onSubmit
  }
}
