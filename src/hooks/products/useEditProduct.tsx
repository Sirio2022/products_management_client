import { useNavigate } from 'react-router-dom'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateProduct } from '../../services/ProductsAPI'
import { toast } from 'react-toastify'
import { ProductById } from '../../types/products/product'
import { ProductEditFormData } from '../../types/products/editproduct'

export function useEditProduct(id: ProductById['product']['id']) {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: updateProduct,
    onError: (error) => {
      console.log('Error:', error)

      toast.error(error.message)
    },
    onSuccess: (data) => {
      // Invalidar las queries para refrescar los datos
      queryClient.invalidateQueries({ queryKey: ['products'] })
      queryClient.invalidateQueries({ queryKey: ['editProduct', id] })
      toast.success(data?.message)
      navigate('/')
    }
  })

  const onSubmit = (data: ProductEditFormData, file: File | null) => {
    const formData = new FormData()

    formData.append('name', data.name!)
    formData.append('price', data.price!.toString())
    formData.append('stock', data.stock!.toString())
    formData.append('description', data.description!)
    if (file) {
      formData.append('image', file)
    }

    const formDataInputs = {
      id,
      product: formData
    }

    mutate(formDataInputs)
  }

  return {
    onSubmit
  }
}
