import { FieldError, UseFormRegister } from 'react-hook-form'
import { z, ZodType } from 'zod'

export type FormData = {
  currentPassword: string
  newPassword: string
  confirmNewPassword: string
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

export type ValidFieldNames =
  | 'currentPassword'
  | 'newPassword'
  | 'confirmNewPassword'

export const ProfileNewPasswordSchema: ZodType<FormData> = z
  .object({
    currentPassword: z
      .string()
      .nonempty({ message: 'Password is required' })
      .regex(/[a-zA-Z]/, {
        message: 'Password must contain at least one letter'
      })
      .regex(/\d/, { message: 'Password must contain at least one number' }),
    newPassword: z
      .string()
      .nonempty({ message: 'Password is required' })
      .regex(/[a-zA-Z]/, {
        message: 'Password must contain at least one letter'
      })
      .regex(/\d/, { message: 'Password must contain at least one number' }),
    confirmNewPassword: z
      .string()
      .nonempty({ message: 'Password is required' })
      .regex(/[a-zA-Z]/, {
        message: 'Password must contain at least one letter'
      })
      .regex(/\d/, { message: 'Password must contain at least one number' })
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: 'Passwords do not match',
    path: ['confirmNewPassword']
  })

  export type ProfileNewPassword = z.infer<typeof ProfileNewPasswordSchema>
