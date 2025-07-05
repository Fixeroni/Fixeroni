import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { DashboarFeatures } from "../DashBoardComponent/DashboarFeatures";
import FindProAllKinds from "@/routes/artisan/dashboard/DashBoardComponent/FindProAllKinds";
import FindProAllDistances from "@/routes/artisan/dashboard/DashBoardComponent/FindProAllDistances";
import FindProAllStatus from "@/routes/artisan/dashboard/DashBoardComponent/FindProAllStatus";
import FindProAllCities from "@/routes/artisan/dashboard/DashBoardComponent/FindProAllCities";

export const Route = createFileRoute(
  "/artisan/dashboard/dashboard-pages/FindProHeader",
)({
  component: RouteComponent,
});

interface TabState {
  allKinds: boolean;
  allDistance: boolean;
  allStatus: boolean;
  allCities: boolean;
}
function RouteComponent() {
  const [activeTab, setActiveTab] = useState<TabState>({
    allKinds: false,
    allDistance: false,
    allStatus: false,
    allCities: false,
  });

  const toggleTab = (tab: keyof TabState) => {
    setActiveTab((prev) => {
      // Create a new state with all tabs closed
      const newState = {
        allKinds: false,
        allDistance: false,
        allStatus: false,
        allCities: false,
      };

      // If the clicked tab wasn't active, open it
      if (!prev[tab]) {
        newState[tab] = true;
      }
      //   console.log("newState", newState);
      // Return the new state
      return newState;
    });
  };
  return (
    <div>
      <section>
        <h3 className="Poppins text-[#1E1E1E] text-[30px] font-medium mt-4">
          Find a Pro
        </h3>

        <div className=" p-[10px] flex items-center justify-between">
          <span>
            <button
              className="shadow-[2px_2px_5px_rgba(0,0,0,0.05)] p-[15px] pl-[17px] pr-[17px] cursor-pointer hover:bg-[#e0e0e0] active:bg-[#d0d0d0] transition-colors duration-300
rounded-tr-[20px] rounded-[26px] bg-[#fff] outline-none flex gap-[20px] items-center justify-center"
              onClick={() => toggleTab("allKinds")}
            >
              All Kinds
              <img src="/images/icons/chevron-down.svg" alt="dropdown" />
            </button>
            <div>
              <FindProAllKinds
                isActive={activeTab.allKinds}
                onClose={() =>
                  setActiveTab((prev) => ({ ...prev, allKinds: false }))
                }
              />
            </div>
          </span>
          <span className="relative">
            <button
              className="shadow-[2px_2px_5px_rgba(0,0,0,0.05)] p-[15px] pl-[17px] pr-[17px] gap-[20px]
rounded-tr-[20px] rounded-[26px] bg-[#fff] outline-none flex items-center justify-center cursor-pointer hover:bg-[#e0e0e0] active:bg-[#d0d0d0] transition-colors duration-300"
              onClick={() => toggleTab("allDistance")}
            >
              All Distance
              <img src="/images/icons/chevron-down.svg" alt="dropdown" />
            </button>
            <div>
              <FindProAllDistances
                isActive={activeTab.allDistance}
                onClose={() =>
                  setActiveTab((prev) => ({ ...prev, allDistance: false }))
                }
              />
            </div>
          </span>
          <span className="relative">
            <button
              className="shadow-[2px_2px_5px_rgba(0,0,0,0.05)] p-[15px] pl-[17px] pr-[17px] cursor-pointer hover:bg-[#e0e0e0] active:bg-[#d0d0d0] transition-colors duration-300
rounded-tr-[20px] rounded-[26px] bg-[#fff] outline-none flex gap-[20px] items-center justify-center"
              onClick={() => toggleTab("allStatus")}
            >
              All Status{" "}
              <img src="/images/icons/chevron-down.svg" alt="dropdown" />
            </button>
            <div>
              <FindProAllStatus
                isActive={activeTab.allStatus}
                onClose={() =>
                  setActiveTab((prev) => ({ ...prev, allStatus: false }))
                }
              />
            </div>
          </span>
          <span className="relative">
            <button
              className="shadow-[2px_2px_5px_rgba(0,0,0,0.05)] p-[15px] pl-[17px] pr-[17px] cursor-pointer hover:bg-[#e0e0e0] active:bg-[#d0d0d0] transition-colors duration-300
rounded-tr-[20px] rounded-[26px] bg-[#fff] outline-none flex gap-[20px] items-center justify-center"
              onClick={() => toggleTab("allCities")}
            >
              All Cities
              <img src="/images/icons/chevron-down.svg" alt="dropdown" />
            </button>
            <div>
              <FindProAllCities
                isActive={activeTab.allCities}
                onClose={() =>
                  setActiveTab((prev) => ({ ...prev, allCities: false }))
                }
              />
            </div>
          </span>
        </div>
      </section>
      <section>
        <DashboarFeatures
          Margintop={"mt-4"}
          image={"/assets/images/feature_image_A.png"}
          title={"Wade Warren"}
        />
        <DashboarFeatures
          Margintop={"mt-4"}
          image={"/assets/images/feature_image_A.png"}
          title={"Wade Warren"}
        />
        <DashboarFeatures
          Margintop={"mt-4"}
          image={"/assets/images/feature_image_A.png"}
          title={"Wade Warren"}
        />
      </section>
    </div>
  );
}
export default RouteComponent;
