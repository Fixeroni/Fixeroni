import { Link } from "@tanstack/react-router"
import { Feature as FeatureType } from "../../../types"

function Feature({image, title,cta, description, side, ctaText}: FeatureType) {
  return (
    <article className={` ${side === "right" ? "flex-row-reverse" : ""} flex gap-4 items-center justify-center text-[#535353] shadow-xl bg-white rounded-2xl p-4`}>
      <img src={image} className="w-60 h-60" />

      <article className="flex flex-col gap-2 justify-center md:max-w-[400px] px-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-md">{description}</p>

        <Link to={cta} className="text-white bg-primary rounded-xl py-2 px-4 w-fit">
            {ctaText}
        </Link>
      </article>
    </article>
  )
}

export default Feature
