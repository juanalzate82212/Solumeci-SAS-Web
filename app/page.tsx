import type { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Clients from "@/components/Clients";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Inicio",
  description: "Solumeci SAS — Fabricación e instalación de estructuras metálicas, mobiliario para laboratorio y obras civiles en Medellín y toda Colombia.",
  alternates: {
    canonical: "/",
  },
};

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
