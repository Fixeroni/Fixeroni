import { useLoginStore } from "@/stores/auth/useLoginStore";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const Route = createFileRoute("/artisan/auth/register/Artisant")({
  component: Artisant,
});

interface FormData {
  firstName: string;
  email: string;
  address: string;
  password: string;
  confirmpassword: string;
  workportfolio: string;
  governmentIdUpload:string;
  profilePicture: string;
}

function Artisant() {
  const {steps, setSteps, setContent} = useLoginStore()
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    email: "",
    address: "",
    confirmpassword: "",
    password: "",
    governmentIdUpload: "",
    profilePicture: "",
    workportfolio: ""
  });

  const handleNext = () => {
    setSteps(steps + 1);
  };

  const handlePrev = () => {
    setSteps(steps - 1);
  };

  const handleChange =
    (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        setFormData((prev) => ({
          ...prev,
          [field]: file.name, // store the file name
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          [field]: e.target.value,
        }));
      }
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
                filePlaceholder={""}
                fieldId="firstName" 
              />
              <ArtisantRegisterInpu
                placeholder={"Email address"}
                type={"email"}
                paddingBottom={""}
                value={formData.email}
                onChange={handleChange("email")}
                filePlaceholder={""}
                fieldId="email" 
              />
              <ArtisantRegisterInpu
                placeholder={"Address"}
                type={"text"}
                paddingBottom={""}
                value={formData.address}
                onChange={handleChange("address")}
                filePlaceholder={""}
                fieldId="address" 
              />
              <ArtisantRegisterInpu
                placeholder={"Password"}
                type={"password"}
                paddingBottom={""}
                value={formData.password}
                onChange={handleChange("password")}
                filePlaceholder={""}
                fieldId="password" 
              />
              <ArtisantRegisterInpu
                placeholder={"Confirm password"}
                type={"password"}
                paddingBottom={"mb-5"}
                value={formData.confirmpassword}
                onChange={handleChange("confirmpassword")}
                filePlaceholder={""}
                fieldId="confirmpassword" 
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
                value={formData.workportfolio}
                onChange={handleChange("workportfolio")}
                filePlaceholder={"Work Portfolio"}
                fieldId="workportfolio" 
              />
            </div>
          )}
          {steps === 3 && (
            <div>
              <ArtisantRegisterInpu
                placeholder={"Government Id Upload"}
                type={"file"}
                paddingBottom={""}
                value={formData.governmentIdUpload}
                onChange={handleChange("governmentIdUpload")}
                filePlaceholder={"Government Id Upload"}
                fieldId="governmentIdUpload" 
              />
              <ArtisantRegisterInpu
                placeholder={"Profile Picture"}
                type={"file"}
                paddingBottom={""}
                value={formData.profilePicture}
                onChange={handleChange("profilePicture")}
                filePlaceholder={"Profile Picture"}
                fieldId="file-profilePicture" 
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
                type="button"
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
              onClick={() => setContent("Login/RegCode")}
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
  fieldId:string;
  filePlaceholder:string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function ArtisantRegisterInpu({
  placeholder,
  type,
  paddingBottom,
  value,
  fieldId,
  filePlaceholder,
  onChange,
}: ArtisantRegisterInpuProps) {
  const showFileSelected = value !== "";

  return (
    <div
      className={`bg-white relative rounded-xl ${paddingBottom} mt-3 px-4 py-2 placeholder:text-sm text-[#616161] w-[356px] flex gap-2 items-center`}
    >
      {type === "file" && !showFileSelected && (
           <label
           htmlFor={fieldId}
           className="  text-[#616161] opacity-[0.5] cursor-pointer w-full"
         >
           {filePlaceholder}
         </label>
      )} 
      <input
        type={type}
         id={fieldId}
        className={` bg-transparent w-full  focus:outline-none  my-input ${type === "file" && !showFileSelected && "hidden" }`}
        placeholder={placeholder}
        onChange={onChange}
        value={type === "text" ? value : undefined}
        required
      />
       {type == "file" && (
        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                 <img src="/images/icons/upload-icon.png" alt="" />
            </div>
       )}
       
    </div>
  );
}


interface SelectCategoryInputProps {
  options?: string[]; // an array of options
  placeHolder:string;
}


function SelectCategoryInpu({placeHolder,  options= []}:SelectCategoryInputProps){
    return(
        <div className=" bg-white relative rounded-xl mt-3 px-4 py-2 placeholder:text-sm text-[#616161] w-[356px] flex gap-2 items-center">
            <select name="" id="" className="w-full appearance-none bg-transparent focus:outline-none ">
                <option value="" disabled selected hidden className="opacity-50 text-[#616161]" >{placeHolder}</option>
                {options.map((option, index) => (
          <option key={index} value={option.toLowerCase()}>
            {option}
          </option>
        ))}
            </select>


            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                 <IoIosArrowDown className="text-[#0F9067]"/>
            </div>
       
        </div>
    )
}


export default Artisant;
