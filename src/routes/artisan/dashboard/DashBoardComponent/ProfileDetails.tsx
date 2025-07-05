import { ProfileDetailsProps } from "@/types";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/artisan/dashboard/DashBoardComponent/ProfileDetails",
)({
  component: ProfileDetails,
});

function ProfileDetails({
  name,
  amount,
  icon,
  date,
  amountColor,
}: ProfileDetailsProps) {
  return (
    <div>
      <section className="flex items-center justify-between px-7 mt-5">
        <div className="flex items-center gap-2">
          <div>
            <img src={icon} alt="" />
          </div>
          <div>
            <h2 className="text-[#1E1E1E] text-[1rem] font-medium">{name}</h2>
            <p className="text-[#6B7280] font-normal text-[14px]">{date}</p>
          </div>
        </div>
        <div>
          <p className={`${amountColor} text-[16px] font-normal pt-1`}>
            {amount}
          </p>
        </div>
      </section>
    </div>
  );
}

export default ProfileDetails;
