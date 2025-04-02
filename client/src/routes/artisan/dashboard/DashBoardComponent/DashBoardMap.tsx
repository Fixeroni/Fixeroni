import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/artisan/dashboard/DashBoardComponent/DashBoardMap')({
  component: DashBoardMap,
})

function DashBoardMap() {
  return(
   <div className='w-[406px] h-full  bg-[#F2F1F1]'>
     <div className=''>
   Map section
     </div>
    
    </div>
    )
}


export default  DashBoardMap;

