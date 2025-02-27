import { Feature } from "../types";

const features: Feature[] = [
    {
        image: "/images/assets/feature-1.png",
        title: "Find the right fix, Fast !",
        description: "Need a pro? Fixeroni connects you with skilled artisans for any job big or small. Post your task, get offers, and hire with confidence.",
        ctaText: "Find an Artisan",
        side: "left",
        cta: "/client/auth/register"
    },
    {
        image: "/images/assets/feature-2.png",
        title: "Show Your Skills. Get More Gigs.",
        description: "Join Fixeroni and connect with clients who need your expertise. Whether you're a plumber, carpenter, designer, or tech guru, get hired, get paid, and grow your business.",
        ctaText: "Join as an Artisan",
        side: "right",
        cta: "/artisan/auth/register"
    }
]

export default features;