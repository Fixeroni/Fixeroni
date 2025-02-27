import AuthLayout from "../shared/AuthLayout";
import AuthHoverCard from "../shared/AuthHoverCard";
import features from "../../data/features";
import type { Feature as FeatureType } from "../../types";
import Feature from "./register/Feature";

function RegisterContent() {
  return (
    <article className="flex flex-col gap-4 items-center justify-cente">
      {features.map((feature: FeatureType, index: number) => (
        <Feature key={index} {...feature} />
      ))}
    </article>
  );
}

export default RegisterContent;
