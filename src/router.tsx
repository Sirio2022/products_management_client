import { createBrowserRouter, RouteObject } from 'react-router-dom'
import Layout from './layouts/Layout'
import AuthLayout from './layouts/AuthLayout'
import Products from './pages/products/Products'
import NewProduct from './pages/products/NewProductPage'
import EditProduct from './pages/products/EditProductPage'
import ProductDetails from './pages/products/ProductDetailsPage'
import LoginPage from './pages/auth/LoginPage'
import SignupPage from './pages/auth/SignupPage'
import ConfirmAccountPage from './pages/auth/ConfirmAccountPage'
import NewTokenPage from './pages/auth/NewTokenPage'
import NewPasswordPage from './pages/auth/NewPasswordPage'
import NewPasswordProfilePage from './pages/profile/NewPasswordPage'
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage'
import ProfilePage from './pages/profile/ProfilePage'
import ProfileLayout from './layouts/ProfileLayout'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />
      },
      {
        path: 'new/product',
        element: <NewProduct />
      },
      {
        path: 'edit/product/:productId',
        element: <EditProduct />
      },
      {
        path: 'details/product/:productId',
        element: <ProductDetails />
      },
      {
        element: <ProfileLayout />,
        children: [
          {
            path: 'profile',
            element: <ProfilePage />
          },
          {
            path: 'profile/new-password',
            element: <NewPasswordProfilePage />
          }
        ]
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'signup',
        element: <SignupPage />
      },
      {
        path: 'confirm-account',
        element: <ConfirmAccountPage />
      },
      {
        path: 'new-code',
        element: <NewTokenPage />
      },
      {
        path: 'forgot-password',
        element: <ForgotPasswordPage />
      },
      {
        path: 'reset-password',
        element: <NewPasswordPage />
      }
    ]
  }
]

const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter(routes)

export default router
