import { useToggleStore } from '@/stores/profileState';
import { createFileRoute } from '@tanstack/react-router'
import { IoCloseOutline } from "react-icons/io5";
import NotificationDetails from './NotificationDetails';
export const Route = createFileRoute(
  '/artisan/dashboard/DashBoardComponent/Notification',
)({
  component: Notification,
})

function Notification() {
const {notification}= useToggleStore();

  return (
    <div>

        <div className="fixed h-screen inset-0 flex z-20 justify-center bg-[#64646466]/50 backdrop-blur-md scroll-auto overflow-y-scroll">
              <div className="w-[406px]   h-fit bg-[#FFFFFF] rounded-[20px] shawdow---feature mt-4 mb-3">
                <section>
                  <div className="p-8 flex justify-between items-center">
                    <div>
                      <h3 className="text-[#1E1E1E]  text-[24px] font-medium">
                      Notification
                      </h3>
                    </div>
                    <div
                      className="rounded-[25px] bg-[#F7F7F9] w-[50px] cursor-pointer aspect-square flex items-center justify-center"
                      onClick={notification}
                    >
                      <IoCloseOutline size={30} />
                    </div>
                  </div>
                </section>

                        <section>
                    <NotificationDetails title={" Pro Arriving in 5 minute"} date={"Date: 24 May, 2023"} time={"2mins ago"} padding={"pb-4"} />
                    <NotificationDetails  title={" Reminder"} date={"Date: 24 May, 2023"} time={"2mins ago"} padding={"pb-4"} />
                    <NotificationDetails  title={" Deposit Successful"} date={"Date: 24 May, 2023"} time={"2mins ago"} padding={"pb-4"} />

                    <NotificationDetails title={" Pro Arriving in 5 minute"} date={"Date: 24 May, 2023"} time={"2mins ago"} padding={"pb-4"} />
                    <NotificationDetails  title={" Reminder"} date={"Date: 24 May, 2023"} time={"2mins ago"} padding={"pb-4"} />
                    <NotificationDetails  title={" Deposit Successful"} date={"Date: 24 May, 2023"} time={"2mins ago"} padding={"pb-4"} />

                    <NotificationDetails title={" Pro Arriving in 5 minute"} date={"Date: 24 May, 2023"} time={"2mins ago"} padding={"pb-4"} />
                    <NotificationDetails  title={" Reminder"} date={"Date: 24 May, 2023"} time={"2mins ago"} padding={"pb-4"} />
                    <NotificationDetails  title={" Deposit Successful"} date={"Date: 24 May, 2023"} time={"2mins ago"} padding={"pb-4"} />
                    </section>
                </div>



                </div>
   
    </div>

  ) 
}


export default Notification;




