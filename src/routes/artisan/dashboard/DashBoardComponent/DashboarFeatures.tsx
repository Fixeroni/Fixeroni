// import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react';
import StarRating from '../DashBoardComponent/StarRating';
import { Feature } from '../../../../types';


export const Route = createFileRoute('/artisan/dashboard/DashBoardComponent/DashboarFeatures')({
  component:  DashboarFeatures,
})





 export function DashboarFeatures({Margintop,  image, title, distance }:Feature) {
  const [rating, setRating] = useState<number | null>(null);


  useEffect(() => {
    setRating(4); 
  }, []);
  const [modal, setModal] = useState(false);
function togglepopup(){
  setModal(!modal);
}
if (modal) {
  document.body.classList.add("overflowx-hidden");
}
else{
  document.body.classList.remove("overflowx-hidden")
}
  if (rating === null) return null;

  return (
    <div className={`${Margintop}`}>
        <div className='h-[180px] w-full bg-[#FFFFFF] rounded-[20px] shawdow---feature p-5 flex items-center justify-between'>
          <div>
            <div className=' flex items-center gap-4'>
              <div>
                <img src={image} alt="feature_image_A" />
              </div>
              <div>
                <h2 className='Poppins text-[#1E1E1E] text-[23px] font-medium'>{title}</h2>
                <div className='flex items-center gap-4 '>
                  <span className='leading-[23px] mt-[-0.4rem]'>
                    <p className='text-[#535353] font-normal text-[14px]'>Trade</p>
                    <p className='text-[#535353] font-medium text-[14px]'>Experience</p>
                    <p className='text-[#535353] font-medium text-[14px]'> Active </p>
                   
                    <StarRating  rating={rating} onRatingChange={setRating} />  
                   
                    
                  </span>
                  <span className='leading-[22px]'>
                    <p className='text-[#535353] text-[14px] font-normal'>Electrician</p>
                    <p className='text-[#535353] text-[14px] font-normal'>15+ Years</p>
                    <p className='text-[#535353] text-[14px] font-normal'>Online</p>
                    <p className='text-[#535353] text-[14px] font-normal'>51 reviews</p>

                  </span>
                </div>
              </div>
            </div>

            <div>

           
            </div>


          </div>

          <div>
            <div className='flex flex-col gap-2 '>
              <p className='text-[#1E1E1E] text-[14px] font-medium ml-auto'>{distance}</p>
               <button onClick={togglepopup} type='button' className='text-[#FFFFFF] bg-[#0F9067] cursor-pointer
             h-[35px] rounded-[17.5px] w-[151.14px]'> Book Now</button>
              <button onClick={togglepopup} type='button' className='text-[#0F9067] border-[#0F9067] border cursor-pointer mt-2
             h-[35px] rounded-[17.5px] w-[151.14px]'> Book Now</button> 
             </div>
            </div> 


          </div>
          <div>
            {modal &&(
             
              <div className='z-[100]  top-[260px] left-[20px] absolute w-[100%] flex justify-center'>
              <div className=' w-[40%] rounded-[25px] bg-[#fff]  border border-[black] h-[460px]'>
                 <div className='flex justify-end mt-[25px] '><i onClick={togglepopup} className=" fa-solid fa-times text-[30px] mr-[17px]"></i></div>
                 <div className='flex justify-center items-center  h-[403px] rounded-[25px]'>
                 <div className='block  justify-center items-center '>
                  <div className='flex items-center justify-center p-[15px] font-[poppins] '><p>Click to make payment</p></div>
                  <div className='flex justify-center mt-[17px]'><button className='block bg-[#0F9067] h-[60px] text-[white] w-[75%] rounded-[10px]'><p className='text-[verdana]'>Fee</p><p className='text-[verdana]' >NGN 500</p></button></div>
                  <div className='p-[15px] justify-center items-center w-[100%]'>
                  <p className='flex justify-center text-[13px] font-[poppins]'>To access our artisans, a NGN 500 charge</p>
                  <p className='flex justify-center text-[13px] font-[poppins]'> applies. This fee is fully refundable if the</p>
                  <p className='flex justify-center text-[13px] font-[poppins]'> agreed terms are not met</p></div>
                 </div>
                 </div>
            </div>
            </div>
      
            )}
            </div>

            
        </div>

  


    
  )
}


export default DashboarFeatures;

