import { useLoginStore } from "@/stores/auth/useLoginStore";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/artisan/auth/register/Artisant")({
  component: Artisant,
});

interface FormData {
  firstName: string;
  email: string;
  address: string;
  password: string;
  confirmpassword: string;
}

function Artisant() {
  const {steps, setSteps} = useLoginStore()
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    email: "",
    address: "",
    confirmpassword: "",
    password: "",
  });

  const handleNext = () => {
    setSteps(steps + 1);
  };

  const handlePrev = () => {
    setSteps(steps - 1);
  };

  const handleChange =
    (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  return (
    <div>
      <div>
        <form action="">
          <h3 className="text-[#000000] text-[20px] font-normal">
            {steps === 1 && "Personal Information"}
            {steps === 2 && "Personal Details"}
            {steps === 3 && "Verification And Security"}
          </h3>
          {steps === 1 && (
            <div>
              <ArtisantRegisterInpu
                placeholder={"First name"}
                type={"text"}
                paddingBottom={""}
                value={formData.firstName}
                onChange={handleChange("firstName")}
              />
              <ArtisantRegisterInpu
                placeholder={"Email address"}
                type={"email"}
                paddingBottom={""}
                value={formData.email}
                onChange={handleChange("email")}
              />
              <ArtisantRegisterInpu
                placeholder={"Address"}
                type={"text"}
                paddingBottom={""}
                value={formData.address}
                onChange={handleChange("address")}
              />
              <ArtisantRegisterInpu
                placeholder={"Password"}
                type={"password"}
                paddingBottom={""}
                value={formData.password}
                onChange={handleChange("password")}
              />
              <ArtisantRegisterInpu
                placeholder={"Confirm password"}
                type={"password"}
                paddingBottom={"mb-5"}
                value={formData.confirmpassword}
                onChange={handleChange("confirmpassword")}
              />
            </div>
          )}


          {steps === 2 && (
            <div>
             <SelectCategoryInpu placeHolder={"Select Category of Service"} options={["Select Category of Service"]}/>
             <SelectCategoryInpu placeHolder={"Years of Experience"} options={["Years of Experience"]}/>
              <ArtisantRegisterInpu
                placeholder={"Work Portfolio"}
                type={"file"}
                paddingBottom={""}
                value={formData.password}
                onChange={handleChange("password")}
              />
            </div>
          )}
          {steps === 3 && (
            <div>
              <ArtisantRegisterInpu
                placeholder={"Address"}
                type={"file"}
                paddingBottom={""}
                value={formData.address}
                onChange={handleChange("address")}
              />
              <ArtisantRegisterInpu
                placeholder={"Password"}
                type={"file"}
                paddingBottom={""}
                value={formData.password}
                onChange={handleChange("password")}
              />
            </div>
          )}

          
{steps === 3 && (
            <div className="flex  gap-4 items-center text-center mt-3   text-[12px] font-normal">
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
          )}

          <div className="flex gap-2 mt-3">
            {steps === 2  && (
              <button
                className="font-semibold text-white bg-[#0F9067] shadow-sm mb-6 transition duration-300 p-2 hover:cursor-pointer h-[ 44px] rounded-[20px]  w-full"
                type="button"
                onClick={handlePrev}
              >
                Previous 
              </button>
            )}

            {steps === 2 && (
              <button
                className="font-semibold text-white bg-[#0F9067] shadow-sm mb-6 transition duration-300 p-2 hover:cursor-pointer h-[ 44px] rounded-[20px]  w-full"
                type="button"
                onClick={handleNext}
                
              >
                Next 
              </button>
            )} 
             {steps === 1 && (
              <button
                className="font-semibold text-white bg-[#0F9067] shadow-sm mb-6 transition duration-300 p-2 hover:cursor-pointer h-[ 44px] rounded-[20px]  w-full"
                type="submit"
                onClick={handleNext}
              >
                Next 
              </button>
            )}
               {steps > 2 && (
             <button
              className="font-semibold text-white bg-[#0F9067] shadow-sm mb-6 transition duration-300 p-2 hover:cursor-pointer h-[ 44px] rounded-[20px]  w-full"
              type="button"
              onClick={handlePrev}
            >
              Previous
            </button> 
             )}
                     {steps > 2 && (
             <button
              className="font-semibold text-white bg-[#0F9067] shadow-sm mb-6 transition duration-300 p-2 hover:cursor-pointer h-[ 44px] rounded-[20px]  w-full"
              type="submit"
            >
              Submit
            </button> 
             )}

          </div>
        </form>
      </div>
    </div>
  );
}

type ArtisantRegisterInpuProps = {
  placeholder: string;
  type: string;
  paddingBottom: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function ArtisantRegisterInpu({
  placeholder,
  type,
  paddingBottom,
  value,
  onChange,
}: ArtisantRegisterInpuProps) {
  return (
    <div
      className={`bg-white rounded-xl ${paddingBottom} mt-3 px-4 py-2 placeholder:text-sm text-[#616161] w-[356px] flex gap-2 items-center`}
    >
      <input
        type={type}
        className=" bg-transparent w-full  focus:outline-none  my-input"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required
      />
    </div>
  );
}


interface SelectCategoryInputProps {
  options?: string[]; // an array of options
  placeHolder:string;
}


function SelectCategoryInpu({placeHolder,  options= []}:SelectCategoryInputProps){
    return(
        <div className=" bg-white rounded-xl mt-3 px-4 py-2 placeholder:text-sm text-[#616161] w-[356px] flex gap-2 items-center">
            <select name="" id="" className="w-full  bg-transparent focus:outline-none">
                <option value="" disabled selected className="opacity-[0.5] text-[#616161]" >{placeHolder}</option>
                {options.map((option, index) => (
          <option key={index} value={option.toLowerCase()}>
            {option}
          </option>
        ))}
            </select>
       
        </div>
    )
}


export default Artisant;
