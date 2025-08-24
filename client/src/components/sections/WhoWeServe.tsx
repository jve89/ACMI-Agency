// client/src/components/sections/WhoWeServe.tsx
import { Plane, Package, Globe, Trophy, Ambulance } from "lucide-react";
import { Link } from "react-router-dom";

export default function WhoWeServe() {
  const sectors = [
    { name: "Passenger airlines", Icon: Plane },
    { name: "Cargo operators", Icon: Package },
    { name: "Tour operators", Icon: Globe },
    { name: "Sports teams & events", Icon: Trophy },
    { name: "Government & relief missions", Icon: Ambulance },
  ];

  return (
    <section id="who-we-serve" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Who We Serve</h2>
        <p className="mt-3 mx-auto max-w-2xl text-gray-600">
          Flexible ACMI and charter solutions for every type of operation.
        </p>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map(({ name, Icon }) => (
            <li
              key={name}
              className="flex flex-col items-center rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <Icon className="h-8 w-8 text-indigo-600" aria-hidden="true" />
              <span className="mt-3 font-medium text-gray-800">{name}</span>
            </li>
          ))}
        </ul>

        {/* Learn More button */}
        <div className="mt-12 text-center">
          <Link
            to="/who-we-serve"
            className="inline-flex items-center px-6 py-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
