"use client";

import Image, { type StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import { electrician, plumber, Painter } from "@/assets";

interface Service {
  id: number;
  name: string;
  startingPrice: number;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    name: "Engineering Services",
    startingPrice: 45,
    image: "/assets/images/electricician.png",
  },
  {
    id: 2,
    name: "Electrician",
    startingPrice: 50,
    image: "/assets/images/electricician.png",
  },
  {
    id: 3,
    name: "Plumber",
    startingPrice: 55,
    image: "/assets/images/plumber.png",
  },
  {
    id: 4,
    name: "Painter",
    startingPrice: 40,
    image: "/assets/images/painter.png",
  },
  {
    id: 5,
    name: "Carpenter",
    startingPrice: 60,
    image: "/assets/images/painter.png",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full bg-gray-50 py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl italic  md:text-4xl font-medium text-green-600">
              Explore Our Popular Services
            </h2>
            <p className="text-gray-700 font-medium mt-2">
              Discover our most in demand services
            </p>
          </div>
          <Button
            className="mt-4 md:mt-0 rounded-[10px] bg-white font-bold text-green-900 border-green-900 border-2 hover:bg-green-50"
            variant="outline"
            size="lg"
          >
            Book Now
          </Button>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {services.map((service) => (
              <CarouselItem
                key={service.id}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <Card className="overflow-hidden w-fit h-[500px] md:h-[410px] rounded-xl border-0 shadow-md group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardContent className="p-0 relative aspect-[3/4]">
                    <Badge
                      className="absolute h-[40px] border-0 font-semibold rounded-[20px] shadow-lg top-16 left-10 z-20 bg-white text-black"
                      variant="outline"
                    >
                      Starts from ${service.startingPrice}/hr
                    </Badge>
                    <div className="absolute inset-0  bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 transition-all duration-300 group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/40" />
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.name}
                      className=" rounded-lg w-full scale-110 transition-all duration-300 group-hover:scale-110"
                    />
                    <CardFooter className="absolute bottom-0 left-0 right-0 py-14 px-10   z-20  ">
                      <h3 className="text-xl  font-semibold  text-white group-hover:text-green-300 transition-colors duration-300">
                        {service.name}
                      </h3>
                    </CardFooter>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-between items-center mt-16 max-sm:flex-col max-sm:mt-4 max-sm:gap-4">
            <p className="text-gray-700 italic">
              &quot;Need Help Now? Book a Pro in 60 Seconds&quot;
            </p>
            <div className="flex gap-2 max-sm:ml-auto max-sm:gap-4">
              <CarouselPrevious className="static translate-y-0 h-10 w-10" />
              <CarouselNext className="static translate-y-0 h-10 w-10" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
