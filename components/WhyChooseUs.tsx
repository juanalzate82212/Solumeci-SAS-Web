const reasons = [
  {
    title: "Calidad de Materiales",
    description:
      "Trabajamos con materiales certificados y proveedores confiables para garantizar durabilidad en cada obra.",
  },
  {
    title: "Atención Personalizada",
    description:
      "Trato directo con el cliente desde el diseño hasta la entrega, sin intermediarios ni demoras en la comunicación.",
  },
  {
    title: "Cobertura Nacional",
    description:
      "Ejecutamos proyectos en Medellín y en las principales ciudades de Colombia con el mismo nivel de calidad.",
  },
  {
    title: "Cumplimiento de Tiempos",
    description:
      "Respetamos los cronogramas acordados. Sabemos que el tiempo de nuestros clientes es tan valioso como el nuestro.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 bg-brand-red overflow-hidden text-center relative">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% 0%, rgba(255,255,255,0.07) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 100% 100%, rgba(40,40,41,0.25) 0%, transparent 60%)
          `,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-[52px] font-extrabold text-white leading-tight tracking-tight mb-18">
          ¿Por qué elegir Solumeci?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-x-12">
          <div className="flex flex-col">
            {reasons.slice(0, 2).map((r, i) => (
              <div
                key={i}
                className="py-9 border-b first:pt-0"
                style={{ borderColor: "rgba(255,255,255,0.12)" }}
              >
                <h3 className="text-white font-bold text-xl mb-2 tracking-tight">
                  {r.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {r.description}
                </p>
              </div>
            ))}
          </div>

          <div
            className="hidden md:block"
            style={{ background: "rgba(255,255,255,0.2)" }}
          />

          <div className="flex flex-col">
            {reasons.slice(2, 4).map((r, i) => (
              <div
                key={i}
                className="py-9 border-b first:pt-0"
                style={{ borderColor: "rgba(255,255,255,0.12)" }}
              >
                <h3 className="text-white font-bold text-xl mb-2 tracking-tight">
                  {r.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {r.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
