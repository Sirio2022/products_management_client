import { PinInput, PinInputField } from '@chakra-ui/pin-input'
import { ConfirmAccount } from '../../types/auth/user'

interface NewPasswordTokenProps {
  readonly token: ConfirmAccount['token']
  readonly setToken: (token: ConfirmAccount['token']) => void
  readonly onSubmit: (formData: ConfirmAccount['token']) => void
}
export default function NewPasswordToken({
  token,
  setToken,
  onSubmit
}: NewPasswordTokenProps) {
  const handleChange = (token: ConfirmAccount['token']) => {
    setToken(token)
  }

  const handleSubmit = (formData: ConfirmAccount['token']) => {
    onSubmit(formData)
  }

  return (
    <div
      className="bg-white shadow-lg ring-1 ring-gray-900/5 sm:rounded-xl
          animate-fadeSlideIn [animation-delay:200ms]"
    >
      

      <form className=" py-8 px-4">
        <h2 className="block text-sm font-medium leading-6 text-gray-900 mb-4 text-center">
          Enter the 6-digit code sent to your email
        </h2>
        <div className="flex justify-center gap-5">
          <PinInput
            value={token}
            onChange={handleChange}
            onComplete={handleSubmit}
          >
            <PinInputField className="w-12 h-12 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition duration-200" />
            <PinInputField className="w-12 h-12 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition duration-200" />
            <PinInputField className="w-12 h-12 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition duration-200" />
            <PinInputField className="w-12 h-12 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition duration-200" />
            <PinInputField className="w-12 h-12 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition duration-200" />
            <PinInputField className="w-12 h-12 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition duration-200" />
          </PinInput>
        </div>
        <div className=" space-y-6"></div>
      </form>
    </div>
  )
}
