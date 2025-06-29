import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial {
  id: number;
  name: string;
  image: string;
  message: string;
  side: "left" | "right";
  bubbleImage: string;
  avatarPosition: string;
  bubblePosition: string;
  bubbleSize: {
    width: number;
    height: number;
  };
  textPosition: {
    top: string;
    left: string;
    right: string;
    bottom: string;
  };
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    // RIGHT SIDE AVATARS
    {
      id: 1,
      name: "Jane Cooper",
      image: "/assets/images/Ellipse 2.png",
      message:
        "Fixeroni saved my day! Found a licensed plumber within 20 minutes, and the job was done perfectly. No more endless Google searches.",
      side: "right",
      bubbleImage: "/assets/images/Union.png",
      avatarPosition: "top-10 right-18",
      bubblePosition: "bottom-120 right-50",
      bubbleSize: { width: 400, height: 160 },
      textPosition: {
        top: "25px",
        left: "20px",
        right: "60px",
        bottom: "25px",
      },
    },
    {
      id: 3,
      name: "Esther Howard",
      image: "/assets/images/Ellipse 5.png",
      message:
        "I looked everywhere for a platform with transparent pricing and super professional. Finally, a platform that actually delivers quality.",
      side: "right",
      bubbleImage: "/assets/images/Union-deep-green.png",
      avatarPosition: "top-68 right-18",
      bubblePosition: "top-50 right-40",
      bubbleSize: { width: 400, height: 130 },
      textPosition: {
        top: "20px",
        left: "20px",
        right: "70px",
        bottom: "20px",
      },
    },
    {
      id: 5,
      name: "Jacob Jones",
      image: "/assets/images/Ellipse 5.png",
      message: "Fair Pricing",
      side: "right",
      bubbleImage: "/assets/images/Union.png",
      avatarPosition: "bottom-4 right-18",
      bubblePosition: "bottom-8 right-40",
      bubbleSize: { width: 140, height: 85 },
      textPosition: {
        top: "25px",
        left: "20px",
        right: "20px",
        bottom: "25px",
      },
    },

    // LEFT SIDE AVATARS
    {
      id: 2,
      name: "Jenny Wilson",
      image: "/assets/images/Ellipse 5.png",
      message:
        "As an electrician, Fixeroni has connected me with serious clients. The app is easy to use, and payments are always on time. Highly recommend.",
      side: "left",
      bubbleImage: "/assets/images/Union-green.png",
      avatarPosition: "top-40 left-20",
      bubblePosition: "top-20 left-45",
      bubbleSize: { width: 400, height: 140 },
      textPosition: {
        top: "25px",
        left: "60px",
        right: "20px",
        bottom: "25px",
      },
    },
    {
      id: 4,
      name: "Guy Hawkins",
      image: "/assets/images/Ellipse 5.png",
      message: "Great",
      side: "left",
      bubbleImage: "/assets/images/Union-red.png",
      avatarPosition: "bottom-16 left-20",
      bubblePosition: "bottom-30 left-45",
      bubbleSize: { width: 120, height: 80 },
      textPosition: {
        top: "25px",
        left: "25px",
        right: "25px",
        bottom: "25px",
      },
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-medium italic text-green-700 mb-16">
          What Our Customers Are Saying
        </h2>

       
        <div className="relative h-[600px] hidden md:block">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id}>
              {/* Avatar with Name */}
              <div
                className={`absolute ${testimonial.avatarPosition} flex flex-col items-center`}
              >
                <Avatar className="h-16 w-16 border-2 border-white shadow-lg">
                  <AvatarImage
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                  />
                  <AvatarFallback>
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <span className="font-medium text-sm mt-2 text-center">
                  {testimonial.name}
                </span>
              </div>

              {/* Speech Bubble */}
              <div
                className={`absolute ${testimonial.bubblePosition}`}
                style={{
                  width: `${testimonial.bubbleSize.width}px`,
                  height: `${testimonial.bubbleSize.height}px`,
                  backgroundImage: `url(${testimonial.bubbleImage})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className="absolute text-[10px] leading-relaxed flex items-center justify-center text-center p-2"
                  style={{
                    top: testimonial.textPosition.top,
                    left: testimonial.textPosition.left,
                    right: testimonial.textPosition.right,
                    bottom: testimonial.textPosition.bottom,
                  }}
                >
                  {testimonial.message}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="grid gap-8 md:hidden">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`flex flex-col ${testimonial.side === "left" ? "items-start" : "items-end"}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <Avatar className="h-12 w-12 border-2 border-white">
                  <AvatarImage
                    src={testimonial.image || "/placeholder.svg"}
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
                className="relative"
                style={{
                  width: `${Math.min(testimonial.bubbleSize.width, 280)}px`,
                  height: `${testimonial.bubbleSize.height}px`,
                  backgroundImage: `url(${testimonial.bubbleImage})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className="absolute text-sm leading-relaxed flex items-center justify-center text-center p-3"
                  style={{
                    top: "15px",
                    left: "15px",
                    right: "15px",
                    bottom: "15px",
                  }}
                >
                  {testimonial.message}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
