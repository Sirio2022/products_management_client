import { useId } from 'react';
import { Form } from 'react-router-dom';
import ErrorMessage from './ErrorMessage';
import { useProducts } from '../hooks/useProducts';
import { availabilityOptions } from '../data';

export default function EditProductForm() {
  const name = useId();
  const price = useId();
  const available = useId();

  const { error, editProduct } = useProducts();

  return (
    <>
      {error && <ErrorMessage>{error.error}</ErrorMessage>}
      <Form className="mt-10" method="POST">
        <div className="mb-4">
          <label className="text-gray-800" htmlFor={name}>
            Product Name:
          </label>
          <input
            id={name}
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Product Name"
            name="name"
            defaultValue={editProduct.name}
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-800" htmlFor={price}>
            Price:
          </label>
          <input
            id={price}
            type="number"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Product Price. Example: 300 or 300.50"
            name="price"
            defaultValue={editProduct.price}
            step="any" // This is a new attribute that allows the user to enter any number, including decimals
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-800" htmlFor={available}>
            Disponibilidad:
          </label>
          <select
            id={available}
            className="mt-2 block w-full p-3 bg-gray-50"
            name="available"
            defaultValue={editProduct?.available.toString()}
          >
            {availabilityOptions.map((option) => (
              <option key={option.name} value={option.value.toString()}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        <input
          type="submit"
          className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
          value="Edit Product"
        />
      </Form>
    </>
  );
}
