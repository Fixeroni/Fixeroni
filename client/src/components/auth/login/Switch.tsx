import React, { ReactNode, useState } from "react";

function Switch({
  login,
  register,
}: {
  login: ReactNode;
  register: ReactNode;
}) {
  // Track the selected content;
  const [content, setContent] = useState<"login" | "register">("login");

  return (
    <article className="w-full flex flex-col justify-center items-center">
      <article className="flex gap-4 items-center mb-4 w-full justify-center items-center">
        <article className={`${content === "login" && "border-b-2 border-primary"} cursor-pointer p-2 text-lg`} onClick={() => setContent("login")}>
          Login
        </article>
        <article className={`${content === "register" && "border-b-2 border-primary"} cursor-pointer p-2 text-lg`} onClick={() => setContent("register")}>
          Register
        </article>
      </article>

      {
        content === "login" ? login : register
      }
    </article>
  )
}

export default Switch;
