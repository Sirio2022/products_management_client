import { FieldError, UseFormRegister } from 'react-hook-form'
import { z, ZodType } from 'zod'

export type FormData = {
  name: string
  email: string
}

export type FormFieldProps = {
  type: string
  placeholder: string
  label: string
  name: ValidFieldNames
  register: UseFormRegister<FormData>
  error: FieldError | undefined
  valueAsNumber?: boolean
}

export type ValidFieldNames = 'name' | 'email'

export const ProfileSchema: ZodType<FormData> = z.object({
  name: z.string().nonempty({ message: 'Name is required' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email()
    .nonempty({ message: 'Email is required' })
})

export const UpdateProfileResponseSchema = z.object({
  message: z.string()
})
