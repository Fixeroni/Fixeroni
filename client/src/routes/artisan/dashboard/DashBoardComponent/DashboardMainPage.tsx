import { createFileRoute } from "@tanstack/react-router";
import SideBarNav from "./SideBarNav";
import DashboardPage from "../dashboard-pages/DashboardPage";

export const Route = createFileRoute("/artisan/dashboard/DashBoardComponent/DashboardMainPage")({
  component: DashboardMinPage,
});

function DashboardMinPage() {
  return (
    <div className="flex gap-5 ">
      <div>
        <SideBarNav />
      </div>

      <div className="scroll-smooth h-screen overflow-y-auto scrollBar flex-grow-1">
        <DashboardPage />
      </div>
    </div>
  );
}

export default DashboardMinPage;
