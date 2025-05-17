import  { ReactNode, useState } from "react";
import AnimateEntranceFromBottom from "../../animated/AnimateEntranceFromBottom";
import { useLoginStore } from "@/stores/auth/useLoginStore";
import RegisterClient from "@/routes/artisan/auth/register/Client";
import Artisant from "@/routes/artisan/auth/register/Artisant";
import VerificationCode from "@/routes/artisan/auth/register/VerificationCode";
// import ClientRegister from "@/routes/artisan/auth/register/ClientRegister";

function Switch({
  login,
  register,
}: {
  login: ReactNode;
  register: ReactNode;
}) {
  // Track the selected content;
  // const [content, setContent] = useState<"login" | "register">("login");
     const {content, setContent} = useLoginStore()
    

  return (
    <div className="w-full flex flex-col justify-center items-center ">
      {content === "Login/RegCode" ? "" : (
         <div className="flex gap-4 items-center mb-4 w-full justify-center  bg-white ">
         <div
           className={`${content === "login" && "border-b-2 border-[#0F9067]"} cursor-pointer p-2 text-lg min-w-[120px] text-center`}
           onClick={() => setContent("login")}
         >
           Login
         </div>
         <div
           className={`${(content === "register" || content === "Client" || content === "ArtisantA") ? "border-b-2 border-[#0F9067]": ""} cursor-pointer p-2 text-lg min-w-[120px] text-center`}
           onClick={() => setContent("register")}
         >
           Register
         </div>
       </div>
      )}
     

      {content === "login" && (<AnimateEntranceFromBottom>{login}</AnimateEntranceFromBottom>)}
      {content === "register" && (<AnimateEntranceFromBottom>{register}</AnimateEntranceFromBottom>)}
      {content === "Client" && (<AnimateEntranceFromBottom> <RegisterClient /> </AnimateEntranceFromBottom>)}
      {content === "ArtisantA" && (<AnimateEntranceFromBottom> <Artisant /> </AnimateEntranceFromBottom>)}
      {content === "Login/RegCode" && (<AnimateEntranceFromBottom> <VerificationCode /> </AnimateEntranceFromBottom>)}
    </div>
  );
}

export default Switch;


