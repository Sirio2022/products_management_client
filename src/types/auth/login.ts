import { FieldError, UseFormRegister } from 'react-hook-form'
import { z, ZodType } from 'zod'
import type { ConfirmAccount } from './user'

export type LoginFormData = Pick<ConfirmAccount, 'email' | 'password'>

export type FormFieldProps = {
  label?: string
  type: string
  placeholder: string
  name: ValidFieldNames
  register: UseFormRegister<LoginFormData>
  error: FieldError | undefined
  valueAsNumber?: boolean
}

export type ValidFieldNames = 'email' | 'password'

export const loginSchema: ZodType<LoginFormData> = z.object({
  email: z.string().min(1, { message: 'Email is required' }).email().nonempty({
    message: 'Email is required'
  }),

  password: z.string().nonempty({ message: 'Password is required' })
})
