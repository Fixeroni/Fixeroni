import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { createFileRoute } from '@tanstack/react-router'




interface StarRatingProps {
  totalStars?: number;
  rating: number;
  onRatingChange?: (rating: number) => void;
}




const StarRating: React.FC<StarRatingProps> = ({
  totalStars = 5,
  rating,
  onRatingChange,
}) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex gap-1 cursor-pointer">
      {Array.from({ length: totalStars }, (_, i) => {
        const starValue = i + 1;
        return (
          <FaStar
            key={starValue}
            size={14}
            className={`transition-colors duration-200 ${
              starValue <= (hover || rating) ? "text-[#FFC107]" : "text-[#535353]"
            }`}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
            onClick={() => onRatingChange && onRatingChange(starValue)}
          />
        );
      })}
    </div>
  );
};

export const Route = createFileRoute('/artisan/dashboard/DashBoardComponent/StarRating')({
    component: StarRating,
  })

export default StarRating;

// /* Star 5 */

// position: absolute;
// width: 14px;
// height: 14px;
// left: 60px;
// top: 0px;

// background: #535353;


