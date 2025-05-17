import { NotificationDetailsProps } from "@/types";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/artisan/dashboard/DashBoardComponent/NotificationDetails",
)({
  component: NotificationDetails,
});

function NotificationDetails({title, time, date, padding}:NotificationDetailsProps) {
  return (
    <>
      <section className={`px-7 flex items-center justify-between ${padding}`}>
        <div>
          <h3 className="text-[#000000] text-[ 16px] font-medium">
            {title}
          </h3>
          <p className="text-[#000000] text-[10px] font-normal pt-2">
           {date}
          </p>
        </div>
        <div className="mt-auto">
          <p className="text-[#F52B2E] text-[10px] font-normal">{time}</p>
        </div>
      </section>
    </>
  );
}

export default NotificationDetails;
