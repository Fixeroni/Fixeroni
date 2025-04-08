import {
  AboutUS,
  Footer,
  Header,
  HowItWorks,
  ServicesSection,
  TestimonialsSection,
  WhyFixeroni,
} from "@/components/home";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <AboutUS />
        <WhyFixeroni />
        <HowItWorks />
        <ServicesSection />
        <TestimonialsSection />
        <Footer />
      </main>
    </div>
  );
}
