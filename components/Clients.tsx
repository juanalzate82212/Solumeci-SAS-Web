export default function Clients() {
  return (
    <section id="clientes" className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">
          Empresas que han confiado en nosotros
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white p-6 shadow rounded">Cliente 1</div>
          <div className="bg-white p-6 shadow rounded">Cliente 2</div>
          <div className="bg-white p-6 shadow rounded">Cliente 3</div>
          <div className="bg-white p-6 shadow rounded">Cliente 4</div>
        </div>
      </div>
    </section>
  );
}
