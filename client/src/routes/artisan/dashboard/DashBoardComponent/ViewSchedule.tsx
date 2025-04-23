import { useToggleStore } from '@/stores/profileState';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/artisan/dashboard/DashBoardComponent/ViewSchedule',
)({
  component: ViewSchedule,
})

function ViewSchedule() {
const {schedule} = useToggleStore();

  return (
    <div className="fixed h-screen inset-0 flex z-20 justify-center bg-[#64646466]/50 backdrop-blur-md scroll-auto overflow-y-scroll" onClick={schedule}>
            <div className='bg-[#FFFFFF] rounded-[20px] shawdow---feature w-[798px] h-[537px] mt-4'>
                  <section className=''>
                  <h3 className='px-7 text-[#1E1E1E] text-[20px] font-normal mt-4'>Mechanic Schedule</h3>
                  <hr className='border-[#D9D7D7] border w-full mt-3.5'/>
                  </section>

                  <section>
                    <p className='text-[#1E1E1E] font-normal text-[14px] px-7 mt-6'>Schedule details</p>
                    <h2 className='text-[#1E1E1E] text-[20px] font-medium mt-4 px-7'>Naija Torque Motors</h2>
                  </section>

                  <section className='px-7 mt-10'>
                    <div>
                          <div className='flex items-center  gap-1.5'>
                            <div>  <img src="/images/icons/date--icon.png" alt="" className='w-full' /></div>
                            <div className=''><h2 className='text-[#1E1E1E] tracking-[-0.32px] text-[14px] font-normal'>Date</h2> </div> 
                          </div>
                          <div>
                            <input type="date" className='bg-[#FFFFFF] rounded-[10px] border-[#D9D7D7] border w-[155px] h-[32px] p-2 mt-2'/>
                          </div>


                    </div>
                  </section>
            


            </div>


          </div>

  )
}

export default ViewSchedule;















