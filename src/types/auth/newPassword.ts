import { FieldError, UseFormRegister } from 'react-hook-form'
import { z, ZodType } from 'zod'
import type { User } from './user'

export type NewPasswordFormData = Pick<User, 'password' | 'confirmPassword'>

export type FormFieldProps = {
  label?: string
  type: string
  placeholder: string
  name: ValidFieldNames
  register: UseFormRegister<NewPasswordFormData>
  error: FieldError | undefined
  valueAsNumber?: boolean
}

export type ValidFieldNames = 'password' | 'confirmPassword'

export const NewPasswordSchema: ZodType<NewPasswordFormData> = z
  .object({
    password: z
      .string()
      .nonempty({ message: 'Password is required' })
      .regex(/[a-zA-Z]/, {
        message: 'Password must contain at least one letter'
      })
      .regex(/\d/, { message: 'Password must contain at least one number' }),
    confirmPassword: z
      .string()
      .nonempty({ message: 'Password is required' })
      .regex(/[a-zA-Z]/, {
        message: 'Password must contain at least one letter'
      })
      .regex(/\d/, { message: 'Password must contain at least one number' })
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
  })

export const NewPasswordResponseSchema = z.object({
  message: z.string()
})
