import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial {
  id: number;
  name: string;
  image: string;
  message: string;
  position: "left" | "right";
  bubbleColor: "gray" | "coral" | "green" | "white";
  positionClass: string;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Jane Cooper",
      image: "/placeholder.svg?height=80&width=80",
      message:
        "Fixeroni saved my day! Found a licensed plumber within 20 minutes, and the job was done perfectly. No more endless Google searches.",
      position: "right",
      bubbleColor: "gray",
      positionClass: "top-0 right-10",
    },
    {
      id: 2,
      name: "Jenny Wilson",
      image: "/placeholder.svg?height=80&width=80",
      message:
        "I love vizioning. Fixeroni has connected me with serious clients. The app is easy to use, and payments are always on time. Highly recommend.",
      position: "left",
      bubbleColor: "gray",
      positionClass: "top-24 left-10",
    },
    {
      id: 3,
      name: "Esther Howard",
      image: "/placeholder.svg?height=80&width=80",
      message:
        "I looked everywhere for a platform with transparent pricing and super professional. Finally, a platform that actually delivers quality.",
      position: "right",
      bubbleColor: "green",
      positionClass: "top-[200px] right-32",
    },
    {
      id: 4,
      name: "Guy Hawkins",
      image: "/placeholder.svg?height=80&width=80",
      message: "Great",
      position: "left",
      bubbleColor: "coral",
      positionClass: "bottom-6 left-24",
    },
    {
      id: 5,
      name: "Jacob Jones",
      image: "/placeholder.svg?height=80&width=80",
      message: "Fair Pricing",
      position: "right",
      bubbleColor: "white",
      positionClass: "bottom-[-0] right-2",
    },
  ];

  const getBubbleColor = (color: string) => {
    switch (color) {
      case "gray":
        return "bg-gray-200";
      case "coral":
        return "bg-red-300";
      case "green":
        return "bg-green-300";
      case "white":
        return "bg-white shadow";
      default:
        return "bg-gray-200";
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-medium italic text-green-700 mb-16">
          What Our Customers Are Saying
        </h2>

        {/* Desktop layout with absolute positioning */}
        <div className="relative h-[500px] hidden md:block">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`absolute ${
                testimonial.positionClass
              } flex flex-col items-${
                testimonial.position === "left" ? "start" : "end"
              }`}
            >
              {testimonial.position === "left" ? (
                <>
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar className="h-16 w-16 border-2 border-white">
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{testimonial.name}</span>
                  </div>
                  <div
                    className={`${getBubbleColor(
                      testimonial.bubbleColor,
                    )} p-4 rounded-2xl rounded-tl-none max-w-xs relative`}
                  >
                    <p className="text-sm">{testimonial.message}</p>
                    <div
                      className={`absolute top-0 left-0 w-4 h-4 ${getBubbleColor(
                        testimonial.bubbleColor,
                      )} transform -translate-x-1/2 -translate-y-1/4 rotate-45`}
                    ></div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className={`${getBubbleColor(
                      testimonial.bubbleColor,
                    )} p-4 rounded-2xl rounded-tr-none mb-3 max-w-xs relative`}
                  >
                    <p className="text-sm">{testimonial.message}</p>
                    <div
                      className={`absolute top-0 right-0 w-4 h-4 ${getBubbleColor(
                        testimonial.bubbleColor,
                      )} transform translate-x-1/2 -translate-y-1/4 rotate-45`}
                    ></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">{testimonial.name}</span>
                    <Avatar className="h-16 w-16 border-2 border-white">
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="grid gap-10 md:hidden">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`flex flex-col ${
                testimonial.position === "left" ? "items-start" : "items-end"
              }`}
            >
              {testimonial.position === "left" ? (
                <>
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar className="h-12 w-12 border-2 border-white">
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{testimonial.name}</span>
                  </div>
                  <div
                    className={`${getBubbleColor(
                      testimonial.bubbleColor,
                    )} p-4 rounded-2xl rounded-tl-none max-w-xs relative`}
                  >
                    <p className="text-sm">{testimonial.message}</p>
                    <div
                      className={`absolute top-0 left-0 w-4 h-4 ${getBubbleColor(
                        testimonial.bubbleColor,
                      )} transform -translate-x-1/2 -translate-y-1/4 rotate-45`}
                    ></div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className={`${getBubbleColor(
                      testimonial.bubbleColor,
                    )} p-4 rounded-2xl rounded-tr-none mb-3 max-w-xs relative`}
                  >
                    <p className="text-sm">{testimonial.message}</p>
                    <div
                      className={`absolute top-0 right-0 w-4 h-4 ${getBubbleColor(
                        testimonial.bubbleColor,
                      )} transform translate-x-1/2 -translate-y-1/4 rotate-45`}
                    ></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">{testimonial.name}</span>
                    <Avatar className="h-12 w-12 border-2 border-white">
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
