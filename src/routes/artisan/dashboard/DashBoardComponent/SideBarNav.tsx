// import React from 'react'
import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { useDashboardStore, dashboardContent } from "../../../../stores/auth/useDashboardStore";


export const Route = createFileRoute(
  "/artisan/dashboard/DashBoardComponent/SideBarNav",
)({
  component: SideBarNav,
});

function SideBarNav() {
const {content, setContent} = useDashboardStore();




  const menuItems:Array<{ name: dashboardContent; icon: string; iconA:string; notification?: number }>= useMemo(
    () => [
      { name: "Dashboard", icon: "/images/icons/activeDashboard.png", iconA: "/images/icons/dashboardIcon.png"  },
      { name: "Find Pro", icon: "/images/icons/findProIcon.png", iconA: "/images/icons/activeFindPro.png" },
      { name: "Schedule", icon: "/images/icons/scheduleIcon.png", iconA: "/images/icons/activeSchedule.png" },
      {
        name: "Messages",
        icon: "/images/icons/messageIcon.png",
        iconA: "/images/icons/activeMessage.png",
        notification: 5,
      },
      { name: "Orders", icon: "/images/icons/reorder_icon.png" , iconA: "/images/icons/activeOrder.png"},
      { name: "Favorite", icon: "/images/icons/favourite_icon.png", iconA: "/images/icons/ActiveFavorite.png" },
    ],
    [],
  );

  const settingMenu = useMemo(
    () => [
      { name: "Settings", icon: "/images/icons/setting_icon.png" },
      { name: "Logout", icon: "/images/icons/logout_icon.png" },
    ],
    [],
  );

  return (
    <div className="">
      <div
        className="w-[147px] h-screen scroll-smooth overflow-y-auto scrollBar bg-[#FFFFFF] 
         shadow-[2px_2px_5px_rgba(0,0,0,0.05)] p-5
        rounded-tr-[20px] rounded-br-[20px]"
      >
        <div className="mt-4">
          <img src="/images/branding/logo.png" alt="" />
        </div>

        <div className="mt-17">
          <ul>
            {menuItems.map(({ name, notification, icon, iconA }) => {
              return (
                <li className="mb-10 cursor-pointer" key={name} onClick={() => setContent(name)} >
                  <div className=" flex flex-col items-center">
                    <div className="flex items-center">
                      <img src={name !== content ? icon : iconA} alt="" className="" />

                      {notification && (
                        <span
                          className="bg-[#ee3636e5]  mt-[-1rem]
                                           w-fit h-[19px] text-white rounded-[3px] 
                                          flex items-center justify-center px-[5px] py-[5px]"
                        >
                          {notification}
                        </span>
                      )}
                    </div>

                    <div>
                      
                        {" "}
                        <h2
                          className={` ${name !== content ? "text-[#1E1E1E] opacity-[0.5]" : "text-[#0F9067]"} 
                           font-medium text-[1.2rem] poppins`}
                        >
                          {name}
                        </h2>{" "}
                      
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <section>
          <div className="flex flex-col h-full">
            <ul className="mt-[12rem]">
              {settingMenu.map(({ name, icon }) => {
                return (
                  <li key={name} className="mb-7">
                    <div className=" flex flex-col items-center">
                      <div className="flex items-center">
                        <img src={icon} alt="" className="" />
                      </div>

                      <div>
                        <h2
                          className={` text-[#1E1E1E] opacity-[0.5]  font-medium text-[1.2rem] poppins`}
                        >
                          {name}
                        </h2>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SideBarNav;

// /* Messages */

// width: 87px;
// height: 25px;

// font-family: 'Poppins';
// font-style: normal;
// font-weight: 500;
// font-size: 15px;
// line-height: 14px;
// /* or 92% */
// display: flex;
// align-items: center;
// text-align: center;

// color: #1E1E1E;

// opacity: 0.5;

// /* Inside auto layout */
// flex: none;
// order: 1;
// align-self: stretch;
// flex-grow: 0;
