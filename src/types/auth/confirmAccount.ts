import { FieldError, UseFormRegister } from 'react-hook-form'
import { z, ZodType } from 'zod'
import type { User } from './user'

export type NewCodeFormData = Pick<User, 'email'>

export type FormFieldProps = {
  label?: string
  type: string
  placeholder: string
  name: ValidFieldNames
  register: UseFormRegister<NewCodeFormData>
  error: FieldError | undefined
  valueAsNumber?: boolean
}

export type ValidFieldNames = 'email'

export const NewCodeSchema: ZodType<NewCodeFormData> = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email()
    .nonempty({ message: 'Email is required' })
})

export const ConfirmAccountTokenSchema = z.object({
  message: z.string()
})
