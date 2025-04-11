// import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react';
import StarRating from '../DashBoardComponent/StarRating';
import { Feature } from '../../../../types';


export const Route = createFileRoute('/artisan/dashboard/DashBoardComponent/DashboarFeatures')({
  component:  DashboarFeatures,
})





 export function DashboarFeatures({Margintop,  image, title}:Feature) {
  const [rating, setRating] = useState<number | null>(null);


  useEffect(() => {
    setRating(4); 
  }, []);

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
              <p className='text-[#1E1E1E] text-[14px] font-medium ml-auto'>3km away</p>
              <button type='button' className='text-[#FFFFFF] bg-[#0F9067] cursor-pointer
             h-[35px] rounded-[17.5px] w-[151.14px]'> Book Now</button>
            
            <button type='button' className='text-[#0F9067] border-[#0F9067] border-2 cursor-pointer mt-2
             h-[35px] rounded-[17.5px] w-[151.14px]'>Send Message</button>
            </div>


          </div>

            
        </div>

  


    </div>
  )
}


// export default DashboarFeatures;

