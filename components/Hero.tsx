export default function Hero() {
  return (
    <section className="bg-gray-100 py-28 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Soluciones Metálicas y Civiles en Medellín
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          En Solumeci SAS fabricamos e instalamos estructuras metálicas,
          mobiliario industrial y soluciones civiles en Medellín y toda Colombia.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#proyectos"
            className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800"
          >
            Ver Proyectos
          </a>
          <a
            href="#contacto"
            className="border border-blue-900 text-blue-900 px-6 py-3 rounded-lg hover:bg-blue-50"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
}
