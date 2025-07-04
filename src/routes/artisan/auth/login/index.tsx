import { createFileRoute } from "@tanstack/react-router";
import AuthLayout from "../../../../components/shared/AuthLayout";
import AuthHoverCard from "../../../../components/shared/AuthHoverCard";
import Switch from "../../../../components/auth/login/Switch";
import LoginContent from "../../../../components/auth/LoginContent";
import RegisterContent from "../../../../components/auth/RegisterContent";
import { useLoginStore } from "@/stores/auth/useLoginStore";
import { useAuthStore } from "@/stores/auth/useAuthStore";

export const Route = createFileRoute("/artisan/auth/login/")({
  component: RouteComponent,
});

function RouteComponent() {
const {content} = useLoginStore()

const { email } = useAuthStore();

const maskEmail = (email: string) => {
  if (!email || !email.includes('@')) return ''; // ✅ basic guard

  const [user, domain] = email.split('@');

  if (!user || user.length <= 3) {
    return `${user?.charAt(0) ?? ''}****@${domain}`; // fallback for short usernames
  }

  const visible = user.slice(0, 3);
  const masked = '*'.repeat(user.length - 3);

  return `${visible}${masked}@${domain}`;
};


  return (
    <AuthLayout>
      <AuthHoverCard>
        {/* Fixeroni icon */}
     <div className={`w-full h-full bg-white ${content==="register" ? "pt-18 pb-3": ""} pt-18 pb-8 ${content === "Login/RegCode" ? "pb-0 ": ""}`}>
       <div className={` flex items-center justify-center `}>  <img src="/images/branding/logo.png" className="w-40" />  </div>

        {/* Section text */}
        <div className="flex flex-col gap-2 justify-center items-center text-center">
         {content === "Login/RegCode" ? ( <h2 className="text-2xl font-medium">Enter Confirmation Code</h2>):( <h2 className="text-2xl font-medium">Welcome to Fixeroni</h2>)}
         {content === "Login/RegCode" ? (
          <p className="text-[#787878] text-md mt-4">
          we have sent a confirmation code to  <br /> {email ? (
      <span className="font-bold text-black mt-8">
        {maskEmail(email)}
      </span>
    ) : (
      <span className="text-red-500">No email found</span>
    )}
        </p>
         ): (
          <p className="text-[#787878] text-md">
          Let us get things running smoothly <br className="max-sm:block hidden"/> and <br className="max-sm:hidden"/> keep the world in
          working order.
          </p>

         )} 
        </div>
        </div>
      
        {/* Login / Register switch */} 
        <Switch login={<LoginContent />} register={<RegisterContent />} />
      </AuthHoverCard>
    </AuthLayout>
  );
}
