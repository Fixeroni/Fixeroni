import { useState } from "react";
import Input from "./Input";
import { Eye, EyeOff, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useAuthStore } from "../../stores/auth/useAuthStore";
import LoadingSpinner from "../shared/LoadingSpinner";
import { useNavigate } from "@tanstack/react-router";

function LoginContent() {
  // Track whether the password is shown or not
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, googleLogin, isLoading } = useAuthStore();
  const navigate = useNavigate();

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     await login({ email, password });
  //     navigate({ to: "/artisan/dashboard" });
  //   } catch (error) {
  //     // Handle error (show toast, etc)
  //   }
  // };

  // const handleGoogleLogin = async () => {
  //   try {
  //     // Load the Google SDK
  //     await new Promise((resolve) => {
  //       const script = document.createElement("script");
  //       script.src = "https://accounts.google.com/gsi/client";
  //       script.onload = resolve;
  //       document.body.appendChild(script);
  //     });

  // Initialize Google Sign-In
  // google.accounts.id.initialize({
  //   client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
  //   callback: async (response) => {
  //     try {
  //       await googleLogin(response.credential);
  //       navigate({ to: "/artisan/dashboard" });
  //     } catch (error) {
  //       // Handle error
  //     }
  //   },
  // });

  //     google.accounts.id.prompt();
  //   } catch (error) {
  //     console.error("Google Sign-In error:", error);
  //   }
  // };

  return (
    <div className="mt-20">
      <div className="">
        {isLoading && <LoadingSpinner />}

        <div className="flex flex-col justify-center  items-center">
          <button
            type="button"
            // onClick={handleGoogleLogin}
            className="flex gap-4 text-black mt-[-5.5rem] items-center justify-center w-[356px] bg-[#FFFFFF] cursor-pointer rounded-[12px]  px-8 py-2 md:max-w-[400px]"
          >
            <img src="/images/icons/google.png" className="w-6 h-6" />
            Login in with Google
          </button>
        </div>

        <div className="flex items-center gap-3 justify-center mt-6 mb-6">
          <div>
            {" "}
            <hr className="w-[99.84px] h-[1px] text-[#c2c2c2cc]" />{" "}
          </div>
          <div>
            <p className="text-[#c2c2c2cc] w-full text-[12px]">
              Or continue with email
            </p>
          </div>
          <div>
            {" "}
            <hr className="w-[99.84px] h-[1px] text-[#c2c2c2cc]" />{" "}
          </div>
        </div>

        <form className="flex flex-col gap-8 justify-center items-center">
          <Input
            type="email"
            value={email}
            // onChange={(e) => setEmail(e.target.value)}
            startContent={
              // <Mail className="text-primary-light" size={30} strokeWidth={2} />
              <img src="/images/icons/mail--loginIcon.png" alt="" />
            }
            placeholder="Enter email address"
          />

          <Input
            type={showPassword ? "text" : "password"}
            value={password}
            // onChange={(e) => setPassword(e.target.value)}
            startContent={
              <img
                src="/images/icons/login--eye-icon.png"
                alt=""
                onClick={() => setShowPassword((prev) => !prev)}
                className="cursor-pointer"
              />
            }
            placeholder="Enter password"
          />

          <Link
            className="text-[#616161] mr-auto px-33 mt-[-1.6rem] text-[12px] cursor-pointer"
            to="/artisan/auth/forgot-password"
          >
            Forget password?
          </Link>

          <button
            className="font-semibold text-white bg-[#0F9067] shadow-sm hover:shadow-md transition duration-300 p-2 hover:cursor-pointer h-[ 44px] rounded-[20px]  w-[356px]"
            type="submit"
          >
            Login
          </button>

          <div className="flex flex-col gap-2 items-center text-center justify-center pb-4 text-[12px] font-normal">
           <p>By signing up, you agree to the Fixeroni</p> 
           <p> <span><Link to="/" className="text-[#0F9067] underline">
              Terms of Service 
            </Link> </span> and <Link to="/" className="text-[#0F9067] underline"> Privacy Policy </Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginContent;






