'use client';

const steps = [
  'Client & site',
  'Parc équipements',
  'Planification',
  'Intervention terrain',
  'Rapport + Historique + Facturation',
];

export default function Workflow() {
  return (
    <section className="py-16 bg-[#03110f] text-white">
      <div className="max-w-5xl mx-auto px-4 space-y-8">
        <h3 className="text-2xl font-bold text-center">Workflow maîtrisé</h3>
        <div className="grid gap-6 md:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step} className="p-4 border border-white/10 rounded-2xl bg-white/5">
              <div className="text-sm text-white/60 mb-1">Étape {index + 1}</div>
              <p className="text-lg font-semibold">{step}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-white/70">
          Chaque action laisse une trace: qui, quand, quoi, version du rapport.
        </p>
      </div>
    </section>
  );
}


