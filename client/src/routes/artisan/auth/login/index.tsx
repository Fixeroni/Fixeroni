import { createFileRoute } from "@tanstack/react-router";
import AuthLayout from "../../../../components/shared/AuthLayout";
import AuthHoverCard from "../../../../components/shared/AuthHoverCard";
import Switch from "../../../../components/auth/login/Switch";
import LoginContent from "../../../../components/auth/LoginContent";
import RegisterContent from "../../../../components/auth/RegisterContent";
import { useLoginStore } from "@/stores/auth/useLoginStore";
import { register } from "module";

export const Route = createFileRoute("/artisan/auth/login/")({
  component: RouteComponent,
});

function RouteComponent() {
const {content} = useLoginStore()

  return (
    <AuthLayout>
      <AuthHoverCard>
        {/* Fixeroni icon */}
     <div className={`w-full h-full bg-white ${content==="register" ? "pt-18 pb-3": ""} pt-18 pb-8`}>
       <div className={` flex items-center justify-center `}>  <img src="/images/branding/logo.png" className="w-40" />  </div>

        {/* Section text */}
        <div className="flex flex-col gap-2 justify-center items-center text-center">
          <h2 className="text-2xl font-medium">Welcome to Fixeroni</h2>
          <p className="text-[#787878] text-md">
            Let us get things running smoothly and <br /> keep the world in
            working order.
          </p>
        </div>
        </div>
      
        {/* Login / Register switch */} 
        <Switch login={<LoginContent />} register={<RegisterContent />} />
      </AuthHoverCard>
    </AuthLayout>
  );
}
