import { createFileRoute } from '@tanstack/react-router'
import SideBarNav from './SideBarNav'



export const Route = createFileRoute('/artisan/dashboard/DashBoardComponent/DashboardMainPage')({
  component: DashboardMinPage,
})

 function DashboardMinPage() {
  return (
    <div className='flex gap-5 '>

        <div>

        <SideBarNav /> 
        </div>
   


    <div className='scroll-smooth overflow-y-auto scrollBar flex-grow-1'>

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
          <h2 className='Poppins text-[#1E1E1E] text-[36px] font-medium mt-4'>Find a Pro</h2>
      </section>
      sect
    



    </div>


    </div>
  )
}



export default DashboardMinPage;


// /* Find a Pro */

// position: absolute;
// width: 182px;
// height: 45px;
// left: 177px;
// top: 129px;

// font-family: 'Poppins';
// font-style: normal;
// font-weight: 500;
// font-size: 36px;
// line-height: 14px;
// /* or 38% */
// display: flex;
// align-items: center;

// color: #1E1E1E;


