import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout() {
  return (
    <>
      <header className=" bg-slate-800">
        <div className=" mx-auto max-w-6xl py-10">
          <h1 className="text-4xl font-extrabold text-white">
            Product Management
          </h1>
        </div>
      </header>

      <main className="mt-10 mx-auto max-w-6xl p-10 bg-white shadow-lg">
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
  );
}
