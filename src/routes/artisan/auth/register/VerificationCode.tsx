import { createFileRoute, Navigate, useNavigate } from "@tanstack/react-router";

import { Input } from "@headlessui/react";
import { useState, useEffect, useRef } from "react";
// import RegisterClient from './Client';
import LoginContent from "@/components/auth/LoginContent";
import { useLoginStore } from "@/stores/auth/useLoginStore";
import { useOtpStore } from "@/stores/auth/useVerificationStore";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthStore } from "@/stores/auth/useAuthStore";



export const Route = createFileRoute("/artisan/auth/register/VerificationCode")(
  {
    component: VerificationCode,
  },
);

function VerificationCode() {
  const { setContent } = useLoginStore();
  const navigate = useNavigate();
  
  const { email } = useAuthStore(); // ⬅️ email from auth store

  const {
    timer,
    startTimer,
    sendOtp,
    verifyOtp,
    loading,
    otpSent,
    otpVerified,
  } = useOtpStore();

 // Start timer immediately if not running
useEffect(() => {
  if (!otpSent) {
    sendOtp(email); // Automatically send OTP on page load
  }
  startTimer();
}, []);


  //  Navigate to dashboard after OTP verification
  useEffect(() => {
    if (otpVerified) {
      navigate({ to: "/artisan/dashboard" });
    }
  }, [otpVerified, navigate]);

  //  OTP submit handler
  const handleComplete = (code: string) => {
    verifyOtp(email, code);
  };

  //  Timer display format
  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };



  return (
    <div>
      <div className="flex gap-6 mt-5">
        <VerificationInput onComplete={handleComplete} />
       
      </div>

      <div className="relative">
        <div className=" flex justify-center mt-3 mb-3  ">
          <img
            src="/images/icons/verification-icon.png"
            alt="verification-icon"
            className=""
          />
        </div>
              {timer > 0 ? (
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="text-[#0F9067] text-[48px] font-normal">
            {formatTimer(timer)}
          </p>
        </div>):(

          <button
    onClick={() => {
      sendOtp(email);   
      startTimer();     
    }}
    disabled={loading}
    className="text-blue-600 font-medium hover:underline cursor-pointer"
  >
    Resend OTP
  </button>

        )
        }
      </div>

      <div className="text-center mt-10 mb-7">
        <p className="text-[#616161] text-[16px] font-normal">
          Code expires in 10 minute
        </p>
        <button type="button" onClick={()=>setContent("login")}>Retry</button>
      </div>


       <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

function VerificationInput({ onComplete }: { onComplete: (otp: string) => void }) {


const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return; // only allow digits

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to next input if value entered
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }

    // Call onComplete when all digits are filled
    if (newOtp.every((digit) => digit.length === 1)) {
      onComplete(newOtp.join(""));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };





  return (
    <>
    {otp.map((digit, index) => (
    <Input
         key={index}

         ref={(el) => {inputsRef.current[index] = el as HTMLInputElement | null;}}

      name="number"
      type="number"
      inputMode="numeric"
      maxLength={1}
      value={digit}
      onChange={(e) => handleChange(e.target.value, index)}
     onKeyDown={(e) => handleKeyDown(e, index)}


      className=" text-center
    focus:appearance-none 
    [&::-webkit-inner-spin-button]:appearance-none
    [&::-webkit-outer-spin-button]:appearance-none
    [&::-webkit-inner-spin-button]:m-0
    [&::-webkit-outer-spin-button]:m-0
    [@media(pointer:coarse)]:appearance-none 
   
   focus:outline-none  font-bold text-2xl max-sm:w-[50px] w-[76px] max-sm:h-[50px] h-[63px] mb-2.5 border border-[#0F9067] "
    />
      ))}
    </>
  );
}

export default VerificationCode;
