import React, { ReactNode } from 'react'

function AuthLayout({children}: {children: ReactNode}) {
  return (
    <article className='w-full h-full relative'>
      {/* Image background */}
      <article className='h-1/4'></article>
      <article className='h-3/4 bg-white'></article>

        <article className='absolute left-0 right-0 top-0 bottom-0'>
          {children}
        </article>
    </article>
  )
}

export default AuthLayout
