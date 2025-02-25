import { ReactNode } from "react";

function AuthHoverCard({ children }: { children: ReactNode }) {
  return (
    <article className="w-full absolute h-full flex flex-col justify-center items-center">
      <article className="bg-white-dark md:p-8 p-4 shadow-md hover:shadow-xl transition duration-300 rounded-xl w-fit h-fit flex flex-col justify-center items-center gap-4">
        {children}
      </article>
    </article>
  );
}

export default AuthHoverCard;
