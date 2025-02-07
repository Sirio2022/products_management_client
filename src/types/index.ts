import { array, boolean, InferOutput, number, object, string } from 'valibot'

export const DraftProductSchema = object({
  name: string(),
  price: number()
})

export const ProductSchema = object({
  id: number(),
  name: string(),
  price: string(),
  available: boolean()
})

export const EditProductSchema = object({
  name: string(),
  price: number(),
  available: boolean()
})

export const ProductListSchema = array(ProductSchema)

export type Product = InferOutput<typeof ProductSchema>

export type ProductList = InferOutput<typeof ProductListSchema>

export type ActionData = {
  error: string
}
