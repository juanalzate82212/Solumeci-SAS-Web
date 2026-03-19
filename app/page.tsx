import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Clients from "@/components/Clients";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Clients />
      <WhyChooseUs />
      <CTA />
    </main>
  );
}
