import { Link } from 'react-router-dom'
import ProductsDetails from '../components/ProductsDetails'
import { useProducts } from '../hooks/useProducts'

export default function Products() {
  const { productsList } = useProducts()

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Products</h2>
        <Link
          to="/new/product"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Add Product
        </Link>
      </div>

      <div className="px-2 overflow-x-auto">
        <table className="w-full mt-5 table-auto">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="p-2">Producto</th>
              <th className="p-2">Precio</th>
              <th className="p-2">Disponibilidad</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productsList.map((product) => (
              <ProductsDetails key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
