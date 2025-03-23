import { createFileRoute } from '@tanstack/react-router'
import SideBarNav from './SideBarNav'



export const Route = createFileRoute('/artisan/dashboard/DashBoardComponent/DashboardMainPage')({
  component: DashboardMinPage,
})

 function DashboardMinPage() {
  return (
    <div>

<SideBarNav />


    <div >
      <div>

      </div>


    </div>


    </div>
  )
}



export default DashboardMinPage;

