import { PropsWithChildren } from 'react'

export default function ErrorMessage({
  children
}: Readonly<PropsWithChildren>) {
  return (
    <div
      className="text-red-500 text-sm mt-1"
      role="alert"
    >
      {children}
    </div>
  )
}
