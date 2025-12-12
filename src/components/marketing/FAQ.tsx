'use client';

const faqs = [
  {
    question: 'LISA est-il fait pour les organismes d’inspection ?',
    answer: 'Oui, conçu pour la conformité, les rapports, la traçabilité et les demandes réglementaires.',
  },
  {
    question: 'Peut-on gérer plusieurs agences/équipes ?',
    answer: 'Oui, multi-sites et multi-equipes avec rôles et droits séparés.',
  },
  {
    question: 'Rapports : modèles personnalisables ?',
    answer: 'Modèles Word/PDF exportables avec champs dynamiques et workflow de validation.',
  },
  {
    question: 'Historique : retrouve-t-on une intervention en 2 clics ?',
    answer: 'Oui, filtre par client/site/technicien et remonte l’historique complet.',
  },
  {
    question: 'Données : hébergement et accès ?',
    answer: 'Hébergement France, accès sécurisé, contrôle des rôles et audit trail.',
  },
  {
    question: 'Déploiement : combien de temps pour démarrer ?',
    answer: 'Déploiement SaaS en quelques jours selon les procédés et intégrations.',
  },
  {
    question: 'Import Excel possible ?',
    answer: 'Oui, import standardisé avec mapping de colonnes et vérifications.',
  },
  {
    question: 'Support et évolutions ?',
    answer: 'Support dédié, mises à jour régulières et roadmap partagée.',
  },
];

export default function FAQ() {
  return (
    <section className="py-16 bg-[#011216] text-white">
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        <h3 className="text-2xl font-bold text-center">Questions fréquentes</h3>
        <div className="space-y-4">
          {faqs.map(faq => (
            <div key={faq.question} className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <p className="font-semibold">{faq.question}</p>
              <p className="text-white/70 text-sm mt-1">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

