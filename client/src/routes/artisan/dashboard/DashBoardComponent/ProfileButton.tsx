import { ProfileButtonProps } from "@/types";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/artisan/dashboard/DashBoardComponent/ProfileButton",
)({
  component: ProfileButton,
});


function ProfileButton({name, icon}:ProfileButtonProps) {
  return (
    <div>
      <button
        type="button"
        className="cursor-pointer  bg-[#ffffff7f] flex items-center justify-center gap-1 rounded-[12px] w-[150px] h-[48px]"
      >
        <div className="">
          <img src={icon} alt="" className="w-full" />
        </div>

        <div>
          <p className="text-[#FFFFFF] text-[20px] font-normal">{name}</p>{" "}
        </div>
      </button>
    </div>
  );
}

export default ProfileButton;


// /* button */

// width: 130px;
// height: 48px;

// background: rgba(255, 255, 255, 0.5);
// border-radius: 12px;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;



