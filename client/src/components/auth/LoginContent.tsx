import { useState } from "react";
import Input from "./Input";
import { Eye, EyeOff, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";

function LoginContent() {
  // Track whether the password is shown or not
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <article>
      <button
        type="button"
        className="flex gap-4 text-black items-center justify-center w-full bg-white rounded-xl shadow-md px-8 py-2"
      >
        <img src="/images/icons/google.png" className="w-6 h-6" />
        Login in with Google
      </button>

      <article className="flex gap-2 items-center justify-center my-4 text-gray-primary">
        <article className="w-[75px] h-[1px] bg-gray-primary"></article>
        Or continue with email
        <article className="w-[75px] h-[1px] bg-gray-primary"></article>
      </article>

      <form className="flex flex-col gap-8">
        <Input
          type="email"
          startContent={<Mail className="text-primary-light" size={30} strokeWidth={2} />}
          placeholder="Enter email address"
        />

        <Input
          type={showPassword ? "text" : "password"}
          startContent={showPassword ? <EyeOff className="text-primary-light" size={30} strokeWidth={2} onClick={() => setShowPassword((prev) => !prev)} /> : <Eye className="text-primary-light" size={30} strokeWidth={2} onClick={() => setShowPassword((prev) => !prev)} />}
          placeholder="Enter password"
        />

        <Link className="text-[#616161]" to="/artisan/auth/forgot-password">
          Forgot password ?
        </Link>

        <button className="font-semibold text-white bg-primary shadow-sm hover:shadow-md transition duration-300 p-2 hover:cursor-pointer rounded-lg" type="submit">
          Login
        </button>
      </form>
    </article>
  );
}

export default LoginContent;
