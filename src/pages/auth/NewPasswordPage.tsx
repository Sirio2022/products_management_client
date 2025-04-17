import Form from '../../components/new-password-form/Form'
import NewPasswordToken from '../../components/auth/NewPasswordToken'
import { useValidateToken } from '../../hooks/auth/useValidateToken'

export default function NewPasswordPage() {
  const { token, setToken, onSubmit, isValidToken } = useValidateToken()

  return (
    <>
      {!isValidToken ? (
        <NewPasswordToken
          token={token}
          setToken={setToken}
          onSubmit={onSubmit}
        />
      ) : (
        <Form />
      )}
    </>
  )
}
