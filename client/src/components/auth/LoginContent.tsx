import React from "react";

function LoginContent() {
  return (
    <article>
      <button type="button" className="flex gap-4 text-black items-center justify-center w-full bg-white rounded-xl shadow-md px-8 py-2">
        <img
          src="/images/icons/google.png"
          className="w-6 h-6"
        />
        Login in with Google
      </button>

      <article className="flex gap-2 items-center justify-center"></article>
    </article>
  )
}

export default LoginContent;
