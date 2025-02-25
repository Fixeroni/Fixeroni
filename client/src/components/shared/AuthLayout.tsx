import React, { ReactNode } from 'react'

function AuthLayout({children}: {children: ReactNode}) {
  return (
    <article className='w-full h-full relative'>
      {/* Image background */}
      <article className='h-1/4'></article>
      <article className='h-3/4 bg-white'></article>

      {children}
    </article>
  )
}

export default AuthLayout
