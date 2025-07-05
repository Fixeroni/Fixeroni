import { createFileRoute } from "@tanstack/react-router";
import FindProProfileOverview from "../DashBoardComponent/FindProProfileOverview";
import FindProReviews from "../DashBoardComponent/FindProReviews";
import FindProProfileSchedules from "../DashBoardComponent/FindProProfileSchedules";
import FindProProfileDetail from "../DashBoardComponent/FindProProfileDetail";
export const Route = createFileRoute(
  "/artisan/dashboard/dashboard-pages/FindProProfileView",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="bg-[#F8F8F8]">
      <header className="bg-[#0F9067] w-full p-[30px] box-border text-[20px] text-white h-[140px]">
        <span className="flex gap-5  items-center">
          <p>Find Pro</p>
          <p className="">
            <img src="/images/icons/chevion-right.svg" alt="" />
          </p>
          <p>Naija Torque Motors</p>
        </span>
      </header>
      {/** Main Section */}
      <div className="flex">
        <div>
          <FindProProfileDetail
            name="Naija Torque Motors"
            profilePicture="/images/icons/profile-pic.jpg"
            profession="Mechanic"
            reviewsNo={21}
          />
          <div className="p-[30px] w-full justify-center items-center">
            <FindProProfileOverview
              experience={20}
              language="English"
              location="Lagos"
              active={2}
            />
          </div>
          <div className="p-[30px] -mt-10 w-full justify-center items-center">
            <FindProReviews />
          </div>
        </div>
        <div className="-mt-12">
          <FindProProfileSchedules />
        </div>
      </div>
    </main>
  );
}
