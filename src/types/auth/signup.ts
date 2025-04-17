import { FieldError, UseFormRegister } from 'react-hook-form'
import { z, ZodType } from 'zod'
import type { User } from './user'

export type SignupFormData = Pick<
  User,
  'name' | 'email' | 'password' | 'confirmPassword'
>

export type FormFieldProps = {
  label?: string
  type: string
  placeholder: string
  name: ValidFieldNames
  register: UseFormRegister<SignupFormData>
  error: FieldError | undefined
  valueAsNumber?: boolean
}

export type ValidFieldNames = 'name' | 'email' | 'password' | 'confirmPassword'

export const signupSchema: ZodType<SignupFormData> = z
  .object({
    name: z
      .string()
      .min(1, { message: 'Name is required' })
      .max(50, { message: 'Name must be less than 50 characters' }),
    email: z
      .string()
      .min(1, { message: 'Email is required' })
      .email()
      .nonempty({
        message: 'Email is required'
      }),
    password: z
      .string()
      .nonempty({ message: 'Password is required' })
      .regex(/[a-zA-Z]/, {
        message: 'Password must contain at least one letter'
      })
      .regex(/\d/, { message: 'Password must contain at least one number' }),
    confirmPassword: z
      .string()
      .nonempty({ message: 'Confirm Password is required' })
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
  })
