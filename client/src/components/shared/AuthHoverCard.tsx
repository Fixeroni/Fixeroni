import { useLoginStore } from "@/stores/auth/useLoginStore";
import { ReactNode } from "react";

function AuthHoverCard({ children }: { children: ReactNode }) {
const {content} = useLoginStore()

  return (
    <div className="w-full  absolute  top-0   flex-col justify-center items-center">
      <div className={`   mx-auto  mb-8 ${content === "register" ? "mt-[4.4rem]": "mt-[4.4rem]"}
       w-[720px] bg-[#F8F8F8]
      rounded-[20px] h-full flex flex-col justify-center items-center overflow-hidden `}>
        {children}
      </div>
    </div>
  );
}

export default AuthHoverCard;

// /* Group 37166 */

// position: absolute;
// width: 720px;
// height: 711px;
// left: 360px;
// top: 95px;

// filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.05));

