import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Clients from "@/components/Clients";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <section id="servicios" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Nuestros Servicios</h2>
        <p>
          Fabricación de mesas para laboratorio, estructuras metálicas para
          construcción, mobiliario industrial y obras civiles. Ofrecemos
          soluciones personalizadas para proyectos de cualquier escala,
          garantizando calidad y durabilidad en cada producto.
        </p>
      </section> */}
      <About />
      <Services />
      <Projects />
      <Clients />
      <WhyChooseUs />
      <CTA />
    </main>
  );
}
