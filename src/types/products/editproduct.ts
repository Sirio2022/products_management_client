import { FieldError, UseFormRegister } from 'react-hook-form'
import { z, ZodType } from 'zod'

export const DraftEditProductSchema: ZodType<ProductEditFormData> = z.object({
  name: z.string().nonempty({ message: 'Name is required' }).optional(),
  price: z
    .number({
      required_error: 'Price is required',
      invalid_type_error: 'The price of the product is required'
    })
    .min(0.01, { message: 'Price must be greater than 0' })
    .optional(),
  stock: z
    .number({
      required_error: 'Stock is required',
      invalid_type_error: 'The stock of the product is required'
    })
    .min(1, { message: 'Stock must be greater than 0' })
    .optional(),
  image: z
    .any()
    .optional()
    .nullable()
    .transform((file) => (file instanceof File ? file : null)),
  description: z
    .string()
    .nonempty({ message: 'Description is required' })
    .optional()
})

export type ProductEditFormData = {
  name?: string
  price?: number
  stock?: number
  image?: File | null
  description?: string
}

export type FormEditFieldProps = {
  label: string
  type?: string
  name: ValidFieldNames
  placeholder?: string
  register: UseFormRegister<ProductEditFormData>
  error: FieldError | undefined
  valueAsNumber?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export type ValidFieldNames =
  | 'name'
  | 'price'
  | 'stock'
  | 'image'
  | 'description'
