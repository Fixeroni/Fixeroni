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
                  <h3 className='px-7'>Mechanic Schedule</h3>
                  <hr className='border-[#D9D7D7] border w-full mt-3.5'/>
                  </section>
            


            </div>


          </div>

  )
}

export default ViewSchedule;






