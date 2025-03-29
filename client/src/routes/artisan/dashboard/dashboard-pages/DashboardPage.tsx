import { createFileRoute } from '@tanstack/react-router'
import {DashboarFeatures } from '../DashBoardComponent/DashboarFeatures';

export const Route = createFileRoute('/artisan/dashboard/dashboard-pages/DashboardPage')({
  component: DashboardPage,

});



function DashboardPage() {


  return (
    <div className=''>
        
      {/* <section className='sticky top-0 z-10 w-full bg-[#F8F8F8]'>
      <div className='flex'>
        <div></div>
        <div className='flex items-center ml-auto p-2.5 mt-2.5 gap-3'>
          <img src="/images/icons/notification_profile.png" alt="notification"  className=''/>
          <img src="/images/icons/Profile_img.png" alt="Profile_img" />
        </div>
      </div>
      <hr className='w-full opacity-[0.4] border-[#0000007f] border mt-2'/>
      </section> */}

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
   
     {/* Feature Pro section begines here*/}
     <section>
     <h3 className='Poppins text-[#1E1E1E] text-[20px] py-3'>Featured Pro’s</h3>

   <DashboarFeatures  Margintop={""} image={"/images/assets/feature_image_A.png"}  title={"Wade Warren"} />
   <DashboarFeatures Margintop={"mt-4"} image={"/images/assets/feature_image_B.png"}  title={"Jane Cooper"} />
   <DashboarFeatures Margintop={"mt-4"} image={"/images/assets/feature_image_C.png"}  title={"Dianne Russell"} />
   </section>
        <div>
      
        
        </div>
   
    </div>
  )
}


export default DashboardPage;


















