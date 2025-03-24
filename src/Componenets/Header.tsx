import React, {useState} from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  
  return (
    <div>
      <div className=" flex w-[100%]  justify-between">
        {/* <div className="">
          <img src={Logo} />
        </div>
        <div className="">
          <i className="fas fa-bars text-[black] menutoggle "></i>
        </div> */}

        <div className="w-[100%] bg-[#fff] flex justify-between smallscreenheader">
          <div className="">
            <img src={Logo} />
          </div>
          <div className="flex items-center">
        <button onClick={() => setToggle(!toggle)}>
          <i className="fas fa-bars text-[black] menutoggle"></i>
        </button>
      </div>
        </div>

        <div className={` w-[100%] flex justify-center  absolute top-[20px] left-0 z-[50]  h-[280px] mt-[30px] navmenu ${toggle ? "block" : "hidden"}`}>
        <ul className="flex flex-col items-center bg-green-500 w-[100%]  ">
        
    <li className="ml-[10px] p-[5px] bg-[black]  text-[20px] font-[verdana] text-[white] w-[100%]  mt-[5px] text-center">DashBoard</li>
    <li className="ml-[10px] p-[5px] bg-[black]  text-[20px] font-[verdana] text-[white] w-[100%]  mt-[5px] text-center">Find Pro</li>
    <li className="ml-[10px] p-[5px] bg-[black]  text-[20px] font-[verdana] text-[white] w-[100%]  mt-[5px] text-center">Schedule</li>
    <li className="ml-[10px] p-[5px] bg-[black]  text-[20px] font-[verdana] text-[white] w-[100%]  mt-[5px] text-center">Messages</li>
    <li className="ml-[10px] p-[5px] bg-[black]  text-[20px] font-[verdana] text-[white] w-[100%]  mt-[5px] text-center">Orders</li>
    <li className="ml-[10px] p-[5px] bg-[black]  text-[20px] font-[verdana] text-[white] w-[100%]  mt-[5px] text-center">Favourite</li>

        </ul>
      </div>
      </div>
    </div>
  );
};

export default Header;
