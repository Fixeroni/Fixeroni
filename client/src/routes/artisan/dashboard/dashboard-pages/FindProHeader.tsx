
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/artisan/dashboard/dashboard-pages/FindProHeader',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><section>
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
</section></div>
}
export default RouteComponent;
