import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/artisan/dashboard/DashBoardComponent/DashBoardMap',
)({
  component: DashBoardMap,
})

function DashBoardMap() {
  return(
   <div className='w-[506px] h-full  bg-[#F2F1F1]'>
     <div className=''>
   Map section
     </div>
    
    </div>
    )
}


export default  DashBoardMap;


/* Map Frame  */

// box-sizing: border-box;

// position: absolute;
// width: 406px;
// height: 842px;
// left: 1005px;
// top: 29px;

// background: #F2F1F1;
// border: 0.5px solid rgba(0, 0, 0, 0.3);
// border-radius: 20px;
