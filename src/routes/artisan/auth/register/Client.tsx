import Input from "@/components/auth/Input";
import { useAuthStore } from "@/stores/auth/useAuthStore";
import { useLoginStore } from "@/stores/auth/useLoginStore";
import { useRegisterFormStore } from "@/stores/useRegisterFormStore";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "lucide-react";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const Route = createFileRoute("/artisan/auth/register/Client")({
  component: RegisterClient,
});

type RegisterInpuProps = {
  placeholder: string;
  type: string;
  paddingBottom: string;
  Value: string;
   onChangeHanler: (e: React.ChangeEvent<HTMLInputElement>) => void;
   readOnly?: boolean; 
};

function RegisterClient() {



const { formData, setFormData } = useRegisterFormStore();
// const [formData, setFormData] = useState({
//   firstName: "",
//   lastName: "",
//   email: "",
//   password: "",
//   fixeroniTag: "",
//   userType: "",
// });
const { signup, loading } = useAuthStore();


const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signup(formData);
  };

 

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-sm:px-2 justify-center place-items-center"
      >
        <RegisterInpu
          placeholder={"First name"}
          type={"text"}
          paddingBottom={""}
          Value={formData.firstName}
          onChangeHanler={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
        />
        {/* ************************************************ */}
        <RegisterInpu
          placeholder={"Last name"}
          type={"text"}
          paddingBottom={""}
          Value={formData.lastName}
          onChangeHanler={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
        />

        {/* ************************************************ */}


              {/* ************************************************ */}
        <RegisterInpu
          placeholder={"userType"}
          type={"text"}
          paddingBottom={""}
          Value={formData.userType}
          readOnly={true}
          onChangeHanler={(e) =>
            setFormData({ ...formData, userType: e.target.value})
          }
        />

        {/* ************************************************ */}



        <RegisterInpu
          placeholder={"Email address"}
          type={"text"}
          paddingBottom={""}
          Value={formData.email}
          onChangeHanler={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
        <RegisterInpu
          placeholder={"Fixeroni tag"}
          type={"text"}
          paddingBottom={""}
          Value={formData.fixeroniTag}
          onChangeHanler={(e) =>
            setFormData({ ...formData, fixeroniTag: e.target.value })
          }
        />
        <RegisterInpu
          placeholder={"Password"}
          type={"password"}
          paddingBottom={""}
          Value={formData.password}
          onChangeHanler={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        {/* <RegisterInpu
          placeholder={"Confirm password"}
          type={"password"}
          paddingBottom={"mb-5"}
          Value={formData.confirmPassword}
          onChangeHanler={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        /> */}
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
          className="font-semibold text-white bg-[#0F9067] outline-none shadow-sm mb-6 transition duration-300 p-2 hover:cursor-pointer h-[44px] rounded-[20px] max-sm:w-[290px]  w-[356px]"
          type="submit"
          
        >
          {loading ? "Registering..." : "Register"}
        </button>

        {/* {signupSuccess && <p className="text-green-600">Signup successful!</p>}
        {error && <p className="text-red-600">{error}</p>} */}
      </form>



       <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

function RegisterInpu({ placeholder, type, paddingBottom, Value,  onChangeHanler, readOnly = false}: RegisterInpuProps) {
  return (
    <div
      className={`bg-white rounded-xl ${paddingBottom} mt-3 px-4 py-2 placeholder:text-sm text-[#616161] max-sm:w-[290px] w-[356px] flex gap-2 items-center`}
    >
      <input
        type={type}
         value={Value}
        className=" bg-transparent w-full  focus:outline-none  my-input"
        placeholder={placeholder}
        onChange={ onChangeHanler}
         readOnly={readOnly} 
        required
      />
    </div>
  );
}

export default RegisterClient;
