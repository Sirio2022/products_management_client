import { PropsWithChildren } from 'react'

export default function ErrorMessage({ children }: PropsWithChildren) {
  return (
    <div className=" text-center my-8 text-red-600 font-bold uppercase">
      {children}
    </div>
  )
}
