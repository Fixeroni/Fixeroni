import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/artisan/dashboard/dashboard-pages/FindProHeader',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><section>
    
      <div className='flex'>
        <div></div>
        <div className='flex items-center ml-auto p-2.5 mt-2.5 gap-3'>
          <img src="/images/icons/notification_profile.png" alt="notification"  className=''/>
          <img src="/images/icons/Profile_img.png" alt="Profile_img" />
        </div>
      </div>
      <hr className='w-full opacity-[0.4] border-[#0000007f] border mt-2'/>
      
  <h3 className='Poppins text-[#1E1E1E] text-[30px] font-medium mt-4'>Find a Pro</h3>


  <div className=' p-[10px] flex items-center justify-between'>
   
   <button className='shadow-[2px_2px_5px_rgba(0,0,0,0.05)] p-[15px] pl-[17px] pr-[17px]
rounded-tr-[20px] rounded-[26px] bg-[#fff] outline-none flex items-center justify-center'>All Kinds 
      <i className="fa-solid fa-chevron-down text-sm ml-[10px]"></i>
   </button >
   <button className='shadow-[2px_2px_5px_rgba(0,0,0,0.05)] p-[15px] pl-[17px] pr-[17px]
rounded-tr-[20px] rounded-[26px] bg-[#fff] outline-none flex items-center justify-center'>All Distance
    <i className="fa-solid fa-chevron-down text-sm ml-[15px]"></i>
   
   </button>
   <button className='shadow-[2px_2px_5px_rgba(0,0,0,0.05)] p-[15px] pl-[17px] pr-[17px]
rounded-tr-[20px] rounded-[26px] bg-[#fff] outline-none flex items-center justify-center'>All Status <i className="fa-solid fa-chevron-down text-sm ml-[10px]"></i>
   </button>
   <button className='shadow-[2px_2px_5px_rgba(0,0,0,0.05)] p-[15px] pl-[17px] pr-[17px]
rounded-tr-[20px] rounded-[26px] bg-[#fff] outline-none flex items-center justify-center'>All Cities <i className="fa-solid fa-chevron-down text-sm ml-[10px]"></i></button>
    
  </div>
  <div className='mb-[20px] mt-[10px]'><p className='text-[poppins]'><b>100+</b> Pros</p></div>
</section></div>
}
export default RouteComponent;