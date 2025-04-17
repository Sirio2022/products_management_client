import { z } from 'zod'

export type User = {
  id: string
  name: string
  email: string
  password: string
  confirmPassword: string
  confirmed: boolean
  updatedAt: string
  createdAt: string
  token: string
}

export type ConfirmAccount = Pick<User, 'token' | 'email' | 'password'>

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  confirmed: z.boolean(),
  updatedAt: z.string(),
  createdAt: z.string()
})
export const UserAccountSchema = z.object({
  message: z.string(),
  token: z.string()
})

export const CreateAccountSchema = z.object({
  message: z.string()
})

export const AuthenticatedUserSchema = z.object({
  user: UserSchema.pick({
    id: true,
    name: true,
    email: true
  })
})

export type AuthenticatedUser = Pick<User, 'name' | 'email'>
