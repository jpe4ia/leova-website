'use client';

const personas = [
  { name: 'Dirigeant', copy: 'Vue d’ensemble, marge temps, charge, retards.' },
  { name: 'Responsable Qualité', copy: 'Traçabilité, cohérence, historique, preuves.' },
  { name: 'Technicien', copy: 'Planning, infos sur site, saisie rapide, moins de paperasse.' },
];

export default function PersonaPanels() {
  return (
    <section className="py-16 bg-[#041e20] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-8">Pour chaque rôle, un accompagnement</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {personas.map(persona => (
            <div key={persona.name} className="border border-white/10 rounded-2xl p-6 bg-gradient-to-br from-[#082426] to-[#041013]">
              <p className="text-sm text-white/60 mb-2">Persona</p>
              <h4 className="text-xl font-semibold mb-3">{persona.name}</h4>
              <p className="text-white/70 text-sm">{persona.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

