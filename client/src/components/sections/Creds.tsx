// client/src/components/sections/Creds.tsx
import { COPY } from "../../copy/site";

export default function Creds() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-6 text-base md:text-lg font-medium text-gray-700 text-center">
        {COPY.creds.map((c) => (
          <div key={c} className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
            <span>{c}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
