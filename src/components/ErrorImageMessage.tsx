import { PropsWithChildren } from 'react'

export default function ErrorImageMessage({
  children
}: Readonly<PropsWithChildren>) {
  return (
    <div
      className="flex items-center justify-center text-red-500 text-sm mt-1"
      role="alert"
    >
      {children}
    </div>
  )
}
