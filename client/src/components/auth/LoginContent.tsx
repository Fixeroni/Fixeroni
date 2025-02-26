import React from "react";
import Input from "./Input";
import { Mail } from "lucide-react";

function LoginContent() {
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
          startContent={<Mail size={30} strokeWidth={2} />}
          placeholder="Enter email address"
        />
      </form>
    </article>
  );
}

export default LoginContent;
