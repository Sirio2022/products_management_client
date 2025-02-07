import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Layout() {
  return (
    <>
      <header className="bg-slate-800">
        <div className="mx-auto max-w-6xl py-4 px-4 sm:py-6 sm:px-6 lg:py-8 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white text-center">
            Product Management
          </h1>
        </div>
      </header>

      <main className="mt-4 mx-auto max-w-6xl p-4 sm:mt-6 sm:p-6 lg:mt-8 lg:p-8 bg-white shadow-lg overflow-x-auto">
        <Outlet />
      </main>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}
