import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { forgotPassword } from '../../services/AuthAPI'
import { NewCodeFormData } from '../../types/auth/confirmAccount'

export function useResendPasswordCode() {
  const { mutate } = useMutation({
    mutationFn: forgotPassword,
    onSuccess: (data) => {
      toast.success(data?.message)
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })

  const onSubmit = async (formData: NewCodeFormData) => mutate(formData)

  return {
    onSubmit
  }
}
