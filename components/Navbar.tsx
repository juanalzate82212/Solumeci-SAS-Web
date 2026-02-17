export default function Navbar() {
  return (
    <nav className="w-full shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="font-bold text-xl">Soluciones Metalicas y Civiles</h1>
        <div className="space-x-6">
          <a href="#servicios">Servicios</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#clientes">Clientes</a>
          <a href="#contacto">Contacto</a>
        </div>
      </div>
    </nav>
  );
}
