import Form from '../../components/profile-form/Form'
import Spinner from '../../components/spinner/Spinner'
import { useAuth } from '../../hooks/auth/useAuth'

export default function ProfilePage() {
  const { user, isLoading } = useAuth()

  if (isLoading) return <Spinner />

  return user && <Form user={user} />
}
