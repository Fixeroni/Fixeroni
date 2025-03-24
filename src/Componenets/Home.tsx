import React from "react";
import SideNavMenu from "./SideNavMenu";
import CenterContainer from "./CenterContainer";
// import Map from "./MapContainer";
import MapContainer from "./MapContainer";
import Header from "./Header";
const Home = () => {
  return (
    <div className = " ">
    
       <Header/>
      <div className="grid grid-cols-7 w-[100%]    homedivsmallscreen ">
        <SideNavMenu />
        <CenterContainer />
        <MapContainer />
      </div>
    </div>
  );
};

export default Home;
