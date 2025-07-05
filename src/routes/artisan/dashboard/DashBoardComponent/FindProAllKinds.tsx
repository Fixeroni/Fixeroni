import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/artisan/dashboard/DashBoardComponent/FindProAllKinds",
)({
  component: FindProAllKinds,
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
function FindProAllKinds({
  isActive,
  onClose,
}: {
  isActive: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {isActive && (
        <ul className="w-[300px] h-[580px] p-[30px] flex flex-col rounded-2xl bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.1)] absolute scale-95 overflow-x-hidden">
          <div className="flex justify-between">
            <p className="text-2xl font-bold mb-5">Kinds</p>
            <button
              className="hover:scale-110 active:scale-115 cursor-pointer"
              onClick={onClose}
            >
              <img src="/images/icons/close.svg" alt="close" />
            </button>
          </div>
          {Kinds.map(({ tittle, total }, index) => (
            <li
              key={index}
              className="flex w-full justify-between items-center overflow-y-auto"
            >
              <label
                className="flex gap-5 items-center cursor-pointer"
                htmlFor={tittle}
              >
                <input type="checkbox" id={tittle} />
                <p className="text-nowrap">{tittle}</p>
              </label>
              <span>
                <p className="bg-[#f3f3f3] rounded-md text-[12px] w-[40px] text-center py-1 px-2">
                  {total}
                </p>
              </span>
            </li>
          ))}
          <button className="mt-5 bg-[#1f1e1e] w-[240px] h-[30px] rounded-2xl flex justify-center items-center text-white text-[15px] cursor-pointer hover:bg-[#3c3c3c] active:bg-[#535353]">
            Apply
          </button>
        </ul>
      )}
    </>
  );
}
export default FindProAllKinds;
