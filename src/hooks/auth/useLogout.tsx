import { useQueryClient } from '@tanstack/react-query'

export function useLogout() {
  const queryClient = useQueryClient()

  const logout = () => {
    localStorage.removeItem('AccessToken')
    queryClient.invalidateQueries({ queryKey: ['user'] })
    queryClient.invalidateQueries({ queryKey: ['products'] })
  }

  return {
    logout
  }
}
