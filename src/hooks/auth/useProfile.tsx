import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AuthenticatedUser } from '../../types/auth/user'
import { updateProfile } from '../../services/ProfileAPI'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export function useProfile() {
  const navigate = useNavigate()

  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: updateProfile,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
      toast.success(data?.message)
      navigate('/')
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })

  const onSubmit = async (formData: AuthenticatedUser) => mutate(formData)

  return {
    onSubmit
  }
}
