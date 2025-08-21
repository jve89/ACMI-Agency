// client/src/components/sections/Sectors.tsx
import { Plane, Package, Globe, Trophy, Ambulance } from "lucide-react";

export default function Sectors() {
  const sectors = [
    { name: "Passenger airlines", Icon: Plane },
    { name: "Cargo operators", Icon: Package },
    { name: "Tour operators", Icon: Globe },
    { name: "Sports teams & events", Icon: Trophy },
    { name: "Government & relief missions", Icon: Ambulance },
  ];

  return (
    <section id="sectors" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Who We Serve</h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Flexible ACMI and charter solutions for every type of operation.
        </p>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map(({ name, Icon }) => (
            <li
              key={name}
              className="p-6 bg-white border rounded-xl shadow-sm flex flex-col items-center"
            >
              <Icon className="h-6 w-6 text-indigo-700" aria-hidden="true" />
              <span className="mt-3 font-medium text-gray-800">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
