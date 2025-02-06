import { Form, useFetcher, useNavigate } from 'react-router-dom';
import { Product } from '../types';
import { currencyFormat } from '../utils';

type ProdutsDetailsProps = {
  readonly product: Product;
};

export default function ProductsDetails({ product }: ProdutsDetailsProps) {

  const fetcher = useFetcher();
  const navigate = useNavigate();

  return (
    <tr className="border-b">
      <td className="p-3 text-lg text-gray-800 text-center align-middle">
        {product.name}
      </td>
      <td className="p-3 text-lg text-gray-800 text-center align-middle">
        {currencyFormat(+product.price)}
      </td>
      <td
        className={`${
          product.available
            ? 'p-3 text-lg text-gray-800 text-center align-middle uppercase font-bold'
            : 'p-3 text-lg text-red-500 text-center align-middle uppercase font-bold'
        }`}
      >
        <fetcher.Form method="POST">
          <button
            type="submit"
            name="id"
            value={product.id}
            className={`${
              product.available
                ? 'text-green-500 bg-green-100 text-sm p-2 rounded-md hover:bg-green-200 border border-green-500 transition duration-300 ease-in-out transform hover:scale-105'
                : 'text-red-500 bg-red-100 text-sm p-2 rounded-md hover:bg-red-200 border border-red-500 transition duration-300 ease-in-out transform hover:scale-105'
            }`}
          >
            {product.available ? 'Disponible' : 'No disponible'}
          </button>
        
        </fetcher.Form>
      </td>
      <td className="p-3 text-lg text-gray-800 ">
        <div className="flex flex-col gap-5 items-center justify-center md:flex-row md:space-x-2">
          <button
            className="bg-slate-500 text-white p-2 rounded-md hover:bg-slate-600 uppercase font-bold shadow-lg text-xs w-full md:w-1/2"
            onClick={() => navigate(`/edit/product/${product.id}`)}
          >
            Edit
          </button>
          <Form
            className="w-full md:w-1/2 "
            method="POST"
            action={`delete/product/${product.id}`}
            onSubmit={(e) => {
              if (!confirm('Are you sure you want to delete this product?')) {
                e.preventDefault();
              }
            }}
          >
            <input
              type="submit"
              className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 uppercase font-bold shadow-lg text-xs w-full cursor-pointer"
              value="Eliminar"
            />
          </Form>
        </div>
      </td>
    </tr>
  );
}
