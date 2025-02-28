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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login({ email, password });
      navigate({ to: "/artisan/dashboard" });
    } catch (error) {
      // Handle error (show toast, etc)
    }
  };

  const handleGoogleLogin = async () => {
    try {
      // Load the Google SDK
      await new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "https://accounts.google.com/gsi/client";
        script.onload = resolve;
        document.body.appendChild(script);
      });

      // Initialize Google Sign-In
      google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: async (response) => {
          try {
            await googleLogin(response.credential);
            navigate({ to: "/artisan/dashboard" });
          } catch (error) {
            // Handle error
          }
        },
      });

      google.accounts.id.prompt();
    } catch (error) {
      console.error("Google Sign-In error:", error);
    }
  };

  return (
    <article className="flex flex-col gap-4 items-center justify-center">
      {isLoading && <LoadingSpinner />}
      <button
        type="button"
        onClick={handleGoogleLogin}
        className="flex gap-4 text-black items-center justify-center w-full bg-white hover:cursor-pointer rounded-xl shadow-md px-8 py-2 md:max-w-[400px]"
      >
        <img src="/images/icons/google.png" className="w-6 h-6" />
        Login in with Google
      </button>

      <article className="flex gap-2 items-center justify-center my-4 text-gray-primary">
        <article className="w-[75px] h-[1px] bg-gray-primary"></article>
        Or continue with email
        <article className="w-[75px] h-[1px] bg-gray-primary"></article>
      </article>

      <form onSubmit={handleSubmit} className="flex flex-col gap-8 justify-center items-center">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          startContent={
            <Mail className="text-primary-light" size={30} strokeWidth={2} />
          }
          placeholder="Enter email address"
        />

        <Input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          startContent={
            showPassword ? (
              <EyeOff
                className="text-primary-light hover:cursor-pointer"
                size={30}
                strokeWidth={2}
                onClick={() => setShowPassword((prev) => !prev)}
              />
            ) : (
              <Eye
                className="text-primary-light hover:cursor-pointer"
                size={30}
                strokeWidth={2}
                onClick={() => setShowPassword((prev) => !prev)}
              />
            )
          }
          placeholder="Enter password"
        />

        <Link className="text-[#616161]" to="/artisan/auth/forgot-password">
          Forgot password ?
        </Link>

        <button
          className="font-semibold text-white bg-primary shadow-sm hover:shadow-md transition duration-300 p-2 hover:cursor-pointer rounded-lg md:min-w-[400px] md:max-w-[400px]"
          type="submit"
        >
          Login
        </button>

        <article className="flex gap-2 items-center text-center justify-center">
          By signing up, you agree to the Fixeroni{" "}
          <Link to="/" className="text-primary underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/" className="text-primary underline">
            Privacy Policy
          </Link>
        </article>
      </form>
    </article>
  );
}

export default LoginContent;
