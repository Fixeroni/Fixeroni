import { Link } from "@tanstack/react-router"
import { Feature } from "../../../types"

function Feature({image, title, description, side, ctaText}: Feature) {
  return (
    <article className={` ${side === "right" ? "flex-row-reverse" : ""} flex gap-4 items-center justify-center text-[#535353] shadow-xl bg-white rounded-xl`}>
      <img src={image} />

      <article className="flex flex-col gap-2 items-center">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-md">{description}</p>

        <Link to="/artisan/auth/register" className="text-white bg-primary rounded-xl p-2">
            {ctaText}
        </Link>
      </article>
    </article>
  )
}

export default Feature
