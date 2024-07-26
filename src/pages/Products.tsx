import { Link } from 'react-router-dom';
import ProductsDetails from '../components/ProductsDetails';
import { useProducts } from '../hooks/useProducts';

export default function Products() {
  const { productsList } = useProducts();

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-500">Products</h2>
        <Link
          to="/new/product"
          className="bg-slate-500 text-white px-4 py-2 rounded-md hover:bg-slate-600 uppercase font-bold shadow-lg"
        >
          Add Product
        </Link>
      </div>

      <div className="p-2">
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
    </>
  );
}
