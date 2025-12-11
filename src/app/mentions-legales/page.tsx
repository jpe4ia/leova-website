import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Mentions Légales | LEOVA Systems',
};

export default function MentionsLegales() {
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
        <h1 className="text-4xl font-bold mb-8">Mentions Légales</h1>
        
        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-[#2dd4bf] mb-4">1. Éditeur du site</h2>
            <div className="bg-[#1a3d3d] rounded-xl p-6 space-y-2">
              <p><strong>Raison sociale :</strong> LEOVA Systems</p>
              <p><strong>Forme juridique :</strong> [À compléter - SAS, SARL, etc.]</p>
              <p><strong>Capital social :</strong> [À compléter] €</p>
              <p><strong>Siège social :</strong> [Adresse à compléter]</p>
              <p><strong>SIRET :</strong> [À compléter]</p>
              <p><strong>RCS :</strong> [À compléter]</p>
              <p><strong>N° TVA Intracommunautaire :</strong> [À compléter]</p>
              <p><strong>Email :</strong> contact@leova-systems.com</p>
              <p><strong>Téléphone :</strong> [À compléter]</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2dd4bf] mb-4">2. Directeur de la publication</h2>
            <p className="text-white/70">
              [Nom du directeur de publication à compléter], en qualité de [fonction].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2dd4bf] mb-4">3. Hébergement</h2>
            <div className="bg-[#1a3d3d] rounded-xl p-6 space-y-2">
              <p><strong>Hébergeur :</strong> Vercel Inc.</p>
              <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
              <p><strong>Site web :</strong> vercel.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2dd4bf] mb-4">4. Propriété intellectuelle</h2>
            <p className="text-white/70">
              L'ensemble du contenu de ce site (textes, images, logos, graphismes, icônes, logiciels) 
              est la propriété exclusive de LEOVA Systems ou de ses partenaires. Toute reproduction, 
              représentation, modification, publication, transmission ou dénaturation du site ou de 
              son contenu, par quelque procédé que ce soit, et sur quelque support que ce soit, est 
              interdite sans autorisation préalable écrite de LEOVA Systems.
            </p>
            <p className="text-white/70 mt-4">
              LISA® est une marque déposée de LEOVA Systems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2dd4bf] mb-4">5. Données personnelles</h2>
            <p className="text-white/70">
              Les informations recueillies via le formulaire de contact sont destinées à LEOVA Systems 
              pour la gestion des demandes commerciales. Conformément au RGPD, vous disposez d'un droit 
              d'accès, de rectification et de suppression de vos données. Pour exercer ce droit, 
              contactez-nous à : <a href="mailto:rgpd@leova-systems.fr" className="text-[#2dd4bf] hover:underline">rgpd@leova-systems.fr</a>
            </p>
            <p className="text-white/70 mt-4">
              Pour plus d'informations, consultez notre{' '}
              <Link href="/confidentialite" className="text-[#2dd4bf] hover:underline">
                Politique de Confidentialité
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2dd4bf] mb-4">6. Cookies</h2>
            <p className="text-white/70">
              Ce site utilise des cookies techniques nécessaires à son fonctionnement. 
              Aucun cookie publicitaire ou de tracking n'est utilisé sans votre consentement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2dd4bf] mb-4">7. Loi applicable</h2>
            <p className="text-white/70">
              Les présentes mentions légales sont régies par la loi française. En cas de litige, 
              les tribunaux français seront seuls compétents.
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


