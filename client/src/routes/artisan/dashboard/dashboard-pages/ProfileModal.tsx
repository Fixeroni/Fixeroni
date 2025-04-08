import { createFileRoute } from "@tanstack/react-router";
import { IoCloseOutline } from "react-icons/io5";
import { useToggleStore } from "../../../../stores/profileState";

export const Route = createFileRoute(
  "/artisan/dashboard/dashboard-pages/ProfileModal",
)({
  component: ProfileModal,
});

function ProfileModal() {
  const { toggle } = useToggleStore();

  return (
    <div className="fixed h-screen inset-0 flex z-20 justify-center bg-[#64646466]/50 backdrop-blur-md scroll-auto overflow-y-scroll">
      <div className="w-[406px]   h-[844px] bg-[#FFFFFF] rounded-[20px] shawdow---feature mt-4">
        <section>
          <div className="p-8 flex justify-between items-center">
            <div>
              <h3 className="text-[#1E1E1E]  text-[24px] font-medium">
                Profile
              </h3>
            </div>
            <div
              className="rounded-[25px] bg-[#F7F7F9] w-[50px] cursor-pointer aspect-square flex items-center justify-center"
              onClick={toggle}
            >
              <IoCloseOutline size={30} />
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-center items-center ">
            <div className="relative">
              <img
                src="/images/assets/profile-image.png"
                alt="Profile"
                className=" object-cover w-[60px] aspect-square rounded-[30px] border-[2px] border-[#0F9067]"
              />

              <button className="absolute bottom-0 right-0 cursor-pointer border-[#0F9067] w-[20px] aspect-square  rounded-[9999px] border bg-[#0F9067]">
                <img
                  src="/images/icons/camera.png"
                  alt=""
                  className="w-full object-cover"
                />
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <h2 className="text-[#1E1E1E] font-medium text-[24px] pt-2">Ben Hooder</h2>
            <div className="flex items-center gap-1.5">
                <img src="/images/icons/profile--edit-image.png" alt="" />
                <h3 className="text-[16px] text-[#10B981]">Edit Profile</h3>
            </div>
          </div>
        </section>

            <section className="px-8 mt-4">
                <div className="bg-[url('/images/branding/availbaldash.png')] bg-fill   profile----availablebal-shawdow rounded-[6.98964px] w-full h-[180px]">

                </div>
            </section>


      </div>
    </div>
  );
}

export default ProfileModal;



// /* Frame 335 */

// position: absolute;
// width: 346px;
// height: 180px;
// left: 30px;
// top: 258px;

// /* Brand color

// Primary color
// */
// background: #10B981;
// box-shadow: 0px 1.86391px 1.86391px rgba(0, 0, 0, 0.25);
// border-radius: 6.98964px;

