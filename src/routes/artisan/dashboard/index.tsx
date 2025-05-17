import { createFileRoute } from "@tanstack/react-router";
import DashboardMinPage from "./DashBoardComponent/DashboardMainPage";
import DashBoardMap from "./DashBoardComponent/DashBoardMap";

export const Route = createFileRoute("/artisan/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex overflow-hidden gap-5">
      <div className="flex-grow-1">
        <DashboardMinPage />
      </div>

      <div>
        <DashBoardMap />
      </div>
    </div>
  );
}
