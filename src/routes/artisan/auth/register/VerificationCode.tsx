import { createFileRoute, Navigate, useNavigate } from "@tanstack/react-router";

import { Input } from "@headlessui/react";
import { useState, useEffect } from "react";
// import RegisterClient from './Client';
import LoginContent from "@/components/auth/LoginContent";

export const Route = createFileRoute("/artisan/auth/register/VerificationCode")(
  {
    component: VerificationCode,
  },
);

function VerificationCode() {
  const [remaining, setRemaining] = useState(5 * 60);
  const [isExpired, setIsExpired] = useState(false);
  const navigate = useNavigate();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRemaining((prev) => {
//         if (prev <= 1) {
//           clearInterval(interval);
//           // navigate({to: "/artisan/auth/login"});
//           setIsExpired(true);

//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 100);

//     return () => clearInterval(interval);
//   }, []);

//  useEffect(() => {
//     if (isExpired) {
//       navigate({ to: "/" });
//     }
//   }, [isExpired, navigate]);

  // Calculate minutes and seconds separately
  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;

  // Always show 2 digits: like 03:04
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return (
    <div>
      <div className="flex gap-6 mt-5">
        <VerificationInput />
        <VerificationInput />
        <VerificationInput />
        <VerificationInput />
      </div>

      <div className="relative">
        <div className=" flex justify-center mt-3 mb-3  ">
          <img
            src="/images/icons/verification-icon.png"
            alt="verification-icon"
            className=""
          />
        </div>

        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="text-[#0F9067] text-[48px] font-normal">
            {formattedMinutes}:{formattedSeconds}
          </p>
        </div>
      </div>

      <div className="text-center mt-10 mb-7">
        <p className="text-[#616161] text-[16px] font-normal">
          Code expires in few minute
        </p>
      </div>
    </div>
  );
}

function VerificationInput() {
  return (
    <Input
      name="number"
      type="number"
      className=" text-center
    focus:appearance-none 
    [&::-webkit-inner-spin-button]:appearance-none
    [&::-webkit-outer-spin-button]:appearance-none
    [&::-webkit-inner-spin-button]:m-0
    [&::-webkit-outer-spin-button]:m-0
    [@media(pointer:coarse)]:appearance-none 
   
   focus:outline-none  font-bold text-2xl max-sm:w-[50px] w-[76px] max-sm:h-[50px] h-[63px] mb-2.5 border border-[#0F9067] "
    />
  );
}

export default VerificationCode;
