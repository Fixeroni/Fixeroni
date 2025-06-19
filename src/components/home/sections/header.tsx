import Navbar from "@/components/home/navbar";
import { SearchBar } from "@/components/home/searchbar";
// import { HeroBanner } from "@/public/assets";
// import { googlePlay } from "@/public/assets";
// import { appStore } from "@/public/assets";
// import Image from "next/image";

const Header = () => {
  return (
    <header id="home" className="bg-[#E7ECEF] min-h-screen relative">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center  justify-between  md:p-12 relative">
        <div className="max-w-lg text-center flex flex-col space-y-6  md:mt-0  md:text-left z-10 relative">
          <h1 className="text-3xl pt-36 md:pt-16 md:text-4xl leading-[1.5] tracking-wide">
            &quot;Find{" "}
            <span className="text-black-600 font-bold text-5xl">
              Trusted <br />
            </span>{" "}
            Local
            <span className="text-black-600 font-bold text-5xl">
              {" "}
              Expert
            </span>{" "}
            In Minutes&quot;
          </h1>
          <p className="text-gray-800  font-medium mt-4 leading-[1.5]">
            Book vetted plumbers, electricians, <br />
            carpenters, and more. Secure, simple, and stress-free.
          </p>

          {/* Search Bar */}
          <div className="mt-4 relative z-20 max-sm:flex max-sm:justify-center max-sm:items-center">
            <SearchBar />
          </div>

          {/* App Store & Play Store Buttons */}
          <div className="flex justify-center md:justify-start space-x-4 mt-6 relative z-10">
            <img
              src="/assets/images/Group 3.png"
              className=""
              width="140"
              height="40"
              alt="Download on Google Play"
              loading="lazy"
            />

            <img
              src="/assets/images/Group 5.png"
              alt="Download on App Store"
              width={140}
              height={40}
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="mt-6 md:mt-[-52px] flex justify-center absolute md:relative right-0 md:right-auto top-1/2 md:top-auto transform md:transform-none -translate-y-1/2 md:translate-y-0 z-0">
          <img
            src="/assets/images/Image.png"
            alt="Worker providing service"
            width={500}
            height={600}
          />
        </div>
      </section>
    </header>
  );
};

export default Header;
