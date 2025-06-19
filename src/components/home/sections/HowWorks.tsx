// import Image from "next/image";
// import Link from "next/link";
import { Link } from '@tanstack/react-router';
// import { HashLink as Link} from 'react-router-hash-link';
import { Card, CardContent } from "@/components/ui/card";
// import { Link } from '@tanstack/react-router';
import {
  Search,
  UserPlus,
  Calendar,
  Briefcase,
  Wallet,
  DollarSign,
} from "lucide-react";
// import { workImg1 } from "@/public/assets";
// import { workImg2 } from "@/public/assets";

export default function HowItWorks() {
  return (
    <section id="howitworks" className="w-full bg-[#F2F1F1] py-16">
      <div className="container px-4 md:px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-medium italic mb-5 tracking-tight text-emerald-600">
            How it works
          </h2>
          <p className="text-gray-600 italic font-medium">
            Step-By Step Guide To Getting Your Tasks Done With Ease On Fixeroni
          </p>
        </div>

        <div className="grid gap-20 max-sm:gap-8 p-6 md:grid-cols-2">
          <div className="relative">
            <div className="mb-4 flex justify-center">
              <div className="relative h-32 w-64">
                <img
                  src="/assets/images/Group 20.png"
                  alt="Person searching and sitting"
                  width={250}
                  height={128}
                  className="object-contain"
                />
              </div>
            </div>

            <Link to='/'>
              <Card className="h-[150px]  bg-[#E7ECEF] cursor-pointer transition-shadow shadow-lg  hover:shadow-lg">
                <CardContent className="flex p-6">
                  <div className="mr-4 flex h-16  w-16 flex-shrink-0 items-center justify-center">
                    <Search className="h-10 w-10 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold uppercase text-gray-600">
                      SEARCH
                    </h3>
                    <p className="text-[12px]  font-light text-gray-500">
                      Browse Our Wide Range Of Service Categories And Select The
                      One That Fits Your Needs
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="relative">
            <div className="relative sm:block hidden">
              <div className="mb-4 flex justify-center">
                <div className="relative h-32 w-64">
                  <img
                    src="/assets/images/Group 21.png"
                    alt="a man trying to signup"
                    width={250}
                    height={128}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <Link to="/artisan/auth/login">
              <Card className="md:h-[150px] cursor-pointer transition-shadow shadow-lg hover:shadow-md">
                <CardContent className="flex p-5">
                  <div className="mr-4 flex h-16 w-16 flex-shrink-0 items-center justify-center">
                    <UserPlus className="h-10 w-10 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold uppercase text-gray-800">
                      SIGN UP
                    </h3>
                    <p className="text-[12px] font-light text-gray-500">
                      Sign Up For Fixeroni And Complete The Registration Form
                      With Your Profile And Trade Skills Information.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="relative mt-[-60px] max-sm:mt-0">
            <Link to="/">
              <Card className="md:h-[150px] cursor-pointer bg-[#F4F4F4] shadow-lg transition-shadow hover:shadow-md">
                <CardContent className="flex p-5">
                  <div className="mr-4 flex h-16 w-16 flex-shrink-0 items-center justify-center">
                    <Calendar className="h-10 w-10 text-green-500" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold uppercase text-gray-800">
                      BOOK
                    </h3>
                    <p className="text-[12px]  font-light text-gray-500">
                      Pick From Our List Of Top-Rated Professionals, Review
                      Their Profiles And Customer Feedback And Schedule Your
                      Service At A Time That Works Best For You
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="relative mt-[-60px] max-sm:mt-0">
            <Link to="/">
              <Card className="md:h-[150px] cursor-pointer  bg-[#F4F4F4] shadow-lg  transition-shadow hover:shadow-md">
                <CardContent className="flex p-5">
                  <div className="mr-4 flex h-16 w-16 flex-shrink-0 items-center justify-center">
                    <Briefcase className="h-10 w-10 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold uppercase text-gray-800">
                      GET HIRED
                    </h3>
                    <p className="text-[12px]  font-light text-gray-500">
                      Get Hired By Bidding On Or Accepting Job Requests That
                      Match Your Skills And Availability, And Communicating With
                      Clients Through The Fixeroni Messaging System.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="relative mt-[-60px] max-sm:mt-0">
            <Link to="/">
              <Card className="md:h-[150px] cursor-pointer shadow-lg transition-shadow hover:shadow-md">
                <CardContent className="flex p-5">
                  <div className="mr-4 flex h-16 w-16 flex-shrink-0 items-center justify-center">
                    <Wallet className="h-10 w-10 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold uppercase text-gray-800">
                      Pay
                    </h3>
                    <p className="text-[12px]  font-light text-gray-500">
                      Relax While Our Trusted Service Provider Completes The
                      Task To Your Satisfaction And Then Pay
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="relative mt-[-60px] max-sm:mt-0">
            <Link to="/">
              <Card className="md:h-[150px] cursor-pointer  bg-[#E7ECEF] shadow-lg  transition-shadow hover:shadow-md">
                <CardContent className="flex p-5">
                  <div className="mr-4 flex h-16 w-16 flex-shrink-0 items-center justify-center">
                    <DollarSign className="h-10 w-10 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold uppercase text-gray-800">
                      GET PAID
                    </h3>
                    <p className="text-[12px]  font-light text-gray-500">
                      Get Paid Securely Through Fixeroni&apos;s Payment System
                      After Completing Jobs To The Client&apos;s Satisfaction
                      And Submitting Your Invoice Through The App.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
