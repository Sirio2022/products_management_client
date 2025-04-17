import { Outlet } from 'react-router-dom'
import Logo from '../components/Logo'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function AuthLayout() {
  return (
    <div className="bg-gray-800">
      <div className="flex flex-col items-center justify-center min-h-screen max-w-xl mx-auto px-4 space-y-10">
        <Logo />

        <Outlet />
      </div>

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
    </div>
  )
}
