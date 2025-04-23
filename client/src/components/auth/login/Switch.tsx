import  { ReactNode, useState } from "react";
import AnimateEntranceFromBottom from "../../animated/AnimateEntranceFromBottom";
import { useLoginStore } from "@/stores/auth/useLoginStore";

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
    <div className="w-full flex flex-col justify-center items-center  ">
      <div className="flex gap-4 items-center mb-4 w-full justify-center  bg-white ">
        <div
          className={`${content === "login" && "border-b-2 border-[#0F9067]"} cursor-pointer p-2 text-lg min-w-[120px] text-center`}
          onClick={() => setContent("login")}
        >
          Login
        </div>
        <div
          className={`${content === "register" && "border-b-2 border-[#0F9067]"} cursor-pointer p-2 text-lg min-w-[120px] text-center`}
          onClick={() => setContent("register")}
        >
          Register
        </div>
      </div>

      {content === "login" ? (
        <AnimateEntranceFromBottom>{login}</AnimateEntranceFromBottom>
      ) : (
        <AnimateEntranceFromBottom>{register}</AnimateEntranceFromBottom>
      )}
    </div>
  );
}

export default Switch;


