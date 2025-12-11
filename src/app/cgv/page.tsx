import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Conditions Générales de Vente | LEOVA Systems',
};

export default function CGV() {
  return (
    <div className="min-h-screen bg-[#0f2a2a] text-white">
      {/* Header */}
      <div className="bg-[#1a3d3d] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="inline-flex items-center gap-2 text-[#2dd4bf] hover:text-[#5eead4] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Conditions Générales de Vente</h1>
        <p className="text-white/60 mb-8">Applicables aux services LISA - Solution SaaS de gestion des inspections</p>
        
        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-[#2dd4bf] mb-4">Article 1 - Objet</h2>
            <p className="text-white/70">
              Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles 
              entre LEOVA Systems (ci-après "le Prestataire") et tout professionnel (ci-après "le Client") 
              souscrivant à un abonnement au logiciel LISA.
            </p>
            <p className="text-white/70 mt-4">
              LISA est un logiciel en mode SaaS (Software as a Service) permettant la gestion des inspections, 
              équipements, interventions et rapports.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2dd4bf] mb-4">Article 2 - Formules et tarifs</h2>
            <div className="bg-[#1a3d3d] rounded-xl p-6 space-y-4">
              <div>
                <h3 className="font-semibold text-white">LISA Starter - 99€ HT/mois</h3>
                <p className="text-white/60 text-sm">1 admin, 3 utilisateurs back-office, 10 accès portail client</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">LISA Professionnel - 199€ HT/mois</h3>
                <p className="text-white/60 text-sm">1 admin, 10 utilisateurs back-office, portail client illimité, modules facturation et feuille de route</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">LISA Entreprise - Sur devis</h3>
                <p className="text-white/60 text-sm">Utilisateurs illimités, tous modules, API, formation, support dédié</p>
              </div>
            </div>
            <p className="text-white/70 mt-4">
              Utilisateurs supplémentaires : +19€ HT/mois (back-office), +9€ HT/mois (portail client).
              Les prix sont indiqués en euros hors taxes. La TVA applicable sera ajoutée lors de la facturation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2dd4bf] mb-4">Article 3 - Souscription et accès</h2>
            <p className="text-white/70">
              La souscription s'effectue en ligne via le site leova-systems.fr. Après paiement, 
              le Client reçoit ses identifiants de connexion par email sous 24 heures ouvrées maximum.
            </p>
            <p className="text-white/70 mt-4">
              L'abonnement prend effet à la date du premier paiement et donne accès immédiat à la plateforme LISA.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2dd4bf] mb-4">Article 4 - Durée et renouvellement</h2>
            <p className="text-white/70">
              L'abonnement est conclu pour une durée d'un mois, renouvelable tacitement par prélèvement 
              automatique à chaque échéance mensuelle.
            </p>
            <p className="text-white/70 mt-4">
              Le Client peut résilier son abonnement à tout moment depuis son espace client ou par email. 
              La résiliation prend effet à la fin de la période en cours, sans remboursement au prorata.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2dd4bf] mb-4">Article 5 - Paiement</h2>
            <p className="text-white/70">
              Le paiement s'effectue par carte bancaire via la plateforme sécurisée Stripe. 
              Le prélèvement est automatique chaque mois à la date anniversaire de souscription.
            </p>
            <p className="text-white/70 mt-4">
              En cas d'échec de paiement, le Prestataire se réserve le droit de suspendre l'accès 
              au service après notification par email et un délai de régularisation de 7 jours.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2dd4bf] mb-4">Article 6 - Données et confidentialité</h2>
            <p className="text-white/70">
              Le Client reste propriétaire de l'ensemble des données qu'il saisit dans LISA. 
              Le Prestataire s'engage à ne pas utiliser, divulguer ou vendre ces données à des tiers.
            </p>
            <p className="text-white/70 mt-4">
              Les données sont hébergées en France/Europe sur des serveurs sécurisés. 
              Des sauvegardes automatiques quotidiennes sont effectuées.
            </p>
            <p className="text-white/70 mt-4">
              En cas de résiliation, le Client peut demander l'export de ses données pendant 30 jours. 
              Passé ce délai, les données sont supprimées définitivement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2dd4bf] mb-4">Article 7 - Disponibilité du service</h2>
            <p className="text-white/70">
              Le Prestataire s'engage à fournir un taux de disponibilité de 99,5% sur une base mensuelle, 
              hors maintenances programmées. Les maintenances sont annoncées 48h à l'avance par email.
            </p>
            <p className="text-white/70 mt-4">
              En cas d'indisponibilité prolongée (plus de 24h consécutives hors force majeure), 
              le Client pourra demander une compensation au prorata.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2dd4bf] mb-4">Article 8 - Support</h2>
            <p className="text-white/70">
              Le support est inclus dans tous les abonnements et accessible par email à 
              support@leova-systems.fr. Délai de réponse : 24h ouvrées (Starter), 4h ouvrées (Pro et Entreprise).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2dd4bf] mb-4">Article 9 - Responsabilité</h2>
            <p className="text-white/70">
              La responsabilité du Prestataire est limitée au montant des sommes effectivement 
              versées par le Client au cours des 12 derniers mois.
            </p>
            <p className="text-white/70 mt-4">
              Le Prestataire ne saurait être tenu responsable des dommages indirects, pertes 
              d'exploitation ou de données résultant de l'utilisation du service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2dd4bf] mb-4">Article 10 - Droit de rétractation</h2>
            <p className="text-white/70">
              Conformément aux dispositions légales, le droit de rétractation ne s'applique pas 
              aux services pleinement exécutés avant la fin du délai de rétractation avec l'accord du Client.
            </p>
            <p className="text-white/70 mt-4">
              En souscrivant, le Client accepte expressément que le service commence immédiatement 
              et renonce à son droit de rétractation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2dd4bf] mb-4">Article 11 - Modifications</h2>
            <p className="text-white/70">
              Le Prestataire se réserve le droit de modifier les présentes CGV. Les modifications 
              seront notifiées par email 30 jours avant leur entrée en vigueur. En cas de désaccord, 
              le Client pourra résilier sans frais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2dd4bf] mb-4">Article 12 - Loi applicable et litiges</h2>
            <p className="text-white/70">
              Les présentes CGV sont soumises au droit français. En cas de litige, les parties 
              s'engagent à rechercher une solution amiable. À défaut, les tribunaux de [Ville à compléter] 
              seront seuls compétents.
            </p>
          </section>
        </div>

        <p className="text-white/40 text-sm mt-12">
          Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
        </p>
      </div>
    </div>
  );
}


