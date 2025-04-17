import { toast } from 'react-toastify'
import { updateProfilePassword } from '../../services/ProfileAPI'
import { ProfileNewPassword } from '../../types/profile/newPassword'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

export function useProfileNewPassword() {
  const navigate = useNavigate()

  const { mutate } = useMutation({
    mutationFn: updateProfilePassword,
    onSuccess: (data) => {
      toast.success(data?.message)
      navigate('/')
    },
    onError: (error) => {
      toast.error(error?.message)
    }
  })

  const onSubmit = async (formData: ProfileNewPassword) => mutate(formData)

  return {
    onSubmit
  }
}
