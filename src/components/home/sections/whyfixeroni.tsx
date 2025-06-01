import Image from "next/image";
import { CheckCircle, Tag, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
// import { whyFixeroni } from "@/public/assets";

export default function WhyFixeroniSection() {
  return (
    <section className="w-full md:mt-28 max-sm:mt-[13rem] mt-72 bg-[#F2F1F1] overflow-hidden">
      <div className="grid md:grid-cols-2">
        <div className="relative md:h-[900px] h-[700px]">
          <div className="absolute inset-0">
            <img
              src="/assets/images/pexels-alaxmatias-28513058 1.png"
              alt="Professional contractor working"
              className="object-cover  w-full h-full"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            {/* Dark overlay */}
          </div>

          {/* Why Fixeroni heading with dotted border */}
          <div className="absolute top-8 left-8 z-10">
            <h2 className="text-4xl font-light italic text-white">
              Why Fixeroni?
            </h2>
          </div>

          {/* Text overlay at bottom */}
          <div className="absolute bottom-[400px] left-8 z-10 max-sm:left-0 max-sm:px-2 ">
            <p className="text-4xl max-sm:text-2xl font-medium text-white mb-1">
              Make Your Time
            </p>
            <h3 className="text-8xl font-semibold text-white max-sm:text-[3rem] max-sm:m-auto">Trustworthy</h3>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative p-8 md:p-12 min-h-[500px] max-sm:px-5">
          {/* Heading */}
          <h3 className="text-3xl font-light italic mb-12 text-center">
            Guaranteed Satisfaction With
          </h3>

          <div className="relative mb-16 md:ml-[-100px] mr-0  max-sm:ml-[-1rem] max-md:place-items-center ">
            <div className="absolute -left-1 -top-3 z-10 max-sm:left-[1rem] max-md:left-32">
              <div className=" p-2 rounded-full ">
                {/* <CheckCircle className="h-6 w-6 text-white" /> */}
                <img src="images/icons/verified_POS.png" alt="verified_POS" className="w-fit mt-[-1.5rem] ml-[-0.5rem] " loading="lazy"/>
              </div>
            </div>
            <Card className="bg-[#E7ECEF] max-sm:w-fit w-[300px] shadow-lg ml-4 relative z-0">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold mb-2">Verified Pros</h4>
                <p className="text-sm text-muted-foreground">
                  &quot;Background-checked Professionals with verified
                  reviews&quot;
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Second Card - Transparent Pricing */}
          <div className="relative mb-16 ml-12 md:ml-56 mt-[-1rem] max-sm:ml-[0rem] max-sm:flex max-sm:justify-center max-md:place-items-center"> 
            <div className="absolute right-25 -top-3 z-10 max-sm:right-[0rem]">
              <div className=" p-2 rounded-full max-sm:p-3">
                {/* <Tag className="h-6 w-6 text-black" /> */}
                <img src="images/icons/Tpricing.png" alt="" className="mt-[-2.2rem] "  loading="lazy"/>
              </div>
            </div>
            <Card className="bg-black w-[300px] max-sm:w-fit shadow-lg relative z-0">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold mb-2 text-white">
                  Transparent Pricing
                </h4>
                <p className="text-sm text-gray-300">
                  &quot;Compare quotes upfront - no hidden fees&quot;
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Third Card - Verified Pros (with lock) */}
          <div className="relative max-sm:ml-[-1rem]  max-sm:flex max-sm:justify-center max-md:place-items-center">
            <div className="absolute -left-1 top-[-2px]  z-10 max-sm:left-[0.7rem] max-md:left-32">
              <div className=" p-2 rounded-full ">
                <img src="images/icons/Vpros.png" alt="" className="w-fit mt-[-1.5rem] ml-[-0.5rem] " loading="lazy" />
                {/* <Lock className="h-6 w-6 text-white" /> */}
              </div>
            </div>
            <Card className="bg-[#E7ECEF] max-sm:w-full w-[300px] shadow-lg ml-4 relative z-0">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold mb-2">Verified Pros</h4>
                <p className="text-sm text-muted-foreground">
                  &quot;Pay securely with escrow protection&quot;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}





