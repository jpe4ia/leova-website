'use client';

const faqs = [
  {
    question: 'LISA est-il fait pour les organismes d’inspection ?',
    answer: 'Oui, il répond aux besoins réglementaires (COFRAC, ISO) avec des workflows adaptés au terrain.',
  },
  {
    question: 'Peut-on gérer plusieurs agences/équipes ?',
    answer: 'Oui, multi-sites, multi-équipe et multi-rôle avec une supervision consolidée.',
  },
  {
    question: 'Rapports : modèles personnalisables ?',
    answer: 'Modèles Word/PDF personnalisés, champs dynamiques, et validation en workflow.',
  },
  {
    question: 'Historique : retrouve-t-on une intervention en 2 clics ?',
    answer: 'Filtre par client/site/technicien. L’historique et les versions sont disponibles.',
  },
  {
    question: 'Données : hébergement et accès ?',
    answer: 'Hébergement France, accès sécurisé, politique de rôles et audit trail.',
  },
  {
    question: 'Déploiement : combien de temps pour démarrer ?',
    answer: 'Déploiement SaaS rapide, on se connecte à vos outils existants sous quelques jours.',
  },
  {
    question: 'Import Excel possible ?',
    answer: 'Oui, outils d’import avec mapping et vérification des doublons.',
  },
  {
    question: 'Support et évolutions ?',
    answer: 'Support dédié, roadmap partagée et mises à jour pilotées.',
  },
];

export default function FAQ() {
  return (
    <section className="py-16 bg-[#010d11] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.4em] text-[#5eead4]">FAQ</p>
          <h3 className="text-2xl font-bold">Ce que veulent savoir les décideurs</h3>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {faqs.map(faq => (
            <details key={faq.question} className="group bg-white/5 border border-white/10 rounded-2xl p-5 open:border-[#2dd4bf]/50">
              <summary className="cursor-pointer text-lg font-semibold flex justify-between items-center">
                <span>{faq.question}</span>
                <span className="text-[#2dd4bf] group-open:-rotate-45 transition">+</span>
              </summary>
              <p className="mt-3 text-sm text-white/70">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

