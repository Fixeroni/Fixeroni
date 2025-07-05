import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/artisan/dashboard/DashBoardComponent/FindProProfileOverview",
)({
  component: FindProProfileOverview,
});
interface FindProProfileOverviewProps {
  experience: number;
  language: string;
  active: number;
  location: string;
}

function FindProProfileOverview({
  experience,
  language,
  active,
  location,
}: FindProProfileOverviewProps) {
  return (
    <div className="w-[478px] h-[104px] rounded-[10px] bg-[white] py-5 px-5 shadow-[0_0_5px_rgba(0,0,0,0.1)]">
      <p className="text-[18px] font-semibold mb-2">Overview</p>
      <div className="flex h-full w-full justify-between">
        <div className="flex flex-col gap-2">
          <div className="w-[189px] h-[12px] text-[12px] text-[#1E1E1E] flex justify-between items-center">
            <span className="flex justify-center items-center gap-2">
              <img
                src="/images/icons/experience-icon.svg"
                className="w-[13px]"
                alt="experience"
              />
              <p className="font-[500]  text-[#1E1E1E]">Experience</p>
            </span>
            <p className="text-[#535353] text-[10px] font-[400]">
              {experience}+ Years
            </p>
          </div>
          <div className="w-[172px] h-[12px] text-[12px] text-[#1E1E1E] flex justify-between items-center mb-5">
            <span className="flex justify-center items-center gap-2">
              <img src="/images/icons/location-icon.svg" alt="experience" />
              <p className="font-[500] text-[#1E1E1E]">Location</p>
            </span>
            <p className="text-[#535353] text-[10px] font-[400]">{location}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-[189px] h-[12px] text-[12px] text-[#1E1E1E] flex justify-between items-center">
            <span className="flex justify-center items-center gap-2">
              <img src="/images/icons/language-icon.svg" alt="experience" />
              <p className="font-[500]  text-[#1E1E1E]">Language</p>
            </span>
            <p className="text-[#535353] text-[10px] font-[400]">{language}</p>
          </div>

          <div className="w-[189px] h-[12px] text-[12px] text-[#1E1E1E] flex justify-between items-center">
            <span className="flex justify-center items-center gap-2">
              <img src="/images/icons/active-icon.svg" alt="experience" />
              <p className="font-[500]  text-[#1E1E1E]">Active</p>
            </span>
            <p className="text-[#535353] text-[10px] font-[400]">
              {active}hr ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FindProProfileOverview;
