import { Outlet, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import { useAuth } from '../hooks/auth/useAuth'
import Spinner from '../components/spinner/Spinner'

export default function Layout() {
  const { user, isLoading, isError } = useAuth()

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <Navigate to="/auth/login" replace={true} />
  }

  return (
    <>
      <Header name={user?.name} />

      <main className="mt-10 mb-10 p-4 sm:p-4 md:p-6 lg:p-8 max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto bg-white shadow sm:px-4 md:px-6 lg:px-8">
        <Outlet />
      </main>

      <Footer />

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </>
  )
}
