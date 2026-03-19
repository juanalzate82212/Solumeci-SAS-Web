import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Proyecto 1",
    category: "Estructuras Metálicas",
    slug: "proyecto-1",
  },
  {
    id: 2,
    title: "Proyecto 2",
    category: "Mobiliario para Laboratorio",
    slug: "proyecto-2",
  },
  { id: 3, title: "Proyecto 3", category: "Obras Civiles", slug: "proyecto-3" },
  {
    id: 4,
    title: "Proyecto 4",
    category: "Estructuras Metálicas",
    slug: "proyecto-4",
  },
  {
    id: 5,
    title: "Proyecto 5",
    category: "Instalación de Estructuras",
    slug: "proyecto-5",
  },
  { id: 6, title: "Proyecto 6", category: "Obras Civiles", slug: "proyecto-6" },
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 px-6 bg-brand-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-[52px] font-extrabold text-white leading-tight tracking-tight text-center mb-4">
          Proyectos Realizados
        </h2>
        <p className="text-brand-gray-light text-lg leading-relaxed max-w-md mx-auto mb-14 text-center">
          Una muestra de los proyectos que hemos desarrollado a lo largo del
          país.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/proyectos/${project.slug}`}
              className="group relative h-64 rounded-2xl overflow-hidden block bg-brand-dark-light"
            >
              <Image
                src={`/images/${project.slug}.jpeg`}
                alt={`Proyecto ${project.title}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-brand-dark opacity-0 group-hover:opacity-60 transition-opacity duration-300" />

              <div className="absolute inset-0 flex flex-col justify-end p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-brand-red text-[11px] font-bold tracking-[2px] uppercase mb-1">
                  {project.category}
                </span>
                <span className="text-white font-bold text-lg leading-tight">
                  {project.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
