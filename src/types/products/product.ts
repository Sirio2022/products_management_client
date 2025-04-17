import { z } from 'zod'

export const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  stock: z.number(),
  active: z.boolean(),
  description: z.string(),
  image: z.string(),
  createdAt: z.string(),
  updatedAt: z.string()
})

export const NewProductSchema = z.object({
  message: z.string(),
  product: ProductSchema
})

export type Product = Pick<
  z.infer<typeof ProductSchema>,
  'id' | 'name' | 'price' | 'stock' | 'description' | 'image'
>


export const ProductByIdSchema = z.object({
  product: ProductSchema
})

export const EditProductSchema = z.object({
  message: z.string(),
  product: ProductSchema
})

export const DeleteProductSchema = z.object({
  message: z.string()
})

export type ProductById = z.infer<typeof ProductByIdSchema>
