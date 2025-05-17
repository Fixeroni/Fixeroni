import { createFileRoute } from '@tanstack/react-router'
import MapView from '../dashboard-pages/Dmap';

export const Route = createFileRoute('/artisan/dashboard/DashBoardComponent/DashBoardMap')({
  component: DashBoardMap,
})

function DashBoardMap() {
  return(
   <div className='w-[406px] h-full  bg-[#F2F1F1]'>
     <div className=''>
   <MapView />
     </div>
    
    </div>
    )
}


export default  DashBoardMap;

