import { createFileRoute } from "@tanstack/react-router";
import DashboardMinPage from "./DashBoardComponent/DashboardMainPage";



export const Route = createFileRoute("/artisan/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>
  <DashboardMinPage />

  </div>
}
