import { createFileRoute } from '@tanstack/react-router'

import { Input } from '@headlessui/react'

export const Route = createFileRoute('/artisan/auth/register/VerificationCode')(
  {
    component: VerificationCode,
  },
)

function VerificationCode() {
    return (
      <div>
        <div className='flex gap-6 mt-5'>
         <VerificationInput />
         <VerificationInput />
         <VerificationInput />
         <VerificationInput />
        </div>

          <div className='relative'>
        <div className=" flex justify-center mt-3 mb-3  ">
        <img src="/images/icons/verification-icon.png" alt="verification-icon" className='' />
        </div>

        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                 <p className='text-[#0F9067] text-[48px] font-normal'>
                 05:00 
                 </p>
                 
            </div>
        </div>

        <div className='text-center mt-10 mb-7'>
          <p className='text-[#616161] text-[16px] font-normal'>Code expires in few minute</p>
        </div>
      </div>
    );
  }
  

// /* Code expires in few minute */

// width: 370px;
// height: 22px;

// font-family: 'Poppins';
// font-style: normal;
// font-weight: 400;
// font-size: 16px;
// line-height: 22px;
// /* identical to box height, or 138% */
// text-align: center;

// color: #616161;


// /* Inside auto layout */
// flex: none;
// order: 0;
// align-self: stretch;
// flex-grow: 0;









function  VerificationInput() {
  return <Input name="number" type="number" className=" text-center
    focus:appearance-none 
    [&::-webkit-inner-spin-button]:appearance-none
    [&::-webkit-outer-spin-button]:appearance-none
    [&::-webkit-inner-spin-button]:m-0
    [&::-webkit-outer-spin-button]:m-0
    [@media(pointer:coarse)]:appearance-none 
   
   focus:outline-none  font-bold text-2xl w-[76px] h-[63px] mb-2.5 border border-[#0F9067]"/>
}


  export default VerificationCode; 
  


