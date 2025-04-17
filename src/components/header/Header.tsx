import { Link } from 'react-router-dom'
import HeaderMenu from './HeaderMenu'
import { User } from '../../types/auth/user'

interface HeaderProps {
  readonly name?: User['name']
}

export default function Header({ name }: HeaderProps) {
  return (
    <header className=" bg-slate-800">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className=" flex flex-col sm:flex-row sm:justify-around items-center justify-between">
          <Link to="/">
            <img
              className="h-28 w-auto"
              src="/products-management-logo.svg"
              alt="products-management-logo"
            />
          </Link>

          <HeaderMenu name={name} />
        </div>
      </div>
    </header>
  )
}
