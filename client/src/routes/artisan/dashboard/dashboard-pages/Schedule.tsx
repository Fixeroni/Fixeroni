import { useToggleStore } from '@/stores/profileState';
import { createFileRoute } from '@tanstack/react-router'
import ViewSchedule from '../DashBoardComponent/ViewSchedule';

export const Route = createFileRoute(
  '/artisan/dashboard/dashboard-pages/Schedule',
)({
  component: Schedule,
})

function Schedule() {
 const {schedule, isSchedule} = useToggleStore();

  return(
    
    <div>
    <h2 className='Poppins text-[#1E1E1E] text-[36px] font-medium mt-4'>Schedule </h2>


<section>
    <div className='bg-[#FFFFFF] shawdow---feature mt-3 w-full rounded-[20px] py-[20px] px-[30px] h-[60px] flex items-center justify-between'>
        <h3 className='text-[#1E1E1E] font-normal text-[20px]'>Mechanic Schedule</h3>
        <p className='text-[#14AE5C] text-[14px] font-normal cursor-pointer' onClick={schedule}>View details</p>
    </div>
</section>

        
        { isSchedule && <ViewSchedule /> }

    </div>

   


  )
}

export default Schedule;

// /* View details */

// width: 84px;
// height: 14px;

// font-family: 'Poppins';
// font-style: normal;
// font-weight: 400;
// font-size: 14px;
// line-height: 14px;
// /* identical to box height, or 99% */

// color: #14AE5C;


// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

