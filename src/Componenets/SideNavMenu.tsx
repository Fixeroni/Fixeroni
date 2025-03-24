import React from "react";
import Logo from "../assets/logo.png";
import Vector from "../assets/Vector.png";
import Icon from "../assets/icon.png";
import Schedule from "../assets/Schedule.png";
import Message from "../assets/Message.png";
import Orders from "../assets/orders.png";
import Favourite from "../assets/Favourite.png";

const sideNavMenu = () => {
  return (
    <div>
      <div
        className=" h-[900px] p-4 col-span-1 sidebar  rounded-tr-[20px] rounded-br-[20px]
       shadow-[2px_2px_5px_0px_#0000000D] items-center bg-[#fff]
        min-w-[100px] md:w-auto overflow-hidden flex flex-col"
      >
        <div className="grid grid-rows-6  md:grid-rows-3 sm:grid-rows-2 gap-1 ">
          <div className="logo  ">
            <img className="  " src={Logo} />
          </div>

          <div className="logo w-[87px]  items-center flex flex-col h-[60px] ">
            <img className="w-[20px]  h-[20px] pointer  " src={Vector} />
            <div className="mt-[10px]">
              {" "}
              <p className="font-[system-ui] text-[#0F9067] font-medium text-[13px]">
                Dashboard
              </p>
            </div>
          </div>

          <div className="logo w-[87px]  items-center flex flex-col h-[60px] ">
            <img className="w-[24px]  h-[24px]  " src={Icon} />
            <div className="mt-[10px]">
              {" "}
              <p className="font-[system-ui] text-[#0F9067] font-medium text-[13px]">
                Find Pro
              </p>
            </div>
          </div>
          <div className="logo w-[87px]  items-center flex flex-col h-[60px] ">
            <img className="w-[20px]  h-[20px] mt-[5px]  " src={Schedule} />
            <div className="mt-[10px]">
              {" "}
              <p className="font-[system-ui] text-[#0F9067] font-medium text-[13px]">
                Schedule
              </p>
            </div>
          </div>
          <div className="logo w-[87px] mt-[10px]  items-center flex flex-col h-[60px] ">
            <img className="w-[20px]  h-[20px]  " src={Message} />
            <div className="mt-[10px]">
              {" "}
              <p className="font-[system-ui] text-[#0F9067] font-medium text-[13px]">
                Messages
              </p>
            </div>
          </div>
          <div className="logo w-[87px] mt-[10px]  items-center flex flex-col h-[60px] ">
            <img className="w-[20px]  h-[20px]  " src={Orders} />
            <div className="mt-[10px]">
              {" "}
              <p className="font-[system-ui] text-[#0F9067] font-medium text-[13px]">
                Orders
              </p>
            </div>
          </div>
          <div className="logo w-[87px] mt-[10px]  items-center flex flex-col h-[60px] ">
            <img className="w-[20px]  h-[20px]  " src={Favourite} />
            <div className="mt-[10px]">
              {" "}
              <p className="font-[system-ui] text-[#0F9067] font-medium text-[13px]">
                Favourite
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sideNavMenu;
