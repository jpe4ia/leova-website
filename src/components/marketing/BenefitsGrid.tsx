'use client';

const benefits = [
  { title: 'Moins d’administratif', description: 'Modèles, données pré-remplies, génération accélérée.' },
  { title: 'Conformité & sérénité', description: 'Traçabilité, historique, contrôles cohérents.' },
  { title: 'Vision dirigeant', description: 'KPI, charge, retards, interventions à venir.' },
  { title: 'Terrain fluide', description: 'Planning clair, checklists, saisie simple.' },
  { title: 'Parc maîtrisé', description: 'Équipements, périodicités, statuts, alertes.' },
  { title: 'Facturation alignée', description: 'Prestation → rapport → facturable, sans oublier.' },
];

export default function BenefitsGrid() {
  return (
    <section className="py-16 bg-[#021017] text-white">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-6">
        <h3 className="text-2xl font-bold">Les bénéfices immédiats</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(item => (
            <div key={item.title} className="p-5 bg-white/5 border border-white/5 rounded-2xl text-left shadow-[0_20px_45px_rgba(7,20,20,0.45)]">
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-white/70 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

