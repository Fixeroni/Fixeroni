import { createFileRoute } from '@tanstack/react-router'
import {DashboarFeatures } from '../DashBoardComponent/DashboarFeatures';
import {  Outlet } from '@tanstack/react-router'
// import FindPro from './FindPro';

export const Route = createFileRoute('/artisan/dashboard/dashboard-pages/DashboardPage')({
  component: DashboardPage,

});



function DashboardPage() {


  return (
    <div className=''>
        
     

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

   <DashboarFeatures  Margintop={""} image={"/assets/images/feature_image_A.png"}  title={"Wade Warren"} />
   <DashboarFeatures Margintop={"mt-4"} image={"/assets/images/feature_image_B.png"}  title={"Jane Cooper"} />
   <DashboarFeatures Margintop={"mt-4"} image={"/assets/images/feature_image_C.png"}  title={"Dianne Russell"} />
   </section>
        <div>
      
        
        </div>
   
    </div>
  )
}


export default DashboardPage;


















