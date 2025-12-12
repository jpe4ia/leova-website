'use client';

const faqs = [
  {
    question: 'LISA est-il adapté aux organismes d\'inspection accrédités COFRAC ?',
    answer: 'Absolument. LISA a été conçu en collaboration avec des organismes accrédités selon la norme ISO/CEI 17020. Le logiciel intègre nativement les exigences de traçabilité, de gestion documentaire et d\'historisation des modifications requises par les référentiels d\'accréditation. Chaque action est horodatée et associée à un utilisateur identifié.',
  },
  {
    question: 'Combien de temps faut-il pour déployer LISA dans mon organisation ?',
    answer: 'Le déploiement standard prend entre 2 et 4 semaines selon la complexité de votre organisation. Cela inclut la configuration initiale, l\'import de vos données existantes (clients, équipements, historique), la personnalisation de vos modèles de rapports et la formation de vos équipes. Notre équipe vous accompagne à chaque étape.',
  },
  {
    question: 'Peut-on gérer plusieurs agences ou équipes avec des droits différents ?',
    answer: 'Oui, LISA est conçu pour les organisations multi-sites. Vous pouvez créer autant d\'agences que nécessaire, définir des rôles personnalisés (administrateur, technicien, commercial, direction...) et attribuer des droits d\'accès granulaires. Chaque responsable peut superviser son périmètre tout en permettant une vision consolidée à la direction.',
  },
  {
    question: 'Les rapports d\'intervention sont-ils personnalisables ?',
    answer: 'Entièrement. LISA vous permet de créer vos propres modèles de rapports au format Word ou PDF. Les champs sont dynamiquement alimentés par les données saisies (client, équipement, observations, non-conformités...). Vous pouvez définir des workflows de validation avant émission et conserver l\'historique de toutes les versions.',
  },
  {
    question: 'Comment retrouver rapidement l\'historique d\'un client ou d\'un équipement ?',
    answer: 'Grâce à la recherche avancée, vous accédez en 2 clics à l\'historique complet : interventions passées, rapports émis, non-conformités relevées, évolutions de l\'équipement. Vous pouvez filtrer par client, site, technicien, période ou type d\'intervention. Tout l\'historique est conservé et accessible instantanément.',
  },
  {
    question: 'Où sont hébergées mes données et sont-elles sécurisées ?',
    answer: 'Vos données sont hébergées en France sur des infrastructures certifiées. L\'accès est sécurisé par authentification forte, les communications sont chiffrées (HTTPS/TLS) et nous effectuons des sauvegardes quotidiennes. Une politique de rôles et un journal d\'audit complet garantissent la confidentialité et la traçabilité des accès.',
  },
  {
    question: 'Puis-je importer mes données existantes depuis Excel ?',
    answer: 'Oui, LISA dispose d\'outils d\'import puissants. Vous pouvez importer vos fichiers Excel de clients, sites, équipements et historique d\'interventions. Un assistant de mapping vous guide pour associer vos colonnes aux champs LISA, avec détection automatique des doublons et validation avant import définitif.',
  },
  {
    question: 'Quel support est inclus et comment évoluera LISA ?',
    answer: 'Un support technique réactif est inclus dans tous nos forfaits : assistance par email et téléphone, base de connaissances en ligne et sessions de formation. LISA évolue régulièrement avec de nouvelles fonctionnalités développées en concertation avec nos clients. Les mises à jour sont automatiques et incluses dans votre abonnement.',
  },
  {
    question: 'LISA fonctionne-t-il sur mobile pour les techniciens terrain ?',
    answer: 'Oui, LISA est accessible depuis n\'importe quel appareil connecté à Internet : ordinateur, tablette ou smartphone. L\'interface s\'adapte automatiquement à la taille de l\'écran. Vos techniciens peuvent consulter leur planning, accéder aux fiches équipements et saisir leurs interventions directement sur le terrain.',
  },
  {
    question: 'Comment LISA gère-t-il la facturation et le suivi commercial ?',
    answer: 'LISA intègre un module complet de gestion commerciale : devis, suivi des opportunités, transformation en interventions, puis génération des factures. Vous suivez votre chiffre d\'affaires, vos encours et vos relances depuis un tableau de bord dédié. L\'intégration avec votre logiciel comptable (EBP, Sage...) est possible.',
  },
];

export default function FAQ() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#010d11] to-[#051a1f] text-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2dd4bf]/10 border border-[#2dd4bf]/20 mb-4">
            <span className="text-sm font-medium text-[#5eead4]">Questions fréquentes</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-3">
            Tout ce que vous devez savoir sur <span className="text-[#2dd4bf]">LISA</span>
          </h3>
          <p className="text-white/60 max-w-2xl mx-auto">
            Vous avez des questions ? Nous avons les réponses. Découvrez comment LISA peut transformer votre activité d'inspection.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details 
              key={faq.question} 
              className="group bg-white/5 hover:bg-white/[0.07] border border-white/10 hover:border-[#2dd4bf]/30 rounded-2xl transition-all duration-300"
            >
              <summary className="cursor-pointer p-6 flex justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                  <span className="w-8 h-8 rounded-lg bg-[#2dd4bf]/20 text-[#2dd4bf] text-sm font-bold flex items-center justify-center shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-lg font-semibold text-white/90 group-hover:text-white transition-colors">
                    {faq.question}
                  </span>
                </div>
                <span className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#2dd4bf]/20 flex items-center justify-center shrink-0 transition-all duration-300">
                  <svg 
                    className="w-4 h-4 text-[#2dd4bf] transition-transform duration-300 group-open:rotate-45" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 pt-0">
                <div className="pl-12 border-l-2 border-[#2dd4bf]/30 ml-4">
                  <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
        
        {/* CTA après FAQ */}
        <div className="mt-12 text-center">
          <p className="text-white/60 mb-4">Vous avez d'autres questions ?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-[#2dd4bf] hover:bg-[#5eead4] text-[#0f2a2a] px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:shadow-[0_0_30px_rgba(45,212,191,0.3)]"
          >
            Contactez-nous
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
