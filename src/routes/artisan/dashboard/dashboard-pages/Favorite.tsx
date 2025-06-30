import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/artisan/dashboard/dashboard-pages/Favorite",
)({
  component: Favorite,
});

function Favorite() {
  return (
    <div>
      <section>
        {" "}
        <h2 className="Poppins text-[#1E1E1E] text-[36px] font-medium mt-4">
          My Favourite
        </h2>
      </section>

      <section>
        <div className="bg-[#FFFFFF] shawdow---feature mt-3 w-full rounded-[20px] py-[20px] px-[30px] h-[110px] flex items-center justify-between">
          <div>
            <div>
                <img src="./ellipse-28.svg" alt="ellipse-28" />
            </div>
            <div>
                
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Favorite;

// /* Ellipse 28 */

// width: 70px;
// height: 70px;

// background: url(.jpg), #D9D9D9;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;
