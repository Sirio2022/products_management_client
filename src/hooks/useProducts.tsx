import { useActionData, useLoaderData } from 'react-router-dom';
import { ProductList, ActionData, Product } from '../types';

export function useProducts() {
  const error = useActionData() as ActionData;

  const productsList = useLoaderData() as ProductList;

  const editProduct = useLoaderData() as Product;

  return {
    productsList,
    error,
    editProduct,
  };
}
