import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/artisan/dashboard/DashBoardComponent/FindProAllDistances",
)({
  component: FindProAllDistances,
});

interface Kind {
  tittle: string;
  total: number;
}

const Kinds: Kind[] = [
  { tittle: "All Kinds", total: 800 },
  { tittle: "Carpenter", total: 40 },
  { tittle: "Electrician", total: 10 },
  { tittle: "Plumber", total: 30 },
  { tittle: "Welder", total: 10 },
  { tittle: "Hair Dresser", total: 150 },
  { tittle: "Cleaner", total: 150 },
  { tittle: "Car Wash", total: 110 },
  { tittle: "Bricklayer", total: 100 },
  { tittle: "Gardener", total: 10 },
  { tittle: "Dry Cleaner", total: 100 },
];
function FindProAllDistances({
  isActive,
  onClose,
}: {
  isActive: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {isActive && (
        <div className="w-[300px] p-[30px] flex flex-col rounded-2xl bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.1)] absolute scale-95 overflow-x-hidden -left-[70%]">
          <div className="flex justify-between">
            <p className="text-[24px] font-bold mb-5">Distance</p>
            <Button
              className="hover:scale-110 active:scale-115 cursor-pointer"
              onClick={onClose}
            >
              <img src="/images/icons/close.svg" alt="close" />
            </Button>
          </div>
          <div>
            <div className="flex">
              <label htmlFor="min" className="relative">
                <p className="text-[13px] font-normal">Min</p>
                <Input
                  id="min"
                  type="number"
                  className="w-[80px] py-1 px-3 text-start text-[15px] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
                <p className="absolute top-[50%] right-2 text-[13px] font-bold  bg-white z-[1]">
                  Km
                </p>
              </label>
              <div className="flex justify-between items-center px-5 mt-5">
                <img
                  src="/images/icons/dash.svg"
                  className="w-[500px]"
                  alt=""
                />
              </div>
              <label htmlFor="max" className="relative">
                <p className="text-[13px] font-normal">Max</p>

                <Input
                  id="max"
                  type="number"
                  className="w-[80px] py-1 px-3 text-center text-[15px] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
                <p className="absolute top-[50%] right-2 text-[13px] font-bold bg-white z-[1]">
                  Km
                </p>
              </label>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              className="custom-range w-full h-[2px] mt-6 rounded-lg appearance-none cursor-pointer range-[2px] dark:bg-black"
            />
          </div>
          <Button className="mt-5 bg-[#1f1e1e] w-[240px] h-[30px] rounded-2xl flex justify-center items-center text-white text-[15px] cursor-pointer hover:bg-[#3c3c3c] active:bg-[#535353]">
            Apply
          </Button>
        </div>
      )}
    </>
  );
}
export default FindProAllDistances;
