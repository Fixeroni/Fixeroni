// import AuthLayout from "../shared/AuthLayout";
// import AuthHoverCard from "../shared/AuthHoverCard";
import { useLoginStore } from "@/stores/auth/useLoginStore";
import features from "../../data/features";
import type { Feature as FeatureType } from "../../types";
import Feature from "./register/Feature";





function RegisterContent() {
  const { setContent} = useLoginStore()
  return (
    <div className="flex flex-col gap-4 items-center justify-cente pb-4">
      {features.map((feature: FeatureType, index: number) => (
        <Feature key={index} {...feature} handleClick={() => setContent(feature.content)} />
      ))}
    </div>
  );
}

export default RegisterContent;
