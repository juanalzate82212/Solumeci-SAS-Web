export default function Services() {
  return (
    <section id="servicios" className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Nuestros Servicios
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "Estructuras Metálicas",
            "Mobiliario para Laboratorio",
            "Obras Civiles",
            "Instalación de Estructuras",
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold mb-4">{service}</h3>
              <p className="text-gray-600 text-sm">
                Diseño, fabricación e instalación con materiales de alta calidad
                y cumplimiento en tiempos de entrega.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
