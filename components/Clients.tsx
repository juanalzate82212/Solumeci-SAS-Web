const clients = [
  { name: "Cliente Uno S.A.S", sector: "Industria" },
  { name: "Cliente Dos Ltda", sector: "Laboratorio" },
  { name: "Cliente Tres S.A.", sector: "Construcción" },
  { name: "Cliente Cuatro S.A.S", sector: "Comercial" },
  { name: "Cliente Cinco Group", sector: "Industrial" },
];

export default function Clients() {
  return (
    <section id="clientes" className="bg-white py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-[52px] font-extrabold text-brand-dark leading-tight tracking-tight mb-4">
          Empresas que han confiado en nosotros
        </h2>
        <p className="text-brand-gray text-lg leading-relaxed max-w-sm mx-auto mb-16">
          Hemos trabajado con empresas de distintos sectores a lo largo de
          Colombia.
        </p>

        <div className="flex flex-col text-left">
          {clients.map((client, i) => (
            <div
              key={i}
              className="group flex items-center justify-between py-5 border-b border-gray-100 first:border-t first:border-gray-100 hover:bg-gray-50 transition-colors px-2 cursor-default"
            >
              <div className="flex items-center gap-5">
                <span className="text-[11px] font-bold text-gray-300 tracking-wide min-w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-2xl md:text-[26px] font-bold text-brand-dark tracking-tight group-hover:text-brand-red transition-colors">
                  {client.name}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-brand-gray hidden sm:block">
                  {client.sector}
                </span>
                <span className="text-brand-red opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
