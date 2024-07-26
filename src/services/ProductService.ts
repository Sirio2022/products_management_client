import { toast } from 'react-toastify';
import { parse, pipe, string, transform } from 'valibot';
import {
  DraftProductSchema,
  ProductListSchema,
  Product,
  ProductSchema,
  EditProductSchema,
} from '../types';
import axios from 'axios';

interface ProductData {
  [k: string]: FormDataEntryValue;
}

export async function addProduct(data: ProductData) {
  try {
    const NumberSchema = pipe(
      string(),
      transform((value) => +value)
    );

    const result = parse(DraftProductSchema, {
      name: data.name,
      price: parse(NumberSchema, data.price),
    });

    if (result) {
      const url = `${import.meta.env.VITE_API_URL}/api/products`;
      const { data } = await axios.post(url, {
        name: result.name,
        price: result.price,
      });

      toast.success(data.message);
    } else {
      throw new Error('Invalid data');
    }
  } catch (error) {
    console.error('Error adding product', error);
  }
}

export async function getProducts() {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/products`;
    const { data } = await axios.get(url);
    const result = parse(ProductListSchema, data.data);

    return result;
  } catch (error) {
    console.error('Error getting products', error);
  }
}

export async function getProductById(id: Product['id']) {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
    const { data } = await axios.get(url);
    const result = parse(ProductSchema, data.data);

    return result;
  } catch (error) {
    console.error('Error getting product', error);
  }
}

export async function updateProduct(id: Product['id'], data: ProductData) {
  try {
    const NumberSchema = pipe(
      string(),
      transform((value) => +value)
    );

    const availableSchema = pipe(
      string(),
      transform((value) => value === 'true')
    );

    const result = parse(EditProductSchema, {
      name: data.name,
      price: parse(NumberSchema, data.price),
      available: parse(availableSchema, data.available),
    });

    if (result) {
      const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
      const { data } = await axios.put(url, {
        name: result.name,
        price: result.price,
        available: result.available,
      });

      toast.success(data.message);
    } else {
      throw new Error('Invalid data');
    }
  } catch (error) {
    console.error('Error updating product', error);
  }
}

export async function deleteProduct(id: Product['id']) {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
    const { data } = await axios.delete(url);

    toast.success(data.message);
  } catch (error) {
    console.error('Error deleting product', error);
  }
}

export async function patchProduct(id: Product['id']) {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
    const { data } = await axios.patch(url);

    toast.success(data.message);
  } catch (error) {
    console.error('Error patching product', error);
  }
}
