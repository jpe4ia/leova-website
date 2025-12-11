import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Politique de Confidentialité | LEOVA Systems',
};

export default function Confidentialite() {
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
        <h1 className="text-4xl font-bold mb-8">Politique de Confidentialité</h1>
        <p className="text-white/60 mb-8">Protection de vos données personnelles - RGPD</p>
        
        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-[#2dd4bf] mb-4">1. Responsable du traitement</h2>
            <div className="bg-[#1a3d3d] rounded-xl p-6">
              <p><strong>LEOVA Systems</strong></p>
              <p className="text-white/70">[Adresse à compléter]</p>
              <p className="text-white/70">Email : rgpd@leova-systems.fr</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2dd4bf] mb-4">2. Données collectées</h2>
            <p className="text-white/70">Nous collectons les données suivantes :</p>
            <ul className="list-disc list-inside text-white/70 mt-4 space-y-2">
              <li><strong>Formulaire de contact :</strong> Nom, prénom, email, téléphone, entreprise, message</li>
              <li><strong>Souscription :</strong> Informations de facturation, coordonnées bancaires (via Stripe)</li>
              <li><strong>Utilisation du service :</strong> Logs de connexion, données saisies dans LISA</li>
              <li><strong>Navigation :</strong> Adresse IP, type de navigateur, pages visitées (cookies techniques)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2dd4bf] mb-4">3. Finalités du traitement</h2>
            <p className="text-white/70">Vos données sont utilisées pour :</p>
            <ul className="list-disc list-inside text-white/70 mt-4 space-y-2">
              <li>Répondre à vos demandes de contact et de démonstration</li>
              <li>Gérer votre abonnement et facturation</li>
              <li>Fournir le service LISA et le support technique</li>
              <li>Améliorer nos services et votre expérience utilisateur</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2dd4bf] mb-4">4. Base légale</h2>
            <p className="text-white/70">
              Le traitement de vos données repose sur :
            </p>
            <ul className="list-disc list-inside text-white/70 mt-4 space-y-2">
              <li><strong>L'exécution du contrat</strong> pour la fourniture du service LISA</li>
              <li><strong>Votre consentement</strong> pour les communications commerciales</li>
              <li><strong>L'intérêt légitime</strong> pour l'amélioration de nos services</li>
              <li><strong>L'obligation légale</strong> pour la conservation des factures</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2dd4bf] mb-4">5. Destinataires des données</h2>
            <p className="text-white/70">Vos données peuvent être transmises à :</p>
            <ul className="list-disc list-inside text-white/70 mt-4 space-y-2">
              <li><strong>Stripe</strong> : Traitement des paiements (certifié PCI-DSS)</li>
              <li><strong>Vercel</strong> : Hébergement du site web</li>
              <li><strong>Supabase</strong> : Hébergement des données LISA (serveurs EU)</li>
              <li><strong>Nos sous-traitants</strong> : Liés par des clauses de confidentialité</li>
            </ul>
            <p className="text-white/70 mt-4">
              Nous ne vendons jamais vos données à des tiers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2dd4bf] mb-4">6. Durée de conservation</h2>
            <div className="bg-[#1a3d3d] rounded-xl p-6 space-y-3">
              <p className="text-white/70"><strong>Données de contact :</strong> 3 ans après le dernier contact</p>
              <p className="text-white/70"><strong>Données clients :</strong> Durée du contrat + 5 ans (obligations légales)</p>
              <p className="text-white/70"><strong>Données de facturation :</strong> 10 ans (obligations comptables)</p>
              <p className="text-white/70"><strong>Logs de connexion :</strong> 1 an</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2dd4bf] mb-4">7. Vos droits</h2>
            <p className="text-white/70">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside text-white/70 mt-4 space-y-2">
              <li><strong>Droit d'accès :</strong> Obtenir une copie de vos données</li>
              <li><strong>Droit de rectification :</strong> Corriger des données inexactes</li>
              <li><strong>Droit à l'effacement :</strong> Demander la suppression de vos données</li>
              <li><strong>Droit à la portabilité :</strong> Récupérer vos données dans un format standard</li>
              <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
              <li><strong>Droit à la limitation :</strong> Limiter le traitement dans certains cas</li>
            </ul>
            <p className="text-white/70 mt-4">
              Pour exercer ces droits, contactez-nous à :{' '}
              <a href="mailto:rgpd@leova-systems.fr" className="text-[#2dd4bf] hover:underline">
                rgpd@leova-systems.fr
              </a>
            </p>
            <p className="text-white/70 mt-4">
              Vous pouvez également introduire une réclamation auprès de la CNIL : 
              <a href="https://www.cnil.fr" target="_blank" className="text-[#2dd4bf] hover:underline ml-1">
                www.cnil.fr
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2dd4bf] mb-4">8. Sécurité</h2>
            <p className="text-white/70">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées 
              pour protéger vos données :
            </p>
            <ul className="list-disc list-inside text-white/70 mt-4 space-y-2">
              <li>Chiffrement des données en transit (HTTPS/TLS)</li>
              <li>Chiffrement des données au repos</li>
              <li>Authentification sécurisée (mots de passe hashés)</li>
              <li>Contrôle d'accès strict</li>
              <li>Sauvegardes automatiques quotidiennes</li>
              <li>Surveillance et alertes de sécurité</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2dd4bf] mb-4">9. Cookies</h2>
            <p className="text-white/70">
              Ce site utilise uniquement des cookies techniques essentiels au fonctionnement :
            </p>
            <ul className="list-disc list-inside text-white/70 mt-4 space-y-2">
              <li>Cookies de session (authentification)</li>
              <li>Cookies de préférences (langue, thème)</li>
            </ul>
            <p className="text-white/70 mt-4">
              Aucun cookie publicitaire ou de tracking n'est utilisé sans votre consentement explicite.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2dd4bf] mb-4">10. Modifications</h2>
            <p className="text-white/70">
              Cette politique peut être mise à jour. En cas de modification substantielle, 
              nous vous en informerons par email ou via une notification sur le site.
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


