import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
// import { AboutBg } from "@/public/assets/index";
// import { oneUser } from "@/public/assets/index";
// import { Customers } from "@/public/assets/index";
// import { services } from "@/public/assests/index";
export default function AboutUs() {
  return (
    <div id="about" className="flex flex-col min-h-screen max-md:h-full max-sm:mb-[10rem] max-sm:pb-1  max-md:pb-24 max-md:mb-[28rem] max-md:mt-12">
      {/* Top section with background image and overlay */}
      <div className="relative h-[30vh] md:h-[40vh]">
        <img
          src="/assets/images/pexels-irbin-medina-390275-1432112.png"
          alt="About Us Background"
          className="object-cover w-full h-full"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center px-8 max-md:py-14">
          <h1 className="text-white text-2xl md:text-3xl md:mb-16 mb-16 font-light">
            About Us
          </h1>
        </div>
      </div>

      <div className="bg-white flex-grow relative max-md:mt-12 max-sm:mb-11 max-sm:h-full">
        <Card className="max-w-7xl bg-[#F8F8F8] mx-auto md:p-15  pl-72 p-2 shadow-xl max-sm:shadow-none border-0 absolute left-4 right-4 -top-20 md:-top-24">
          <CardContent className="">
            <p className="text-gray-700 leading-relaxed text-center text-sm md:text-base max-sm:text-justify">
              Fixeroni connects you with verified experts, ensuring top-notch
              quality <br className="max-sm:hidden" /> and reliability. Enjoy a seamless experience with
              our intuitive platform,  effortless <br className="max-sm:hidden"/> search process, and
              dedicated support team. Your satisfaction is our top priority.
            </p>
          </CardContent>
          <div className="container  max-sm:w-fit mx-auto md:px-4 md:pt-24  pb-12 max-md:mb-[2rem]">
            <div className="grid grid-cols-1 max-md:place-items-center  md:grid-cols-3 pl-[28px] max-sm:pl-0 md:pl-8 md:gap-16 gap-12 max-w-7xl mx-auto">
              {/* Feature 1 */}
              <div className="bg-white p-2 pt-2 max-sm:w-full w-[300px] h-[150px] rounded-lg shadow-md text-center">
                <div className="flex justify-center ">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center">
                    <img
                      src="/assets/images/User Male Skin Type 5.png"
                      alt="One User"
                    />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  15K+ Happy Customers
                </h3>
                <p className="text-[10px] italic text-center font-light">
                  Trusted by over 15,000 happy customers who rely on Fixeroni{" "}
                  <br className="max-sm:hidden" />
                  for reliable and top-quality services.
                </p>
              </div>

              <div className="bg-white  p-2 pt-2 max-sm:w-full w-[300px] h-[150px] rounded-lg shadow-md text-center">
                <div className="flex justify-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center">
                    <img
                      src="/assets/images/Conference Skin Type 7.png"
                      alt="Customers"
                    />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  1000+ Service Provider
                </h3>
                <p className="text-[10px] italic text-center font-light">
                  Be part of our community of highly skilled service <br />{" "}
                  providers, get assigned to a task and get paid
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-2 pt-2 max-sm:w-full w-[300px] h-[150px] rounded-lg shadow-md text-center">
                <div className="flex justify-center ">
                  <div className="w-12 h-12  rounded-full flex items-center justify-center">
                    <img src="/assets/images/Service.png" alt="Services" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">100+ Services</h3>
                <p className="text-[10px] italic text-center font-light">
                  Be part of our community of highly skilled service <br />{" "}
                  providers, get assigned to a task and get paid
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
