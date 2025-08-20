export default function Sectors() {
  const sectors = [
    'Passenger airlines',
    'Cargo operators',
    'Tour operators',
    'Sports teams & events',
    'Government & relief missions',
  ];

  return (
    <section id="sectors" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Sectors We Serve</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s) => (
            <li key={s} className="p-4 bg-white border rounded-lg shadow-sm">
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
