import { createFileRoute } from "@tanstack/react-router";
import { IoCloseOutline } from "react-icons/io5";
import { useToggleStore } from "../../../../stores/profileState";
import ProfileButton from "../DashBoardComponent/ProfileButton";
import ProfileDetails from "../DashBoardComponent/ProfileDetails";

export const Route = createFileRoute(
  "/artisan/dashboard/dashboard-pages/ProfileModal",
)({
  component: ProfileModal,
});

function ProfileModal() {
  const { toggle} = useToggleStore();

  return (
    <div className="fixed h-screen inset-0 flex z-20 justify-end  scroll-auto overflow-y-scroll">
      <div className="w-[406px]   h-fit bg-[#FFFFFF] rounded-[20px] shawdow---feature mt-4 mb-3">
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
                src="/assets/images/profile-image.png"
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

            <section className="px-6 mt-4 overflow-hidden">
                <div className="bg-[url('/images/branding/availbaldash.png')] bg-cover bg-no-repeat  profile----availablebal-shawdow rounded-[6.98964px] w-full h-full ">
                    <div className="py-6 ml-6 flex flex-col">
                    <h3 className="text-[#FFFFFF] opacity-[0.9] font-light text-[18px] ">Available Balance</h3>
                    <h3 className="text-[#FFFFFF] text-[35px] font-normal tracking-[2px]"><span className="line-through">N</span>500.00</h3>
                    </div>

                    <div className="px-4 flex items-center justify-between pb-5">
                     <ProfileButton name={"Top Up"} icon={"/images/icons/top-up--icon.png"} />
                     <ProfileButton name={"Withdraw"} icon={"/images/icons/withdraw--icon.png"} />
                    </div>
                   
                </div>
            </section>

              <ProfileDetails name={"Top Up"} date={"Feb 25, 2025"} amount={"+$50.00"} icon={"/images/icons/top-up---arrow.png"} amountColor={"text-[#10B981]"}/>

              <ProfileDetails name={"Withdrawal"} date={"Feb 24, 2025"}  amount={"-$120.00"} 
              icon={"/images/icons/profil-up--arrow-icon.png"} amountColor={"text-[#EF4444]"} />
              <ProfileDetails name={"Top Up"} date={"Feb 25, 2025"} amount={"+$50.00"} 
              icon={"/images/icons/top-up---arrow.png"} amountColor={"text-[#10B981]"}/>
              <ProfileDetails name={"Withdrawal"} date={"Feb 24, 2025"}  amount={"-$120.00"} icon={"/images/icons/profil-up--arrow-icon.png"} amountColor={"text-[#EF4444]"} />


              <section className="pb-9">
                <div className="border-t-[#EDEDED] border mt-10 h-[5rem] border-b-0 border-l-0 border-r-0  px-7 ">
                      
                      <div className="flex items-center gap-5 mt-6">

                     
                      <div className="">
                        <img src="/images/icons/refer-earn--icon.png" alt=""  className="w-full"/>
                      </div>
                      <div>
                        <h3 className="text-[#1E1E1E] text-[24px] font-normal ">Refer & Earn </h3>
                        <p className="text-[#6B7280] text-[14px] font-normal pt-2">Invite friends for rewards</p>
                      </div>
                      </div>

                </div>
              </section>

      </div>
    </div>
  );
}

export default ProfileModal;






// /* Invite friends for rewards */

// position: absolute;
// width: 172px;
// height: 20px;
// left: 0px;
// top: 0px;

// font-family: 'Poppins';
// font-style: normal;
// font-weight: 400;
// font-size: 14px;
// line-height: 21px;

// color: #6B7280;



















