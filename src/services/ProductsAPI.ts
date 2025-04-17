import { isAxiosError } from 'axios'
import axiosInstance from '../lib/axios'
import {
  NewProductSchema,
  EditProductSchema,
  DeleteProductSchema,
  Product,
  ProductByIdSchema
} from '../types/products/product'
import { ProductsSchema } from '../types/products/products'

export async function createProduct(product: FormData) {
  try {
    const { data } = await axiosInstance.post('/products', product, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    const response = NewProductSchema.safeParse(data)

    if (response.success) {
      return response.data
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(
        error.response?.data.message ||
          JSON.stringify(error.response?.data.errors[0].message)
      )
    }
  }
}

export async function getAllProducts() {
  try {
    const { data } = await axiosInstance.get('/products')

    const response = ProductsSchema.safeParse(data)

    if (response.success) {
      return response.data.products
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(
        error.response?.data.message ||
          JSON.stringify(error.response?.data.errors[0].message)
      )
    }
  }
}

export async function getProductById(id: Product['id']) {
  try {
    const { data } = await axiosInstance.get(`/products/${id}`)

    const response = ProductByIdSchema.safeParse(data)

    if (response.success) {
      return response.data
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(
        error.response?.data.message ||
          JSON.stringify(error.response?.data.errors[0].message)
      )
    }
  }
}

export async function updateProduct({
  id,
  product
}: {
  id: Product['id']
  product: FormData
}) {
  console.log('updateProduct:', id, product.entries())

  try {
    const { data } = await axiosInstance.patch(`/products/${id}`, product, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    const response = EditProductSchema.safeParse(data)
    if (response.success) {
      return response.data
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(
        error.response?.data.message ||
          JSON.stringify(error.response?.data.errors[0].message)
      )
    }
  }
}

export async function deleteProduct(id: Product['id']) {
  try {
    const { data } = await axiosInstance.delete(`/products/${id}`)

    const response = DeleteProductSchema.safeParse(data)

    if (response.success) {
      return response.data
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(
        error.response?.data.message ||
          JSON.stringify(error.response?.data.errors[0].message)
      )
    }
  }
}
