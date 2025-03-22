import React from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div>
      <div className="bg-[blue] flex w-[100%]  justify-between">
        {/* <div className="">
          <img src={Logo} />
        </div>
        <div className="">
          <i className="fas fa-bars text-[black] menutoggle "></i>
        </div> */}

        <div className="w-[100%] flex justify-between smallscreenheader">
          <div className="">
            <img src={Logo} />
          </div>
          <div className="flex items-center">
            <i className="fas fa-bars text-[white] menutoggle "></i>
          </div>
        </div>

        {/* <div className="bg-[red] navmenu">
          <ul className="flex ">
            <li className="ml-[10px]">DashBoard</li>
            <li className="ml-[10px]">Find Pro</li>
            <li className="ml-[10px]">Schedule</li>
            <li className="ml-[10px]">Messages</li>
            <li className="ml-[10px]">Orders</li>
            <li className="ml-[10px]">Favourite</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
