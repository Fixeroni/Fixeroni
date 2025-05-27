// import { button } from "@tanstack/react-router";
import { FeatureProps, Feature as FeatureType } from "../../../types";

function Feature({
  image,
  title,

  description,
  side,
  ctaText,
  handleClick,
}: FeatureProps) {
  return (
    <div className=" bg-white rounded-2xl max-md:mx-12  text-[#535353] shadow-xl max-sm:pb-2">
      <div className={`flex justify-center  `}>
        <h2
          className={`text-2xl max-sm:text-[1.1rem] font-bold  ${side === "right" ? "ml-auto pt-4 px-4" : "text-center pt-4"} `}
        >
          {title}
        </h2>{" "}
      </div>

      <div
        className={` ${side === "right" ? "flex-row-reverse" : ""} flex gap-4 items-center justify-center max-sm:flex-col `}
      >
        <div className="flex justify-center max-md:w-full">
          {" "}
          <img src={image} className="w-full h-40 mt-auto" />{" "}
        </div>

        <div
          className={`flex flex-col gap-2 max-sm:px-4 ${side === "right" ? "pl-4 pb-4" : "pr-4 max-sm:pb-4"}  justify-center md:max-w-[400px] `}
        >
          <p
            className={`text-md  text-justify  ${side === "right" ? "" : "mt-[-1.2rem]"}`}
          >
            {description}
          </p>

          <button
            onClick={handleClick}
            className={`text-white cursor-pointer bg-[#0F9067] rounded-[10px] w-fit h-[30px] text-md px-2.5 mt-2  ${side === "right" ? "" : "ml-auto"}   `}
          >
            {ctaText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Feature;
