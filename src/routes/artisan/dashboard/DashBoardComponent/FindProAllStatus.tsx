import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/artisan/dashboard/DashBoardComponent/FindProAllStatus",
)({
  component: FindProAllStatus,
});
interface statusType {
  tittle: string;
  total: number;
}

function FindProAllStatus({
  isActive,
  onClose,
}: {
  isActive: boolean;
  onClose: () => void;
}) {
  const status: statusType[] = [
    { tittle: "All Status", total: 100 },
    { tittle: "Active", total: 40 },
    { tittle: "Inactive", total: 10 },
  ];
  return (
    <>
      {isActive && (
        <ul className="w-[300px] p-[30px] flex flex-col rounded-2xl bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.1)] absolute scale-95 overflow-x-hidden -left-[70%]">
          <div className="flex justify-between">
            <p className="text-2xl font-bold mb-5">Status</p>
            <Button
              className="hover:scale-110 active:scale-115 cursor-pointer"
              onClick={onClose}
            >
              <img src="/images/icons/close.svg" alt="close" />
            </Button>
          </div>
          {status.map(({ tittle, total }, index) => (
            <li
              key={index}
              className="flex w-full justify-between items-center overflow-y-auto"
            >
              <label
                className="flex gap-5 items-center cursor-pointer"
                htmlFor={tittle}
              >
                <Input type="checkbox" id={tittle} />
                <p className="text-nowrap">{tittle}</p>
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
export default FindProAllStatus;
