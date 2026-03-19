export default function Hero() {
  return (
    <section aria-label="Presentación" className="relative min-h-140 flex items-center justify-center overflow-hidden bg-brand-dark">

      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 50% 0%, rgba(136,51,54,0.45) 0%, transparent 70%),
            radial-gradient(ellipse 50% 40% at 15% 100%, rgba(136,51,54,0.18) 0%, transparent 60%),
            radial-gradient(ellipse 40% 50% at 85% 90%, rgba(63,63,65,0.8) 0%, transparent 60%)
          `,
        }}
      />

      <div className="relative z-10 text-center px-6 py-20 max-w-2xl mx-auto">

        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-5">
          Soluciones Metálicas y Civiles de Calidad
        </h1>

        <p className="text-brand-gray-light text-lg leading-relaxed mb-10 max-w-lg mx-auto">
          En Solumeci SAS fabricamos e instalamos estructuras metálicas,
          mobiliario industrial y soluciones civiles en Medellín y toda Colombia.
        </p>

        <nav aria-label="Acciones Principales" className="flex justify-center flex-wrap gap-3">
          <a href="#proyectos"
            className="bg-brand-red hover:bg-brand-red-light text-white font-semibold px-8 py-3.5 rounded-lg transition-all hover:-translate-y-0.5">
            Ver Proyectos
          </a>
          <a href="#contacto"
            className="text-white/80 font-medium px-8 py-3.5 rounded-lg transition-all hover:-translate-y-0.5 border border-white/10 hover:border-white/30"
            style={{ background: 'rgba(255,255,255,0.05)' }}>
            Contáctanos
          </a>
        </nav>

      </div>
    </section>
  )
}