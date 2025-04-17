import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteProduct } from '../../services/ProductsAPI'
import { toast } from 'react-toastify'
import { Product } from '../../types/products/product'
import Swal from 'sweetalert2'

export function useDeleteProduct() {
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
      toast.success(data?.message)
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })

  const onDelete = (id: Product['id']) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this product!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        mutate(id)
        Swal.fire('Deleted!', 'Your product has been deleted. 🗑️', 'success')
      } else {
        Swal.fire('Cancelled', 'Your product is safe 🫡', 'error')
      }
    })
  }

  return {
    onDelete
  }
}
