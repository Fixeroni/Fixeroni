import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/artisan/dashboard/DashBoardComponent/FindProAllCities",
)({
  component: FindProAllCities,
});
interface citiesTypes {
  name: string;
  total: number;
}

const cities: citiesTypes[] = [
  { name: "All Cities", total: 800 },
  { name: "Lagos", total: 40 },
  { name: "Enugun", total: 10 },
  { name: "Port Harcourt", total: 30 },
  { name: "Owerri", total: 10 },
];
function FindProAllCities({
  isActive,
  onClose,
}: {
  isActive: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {isActive && (
        <ul className="w-[300px] h-[580px] p-[30px] flex flex-col rounded-2xl bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.1)] absolute scale-95 overflow-x-hidden -left-[180%]">
          <div className="flex justify-between">
            <p className="text-2xl font-bold mb-5">Cities</p>
            <Button
              className="hover:scale-110 active:scale-115 cursor-pointer"
              onClick={onClose}
            >
              <img src="/images/icons/close.svg" alt="close" />
            </Button>
          </div>
          {cities.map(({ name, total }, index) => (
            <li
              key={index}
              className="flex w-full justify-between items-center overflow-y-auto"
            >
              <label
                className="flex gap-5 items-center cursor-pointer"
                htmlFor={name}
              >
                <Input type="checkbox" id={name} />
                <p className="text-nowrap">{name}</p>
              </label>
              <span>
                <p className="bg-[#f3f3f3] rounded-md text-[12px] w-[40px] text-center py-1 px-2">
                  {total}
                </p>
              </span>
            </li>
          ))}
          <Button className="mt-5 bg-[#1f1e1e] w-[240px] h-[30px] rounded-2xl flex justify-center items-center text-white text-[15px] cursor-pointer hover:bg-[#3c3c3c] active:bg-[#535353]">
            Apply
          </Button>
        </ul>
      )}
    </>
  );
}
export default FindProAllCities;
