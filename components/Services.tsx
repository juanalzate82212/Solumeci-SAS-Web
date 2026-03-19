const services = [
  {
    title: "Estructuras Metálicas",
    description: "Diseño, fabricación e instalación con materiales de alta calidad y cumplimiento en tiempos de entrega."
  },
  {
    title: "Mobiliario para Laboratorio",
    description: "Soluciones personalizadas para necesidades específicas de laboratorio."
  },
  {
    title: "Obras Civiles",
    description: "Servicios integrales para la construcción y renovación de infraestructuras civiles."
  },
  {
    title: "Instalación de Estructuras",
    description: "Instalación profesional de estructuras metálicas y componentes industriales."
  }
];

export default function Services() {
  return (
    <section id="servicios" className="bg-gray-100 py-24 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-[52px] font-extrabold text-brand-dark leading-tight tracking-tight mb-4">
          Nuestros Servicios
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-2xl px-7 py-9 text-left overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="absolute top-0 left-0 right-0 h-0.75 rounded-t-2xl bg-gray-200 group-hover:bg-brand-red transition-colors" />
              <h3 className="text-brand-dark font-bold text-[17px] leading-snug mb-3 relative">
                {service.title}
              </h3>
              <p className="text-brand-gray text-sm leading-relaxed relative">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
