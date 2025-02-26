import React, { ReactNode } from "react";

function Input(props: any) {
  return (
    <article className="bg-white rounded-xl p-2 text-[#616161] flex gap-2 items-center">
      {props.startContent}

      <input
        className="placeholder:text-[#616161] bg-transparent w-full focus:outline-none"
        {...props}
      />
    </article>
  );
}

export default Input;
