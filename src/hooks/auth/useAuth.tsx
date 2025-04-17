import { useQuery } from '@tanstack/react-query'
import { getUser } from '../../services/AuthAPI'

export function useAuth() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    retry: false,
    refetchOnWindowFocus: false
  })

  return {
    user: data?.user,
    isLoading,
    isError
  }
}
