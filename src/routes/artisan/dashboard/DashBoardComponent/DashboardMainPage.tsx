import { createFileRoute } from "@tanstack/react-router";
import SideBarNav from "./SideBarNav";
import DashboardPage from "../dashboard-pages/DashboardPage";
import { useDashboardStore } from "../../../../stores/auth/useDashboardStore";
import RouteComponent from "../dashboard-pages/FindProHeader";
import { useToggleStore } from "@/stores/profileState";
import ProfileModal from "../dashboard-pages/ProfileModal";
import Notification from "./Notification";
import Schedule from "../dashboard-pages/Schedule";
// import FindPro from "../dashboard-pages/FindPro";

export const Route = createFileRoute("/artisan/dashboard/DashBoardComponent/DashboardMainPage")({
  component: DashboardMinPage,
});

function DashboardMinPage() {
const {content} = useDashboardStore();

const {isOpen, toggle, isNotification, notification} = useToggleStore();

  return (
    <div className="flex gap-5 ">
      <div>
        <SideBarNav />
      </div>

      <div className="scroll-smooth h-screen overflow-y-auto scrollBar flex-grow-1">
      <section className='sticky top-0 z-10 w-full bg-[#F8F8F8]'>
      <div className='flex'>
        <div></div>
        <div className='flex items-center ml-auto p-2.5 mt-2.5 gap-3'>
          <img src="/images/icons/notification_profile.png" alt="notification" className="w-full cursor-pointer" onClick={notification}/>
          <img src="/images/icons/Profile_img.png" className="w-full cursor-pointer" alt="Profile_img"  onClick={toggle}/>
        
          
        </div>
      </div>
      <hr className='w-full opacity-[0.4] border-[#0000007f] border mt-2'/>
      </section>

      <section>
        {content === "Dashboard" && <DashboardPage /> }
        {content === "Find Pro" && <RouteComponent />}
        {content === "Schedule" && <Schedule />}
        {/* <DashboardPage /> */}
      </section>
      {isOpen && <ProfileModal/>}
      {isNotification && <Notification />}
      </div>
    </div>
  );
}

export default DashboardMinPage;




