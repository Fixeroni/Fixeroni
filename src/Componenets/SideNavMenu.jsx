import React from "react";
import Logo from "../assets/logo.png";
import Vector from "../assets/Vector.png";

const sideNavMenu = () => {
  return (
    <div>
      <div className="w-[10.2%] h-[900px]  rounded-tr-[20px]   rounded-br-[20px] shadow-[2px_2px_5px_0px_#0000000D] bg-[white]">
        <div className="logo  flex item-center justify-center ">
          <img className="mt-[40px]  " src={Logo} />
        </div>
      </div>
    </div>
  );
};

export default sideNavMenu;
