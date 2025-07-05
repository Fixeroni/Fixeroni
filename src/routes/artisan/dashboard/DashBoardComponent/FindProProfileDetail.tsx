import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import StarRating from "../DashBoardComponent/StarRating";

export const Route = createFileRoute(
  "/artisan/dashboard/DashBoardComponent/FindProProfileDetail",
)({
  component: FindProProfileDetail,
});

interface FindProProfileDetailProps {
  name: string;
  profilePicture: string;
  profession: string;
  reviewsNo?: number;
  whatsappLink?: string;
  faceBookLink?: string;
  instagramLink?: string;
}
function FindProProfileDetail({
  name,
  profilePicture,
  profession,
  reviewsNo,
  whatsappLink,
  faceBookLink,
  instagramLink,
}: FindProProfileDetailProps) {
  const [rating, setRating] = useState<number | null>(3);

  return (
    <div className=" flex px-[30px] -mt-12">
      {/**Profile image */}
      <div>
        <img
          loading="lazy"
          src={profilePicture}
          className="w-[200px] h-[200px] rounded-full"
          alt="profile picture"
        />
      </div>
      <div className=" pt-6 px-[20px]">
        {/**Social Media links */}
        <span className="flex gap-[15px] ">
          <a
            href={whatsappLink}
            className="hover:scale-115 active:scale-125 cursor-pointer"
          >
            <img src="/images/icons/whatsapp-icon.svg" alt="" />
          </a>
          <a
            href={faceBookLink}
            className="hover:scale-115 active:scale-125 cursor-pointer"
          >
            <img src="/images/icons/facebook-icon.svg" alt="" />
          </a>
          <a
            href={instagramLink}
            className="hover:scale-115 active:scale-125 cursor-pointer"
          >
            <img src="/images/icons/instagram-icon.svg" alt="" />
          </a>
        </span>
        <div className="flex flex-col mt-[28px]">
          <p className="text-[24px] font-semibold mb-[10px] text-nowrap">
            {name}
          </p>
          <div className="flex flex-col gap-[5px]">
            <span className="flex justify-start items-center gap-[59px]">
              <p className="font-[500] text-[16px]">Trade</p>
              <p className="font-[400] text-[12px] md:text-[14px]">
                {profession}
              </p>
            </span>
            <span className="flex justify-start items-center gap-[20px] w-[212px] h-[15px]">
              <div>
                <StarRating rating={rating ?? 0} onRatingChange={setRating} />
              </div>
              <p className="flex text-[12px] md:text-[14px] font-[400] mt-1 text-nowrap">
                {reviewsNo} reviews
                <img
                  src="/images/icons/see-icon.svg"
                  className="ml-[24px]"
                  alt="see reviews"
                />
              </p>
            </span>
            <span className="flex gap-[34px] mt-[13px]">
              <button className="flex w-[70px] h-[27px] items-center justify-center gap-1 border border-[#0F9067] rounded-2xl cursor-pointer hover:bg-[#abe5d2] active:bg-[#508372] transition-colors duration-300">
                <img src="/images/icons/chat-icon.svg" alt="chat" />
                <p className="text-[10px]">Chat</p>
              </button>
              <button className="flex w-[80px] h-[27px] mr-10 items-center justify-center gap-1 border border-[#0F9067] rounded-2xl hover:bg-[#abe5d2] active:bg-[#508372] transition-colors duration-300">
                <img
                  src="/images/icons/favorite-icon.svg"
                  className="w-[13px]"
                  alt="Favorite"
                />
                <p className="text-[10px]">Favorites</p>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FindProProfileDetail;
