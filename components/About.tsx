export default function About() {
  const stats = [
    {
      num: "8",
      sup: "+",
      title: "Años de experiencia",
      desc: "Trayectoria sólida en el sector metalmecánico y civíl.",
    },
    {
      num: "100",
      sup: "+",
      title: "Proyectos realizados",
      desc: "Soluciones exitosas en diversos sectores del mercado.",
    },
    {
      num: "6",
      sup: "+",
      title: "Ciudades atendidas",
      desc: "Servicio integral en diversas ciudades del país.",
    },
  ];

  const cities = [
    "Medellín",
    "Bogotá",
    "Bucaramanga",
    "Cartagena",
    "Cartago",
    "Neiva",
    "Entre otras",
  ];

  return (
    <section className="py-24 px-6 bg-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-[56px] font-extrabold mb-6 text-brand-dark leading-tight tracking-tight">
          Sobre Nosotros
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto mb-14">
          Solumeci SAS es una empresa especializada en la fabricación e
          instalación de estructuras metálicas, mobiliario para laboratorio y
          obras civiles. Trabajamos con altos estándares de calidad y
          cumplimiento, desarrollando proyectos tanto en Medellín como en otras
          ciudades del país.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-gray-50 border border-gray-100 border-t-[3px] border-t-brand-red rounded-xl px-6 py-8"
            >
              <div className="text-[52px] font-black text-brand-dark leading-none tracking-tight">
                {stat.num}
                <sup className="text-[22px] font-bold text-brand-red align-super">
                  {stat.sup}
                </sup>
              </div>
              <p className="text-brand-dark font-semibold text-sm mt-2">
                {stat.title}
              </p>
              <p className="text-brand-gray text-xs leading-relaxed mt-1">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="text-[11px] font-bold text-brand-gray uppercase tracking-widest mb-3">
          Presencia en Colombia
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {cities.map((city) => (
            <span
              key={city}
              className="inline-flex items-center gap-1.5 bg-gray-100 border border-gray-200 text-brand-dark text-[12.5px] font-medium px-4 py-1.5 rounded-full"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red opacity-70" />
              {city}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
