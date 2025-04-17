import { useState } from 'react'
import { ConfirmAccount } from '../../types/auth/user'
import { useMutation } from '@tanstack/react-query'
import { confirmAccount } from '../../services/AuthAPI'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export function useConfirmAccount() {
  const navigate = useNavigate()

  const [token, setToken] = useState<ConfirmAccount['token']>('')

  const { mutate } = useMutation({
    mutationFn: confirmAccount,
    onSuccess: (data) => {
      toast.success(data?.message)
      setToken('')
      navigate('/auth/login')
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })

  const onSubmit = async (formData: ConfirmAccount['token']) => {
    if (!formData) return
    mutate(formData)
  }

  return {
    token,
    setToken,
    onSubmit
  }
}
