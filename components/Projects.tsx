import Image from "next/image";

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Proyectos Realizados
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="relative h-64">
            <Image
              src={`/images/proyecto-${item}.jpg`}
              alt={`Proyecto ${item}`}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
