import { PropsWithChildren } from 'react'

export default function NoProductsError({
  children
}: Readonly<PropsWithChildren>) {
  return (
    <div className="flex items-center justify-center text-red-500 text-sm mt-10" role="alert">
      {children}
    </div>
  )
}
