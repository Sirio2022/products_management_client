import { useEffect, useState } from 'react'
import { ConfirmAccount } from '../../types/auth/user'
import { useMutation } from '@tanstack/react-query'
import { confirmPasswordToken } from '../../services/AuthAPI'
import { toast } from 'react-toastify'
import { useNavigate, useSearchParams } from 'react-router-dom'

export function useValidateToken() {
  const [token, setToken] = useState<ConfirmAccount['token']>('')
  const [isValidToken, setIsValidToken] = useState(false)
  const [, setSearchParams] = useSearchParams()

  const navigate = useNavigate()

  const { mutate } = useMutation({
    mutationFn: confirmPasswordToken,
    onSuccess: (data) => {
      toast.success(data?.message)
      setToken('')
      setIsValidToken(true)
    },
    onError: (error) => {
      toast.error(error.message)
      setToken('')
      navigate('/auth/forgot-password')
    }
  })

  // Update URL with token when it changes
  useEffect(() => {
    if (token) {
      setSearchParams({ token })
    }
  }, [token, setSearchParams])

  const onSubmit = async (formData: ConfirmAccount['token']) => {
    if (!formData) return
    mutate(formData)
  }

  return {
    token,
    setToken,
    onSubmit,
    isValidToken
  }
}
