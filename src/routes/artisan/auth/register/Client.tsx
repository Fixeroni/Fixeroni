import Input from "@/components/auth/Input";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "lucide-react";


export const Route = createFileRoute("/artisan/auth/register/Client")({
  component: RegisterClient,
});

type RegisterInpuProps = {
  placeholder: string;
  type: string;
  paddingBottom: string;
};

function RegisterClient() {
 

  return (
    <div>
      <form className="max-sm:px-2">
        <RegisterInpu
          placeholder={"First name"}
          type={"text"}
          paddingBottom={""}
        />
        <RegisterInpu
          placeholder={"Email address"}
          type={"text"}
          paddingBottom={""}
        />
        <RegisterInpu
          placeholder={"Fixeroni tag"}
          type={"text"}
          paddingBottom={""}
        />
        <RegisterInpu
          placeholder={"Password"}
          type={"password"}
          paddingBottom={""}
        />
        <RegisterInpu
          placeholder={"Confirm password"}
          type={"password"}
          paddingBottom={"mb-5"}
        />

        <div className="flex  gap-4 items-center text-center  pb-4 text-[12px] font-normal">
          <div>
            <input
              type="checkbox"
              className="border-[#1E1E1E] accent-[#0F9067] w-[22px] aspect-square border bg-[#FFFFFF] rounded-[ 3px]"
            />
          </div>
          <div>
            <p>By signing up, you agree to the Fixeroni</p>
            <p> 
              <span className="text-[#0F9067]  underline cursor-pointer">
                Terms of Service
              </span>
              and
              <span className="text-[#0F9067] underline cursor-pointer">
                Privacy Policy
              </span>
            </p>
          </div>
        </div>

        <button
          className="font-semibold text-white bg-[#0F9067] shadow-sm mb-6 transition duration-300 p-2 hover:cursor-pointer h-[ 44px] rounded-[20px]  w-[356px]"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
}

function RegisterInpu({ placeholder, type, paddingBottom }: RegisterInpuProps) {
  return (
    <div
      className={`bg-white rounded-xl ${paddingBottom} mt-3 px-4 py-2 placeholder:text-sm text-[#616161] max-sm:w-full w-[356px] flex gap-2 items-center`}
    >
      <input
        type={type}
        className=" bg-transparent w-full  focus:outline-none  my-input"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default RegisterClient;
