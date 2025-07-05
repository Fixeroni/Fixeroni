import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute(
  "/artisan/dashboard/DashBoardComponent/FindProProfileSchedules",
)({
  component: FindProProfileSchedules,
});

function FindProProfileSchedules() {
  const [selectedTime, setSelectedTime] = useState<number | null>(2);
  const [scheduleDate, setScheduleDate] = useState<number | null>(2);

  const availableTime: string[] = ["1:00", "3:00", "5:00", "7:00"];
  const Schedules: { day: string; date: number }[] = [
    { day: "M", date: 22 },
    { day: "T", date: 22 },
    { day: "W", date: 23 },
    { day: "T", date: 24 },
    { day: "F", date: 25 },
    { day: "S", date: 26 },
  ];

  return (
    <div className="w-[300px] h-[530px] py-[22px] px-[20px] rounded-[20px] bg-[white] shadow-[0_0_5px_rgba(0,0,0,0.1)]">
      <p className="font-[600] text-[18px]">Schedules</p>
      <ul className="w-[260px] h-[70px] mt-[15px] flex justify-between items-center ">
        {Schedules.map(({ day, date }, index) => (
          <li
            className={`flex flex-col justify-center cursor-pointer items-center w-[37.68px] h-[70px] gap-[8px] rounded-[10px] border border-[#D9D9D9] urbanist ${
              scheduleDate === index
                ? "bg-[#0F9067] text-white border-[#0F9067]"
                : ""
            }`}
            onClick={() => setScheduleDate(index)}
            key={index}
          >
            <p
              className={`font-[500] text-[14px] text-[#7A7A7A] 
                ${
                  scheduleDate === index
                    ? "bg-[#0F9067] text-white border-[#0F9067]"
                    : ""
                }`}
            >
              {day}
            </p>
            <p className="text-[20px] font-[600]">{date}</p>
          </li>
        ))}
      </ul>
      <div className="mt-[20px] mb-[20px]">
        <p className="text-[18px] font-[600] mb-[15px]">Available Time</p>
        <ul className="flex justify-between items-center w-[260px] h-[40px]">
          {availableTime.map((time, index) => (
            <li
              key={index}
              className={`w-[60px] h-[40px] rounded-[10px] border border-[#D9D9D9] flex justify-center items-center text-[15px] font-[600] text-[#2A2A2A] tracking-[-0.3px] cursor-pointer urbanist ${
                selectedTime === index
                  ? "bg-[#0F9067] text-white border-[#0F9067]"
                  : ""
              }`}
              onClick={() => setSelectedTime(index)}
            >
              {time} pm
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-[15px] mb-[20px]">
        <label htmlFor="location" className="text-[18px] font-[600]">
          Location
        </label>
        <input
          type="text"
          id="location"
          placeholder="8502 Preston Rd. Inglewood, Maine 98380"
          className="w-[260px] h-[40px] flex items-center rounded-[10px] py-2 px-5 border border-[#D9D9D9] text-[13px]"
        />
      </div>
      <div className="flex flex-col gap-[15px]">
        <label htmlFor="reminder" className=" text-[18px] font-[600]">
          Reminder
        </label>
        <input
          type="text"
          id="reminder"
          placeholder="30 minutes before"
          className="w-[260px] h-[40px] flex items-center rounded-[10px] py-2 px-5 border border-[#D9D9D9] text-[13px]"
        />
      </div>
      <button className="w-[260px] h-[40px] bg-[#0F9067] rounded-[20px] flex justify-center items-center font-[500] text-[15px] text-white mt-[30px] cursor-pointer hover:bg-[#0f9067e2] active:bg-[#0f9067ae] transition-colors duration-250 ">
        Book now
      </button>
    </div>
  );
}
export default FindProProfileSchedules;
