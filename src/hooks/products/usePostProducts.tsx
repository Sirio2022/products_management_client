import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { createProduct } from '../../services/ProductsAPI'
import { ProductFormData } from '../../types/products/newproduct'
import { toast } from 'react-toastify'

export function usePostProducts() {
  const navigate = useNavigate()

  const { mutate } = useMutation({
    mutationFn: createProduct,
    onError: (error) => {
      console.log('Error:', error)
      toast.error(error.message)
    },
    onSuccess: (data) => {
      console.log('Success:', data)

      toast.success(data?.message)
      navigate('/')
    }
  })

  const onSubmit = (data: ProductFormData, file: File | null) => {
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('price', data.price.toString())
    formData.append('stock', data.stock.toString())
    formData.append('description', data.description)
    if (file) {
      formData.append('image', file)
    }
    mutate(formData)
  }

  return {
    onSubmit
  }
}
