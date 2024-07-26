import { Link } from 'react-router-dom';
import NewProductForm from '../components/NewProductForm';

export default function NewProduct() {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-500">New Product</h2>
        <Link
          to="/"
          className="bg-slate-500 text-white px-4 py-2 rounded-md hover:bg-slate-600 uppercase font-bold shadow-lg"
        >
          Back to Products
        </Link>
      </div>

      <NewProductForm />
    </>
  );
}
