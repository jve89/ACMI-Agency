import { COPY } from '../../copy/site';

export default function Creds() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-8 text-lg font-medium text-gray-700">
        {COPY.creds.map((c) => (
          <div key={c} className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
            {c}
          </div>
        ))}
      </div>
    </section>
  );
}
