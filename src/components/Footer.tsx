export default function Footer() {
  return (
    <footer className="flex items-center justify-center max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 bg-slate-800 text-white">
      <p>&copy; {new Date().getFullYear()} </p>

      <p className="ml-4 text-teal-500 hover:text-teal-400 transition duration-300">
        Created by{' '}
        <a
          href="www.linkedin.com/in/juanmanuelalvarezb  "
          target="_blank"
          rel="noreferrer"
          className="font-semibold"
        >
          Juan Manuel Alvarez
        </a>
      </p>
    </footer>
  )
}
