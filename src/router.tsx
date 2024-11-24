import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Layout from './layouts/Layout';
import Products from './pages/Products';
import NewProduct from './pages/NewProduct';
import {
  addProductAction,
  loaderProducts,
  editLoader,
  editProductAction,
  deleteProductAction,
  patchProductAction,
} from './functions';
import EditProduct from './pages/EditProduct';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: loaderProducts,
        action: patchProductAction,
      },
      {
        path: 'new/product',
        element: <NewProduct />,
        action: addProductAction,
      },
      {
        path: 'edit/product/:id', // This is a dynamic route.  ROA pattern - Resource Oriented Architecture
        element: <EditProduct />,
        loader: editLoader,
        action: editProductAction,
      },
      {
        path: 'delete/product/:id',
        action: deleteProductAction,
      },
    ],
  },
];

const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter(routes);

export default router;
