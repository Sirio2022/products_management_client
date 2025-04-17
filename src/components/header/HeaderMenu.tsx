import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/outline'
import { UserIcon } from '@heroicons/react/24/solid'
import { User } from '../../types/auth/user'
import { useLogout } from '../../hooks/auth/useLogout'
import { Link } from 'react-router-dom'

interface HeaderMenuProps {
  readonly name?: User['name']
}

export default function HeaderMenu({ name }: HeaderMenuProps) {
  const { logout } = useLogout()

  return (
    <div className="relative">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-gray-700">
          Hello {name}
          <ChevronDownIcon className="h-5 w-5 fill-white/60" />
        </MenuButton>

        <MenuItems className="absolute right-0 mt-2 w-52 origin-top-right rounded-xl border border-white/5 bg-gray-800 p-1 text-sm text-white shadow-lg focus:outline-none">
          <MenuItem>
            <Link to="/profile">
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:bg-gray-700">
                <UserIcon className="h-5 w-5 fill-white/30" />
                My Profile
              </button>
            </Link>
          </MenuItem>

          <div className="my-1 h-px bg-white/5" />

          <MenuItem>
            <button
              onClick={logout}
              className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:bg-gray-700"
            >
              <ArrowLeftEndOnRectangleIcon className="h-5 w-5 fill-white/30" />
              Logout
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  )
}
