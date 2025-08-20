export default function HowItWorks() {
  const steps = [
    { title: '1. Request', text: 'Send us your capacity or aircraft availability requirements.' },
    { title: '2. Match', text: 'We identify the right ACMI operators from our trusted network.' },
    { title: '3. Secure', text: 'Finalize agreements quickly — ensuring smooth operations.' },
  ];

  return (
    <section id="how" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.title} className="p-6 border rounded-lg bg-gray-50">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-gray-600">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
