import React, { ReactNode } from 'react'

function AuthLayout({children}: {children: ReactNode}) {
  return (
    <article>
        {children}
    </article>
  )
}

export default AuthLayout
