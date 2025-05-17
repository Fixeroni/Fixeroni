import React, { ReactNode } from "react";

function Input(props: any) {




  return (
    <article className="bg-white rounded-xl px-4 py-2 placeholder:text-sm text-[#616161] w-[356px] flex gap-2 items-center">
      {props.startContent}

      <input
        className=" bg-transparent w-full  focus:outline-none  my-input"
       placeholder={props.placeholder} type={props.type} required
      />
    </article>
  );
}

export default Input;
