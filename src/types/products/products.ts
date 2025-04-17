import { z } from 'zod'
import { ProductSchema } from './product'

export const ProductsSchema = z.object({
  products: z.array(
    ProductSchema.pick({
      id: true,
      name: true,
      price: true,
      stock: true,
      description: true,
      image: true,
    })
  )
})
