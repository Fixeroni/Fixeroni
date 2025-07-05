import { useToggleStore } from "@/stores/profileState";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute(
  "/artisan/dashboard/DashBoardComponent/FindProReviews",
)({
  component: FindProReviews,
});

interface reviewsTypes {
  name: string;
  content: string;
}
interface TabState {
  about: boolean;
  reviews: boolean;
}
function FindProReviews() {
  const [activeTab, setActiveTab] = useState({
    about: false,
    reviews: true,
  });
  const reviews: reviewsTypes[] = [
    {
      name: "Mark Brian",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute",
    },
    {
      name: "Mark Brian",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute",
    },
    {
      name: "Mark Brian",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute",
    },
    {
      name: "Mark Brian",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute",
    },
  ];

  return (
    <div className="w-[478px] h-[332px] rounded-[10px] bg-[white] py-5 px-5 shadow-[0_0_5px_rgba(0,0,0,0.1)]">
      <div className="flex w-[184px] justify-between">
        <button
          className={`px-4 py-2 text-[12px] cursor-pointer ${
            activeTab.about
              ? "border-b-2 border-b-[#0F9067]"
              : "text-[#5e5e5e] "
          }`}
          onClick={() =>
            setActiveTab((prev) => ({ about: true, reviews: false }))
          }
        >
          About
        </button>
        <button
          className={`px-4 py-2 text-[12px] cursor-pointer ${
            activeTab.reviews
              ? "border-b-2 border-b-[#0F9067]"
              : "text-[#5e5e5e] "
          }`}
          onClick={() =>
            setActiveTab((prev) => ({ about: false, reviews: true }))
          }
        >
          Review[{reviews.length}]
        </button>
      </div>
      {activeTab.reviews ? (
        <ul className="flex flex-col overflow-x-hidden overflow-y-auto w-full h-[250px] mt-5">
          {reviews.map(({ name, content }, index) => (
            <li
              key={index}
              className="w-[438px] py-4 px-8 box-border bg-[#F8F8F8] flex flex-col gap-2 rounded-[10px] mb-[20px]"
            >
              <p className="text-[12px] font-[500] text-[#1E1E1E]">{name}</p>
              <p className="text-[#5e5e5e] font-[300] text-[10px] leading-[15px]">
                {content}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <div>About</div>
      )}
    </div>
  );
}
export default FindProReviews;
