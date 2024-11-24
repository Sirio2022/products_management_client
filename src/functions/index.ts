import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  redirect,
} from 'react-router-dom';
import {
  addProduct,
  deleteProduct,
  getProductById,
  patchProduct,
  updateProduct,
} from '../services/ProductService';
import { getProducts } from '../services/ProductService';

export async function addProductAction({ request }: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData());

  const hasEmptyFields = Object.values(data).some((value) => value === '');

  if (!hasEmptyFields) {
    await addProduct(data);
    return redirect('/');
  }

  return hasEmptyFields ? { error: 'All fields are required' } : {};
}

export async function loaderProducts() {
  const products = await getProducts();

  return products;
}

export async function editLoader({ params }: LoaderFunctionArgs) {
  const { id } = params;

  if (id !== undefined) {
    const product = await getProductById(+id);

    if (!product) {
      return redirect('/');
    }
    return product;
  }
}

export async function editProductAction({
  request,
  params,
}: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData());

  const hasEmptyFields = Object.values(data).some((value) => value === '');

  if (!hasEmptyFields) {
    const { id } = params;

    if (id !== undefined) {
      await updateProduct(+id, data);
      return redirect('/');
    }
  }

  return hasEmptyFields ? { error: 'All fields are required' } : {};
}

export async function deleteProductAction({ params }: ActionFunctionArgs) {
  const { id } = params;

  if (id !== undefined) {
    await deleteProduct(+id);
    return redirect('/');
  }
}

export async function patchProductAction({ request }: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData());

  const { id } = data;

  if (id !== undefined && id !== '') {
    await patchProduct(+id);
  }

  return {};
}
