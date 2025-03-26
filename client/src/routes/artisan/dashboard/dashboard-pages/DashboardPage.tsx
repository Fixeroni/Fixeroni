import { createFileRoute } from '@tanstack/react-router'
import StarRating from '../DashBoardComponent/StarRating';
import { useState } from 'react';

export const Route = createFileRoute('/artisan/dashboard/dashboard-pages/DashboardPage')({
  component: DashboardPage,
})

function DashboardPage() {
  const [rating, setRating] = useState(4)

  return (
    <div>
        
      <section>
      <div className='flex'>
        <div></div>
        <div className='flex items-center ml-auto p-2.5 mt-2.5 gap-3'>
          <img src="/images/icons/notification_profile.png" alt="notification"  className=''/>
          <img src="/images/icons/Profile_img.png" alt="Profile_img" />
        </div>
      </div>
      <hr className='w-full opacity-[0.4] border-[#0000007f] border mt-2'/>
      </section>

      <section>
          <h2 className='Poppins text-[#1E1E1E] text-[36px] font-medium mt-4'>Hi Ben</h2>

          <div className='bg-[#FF6363] h-[94px] w-full box-shawdow flex justify-between items-center mt-2.5'>
            <div className='pl-2.5 pb-2.5 ml-4'>
              <p className='text-[#1e1e1eb2] text-[1.2rem] Poppins font-medium'>Invite your friends and earn up to 
                <span className='text-white text-3xl' > 10% </span> Discount </p>
              <button className='rounded-[20px] bg-[#0F9067] w-[100px] h-[30px] text-white mt-2'>Invite now</button>
            </div>
            <div>
                <img src="/images/icons/side_image_dashboard.png" alt="" />
            </div>
          </div>
      </section>

      <section>
        <h3 className='Poppins text-[#1E1E1E] text-[20px] py-3'>Featured Pro’s</h3>

        <div className='h-[180px] w-full bg-[#FFFFFF] rounded-[20px] shawdow---feature p-3'>
          <div>
            <div className=' flex items-center gap-2'>
              <div>
                <img src="/images/assets/feature_image_A.png" alt="feature_image_A" />
              </div>
              <div>
                <h2 className='Poppins text-[#1E1E1E] text-[23px] font-medium'>Wade Warren</h2>
                <div className='flex items-center gap-4 '>
                  <span className='leading-[22px] mt-[-0.5rem]'>
                    <p className='text-[#535353] font-normal text-[14px]'>Trade</p>
                    <p className='text-[#535353] font-medium text-[14px]'>Experience</p>
                    <p className='text-[#535353] font-medium text-[14px]'> Active </p>
                    <p>
                    <StarRating  rating={rating} onRatingChange={setRating} />
                    </p>
                    
                  </span>
                  <span className='leading-[22px]'>
                    <p className='text-[#535353] text-[14px] font-normal'>Electrician</p>
                    <p className='text-[#535353] text-[14px] font-normal'>15+ Years</p>
                    <p className='text-[#535353] text-[14px] font-normal'>Online</p>
                    <p className='text-[#535353] text-[14px] font-normal'>reviews</p>

                  </span>
                </div>
              </div>
            </div>

            <div>

           
            </div>


          </div>

            
        </div>
      </section>
    </div>
  )
}

export default DashboardPage;


// /* Electrician */

// position: absolute;
// width: 67.51px;
// height: 10px;
// left: 255.92px;
// top: 71px;

// font-family: 'Poppins';
// font-style: normal;
// font-weight: 300;
// font-size: 13px;
// line-height: 10px;
// /* identical to box height, or 77% */
// display: flex;
// align-items: center;

// color: #535353;











