import { ReactNode } from "react"

function AuthHoverCard({children}: {children: ReactNode}) {
  return (
    <article className="bg-[#F8F8F8] md:p-8 p-4 shadow-md hover:shadow-xl transition duration-300 rounded-xl w-fit h-fit">
        {children}
    </article>
  )
}

export default AuthHoverCard
