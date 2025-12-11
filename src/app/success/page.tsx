'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle, Mail, ArrowRight, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuler un délai de vérification
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f2a2a] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-[#2dd4bf] animate-spin mx-auto mb-4" />
          <p className="text-white/60">Confirmation en cours...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f2a2a] flex items-center justify-center p-4">
      <div className="max-w-lg w-full">
        {/* Success Card */}
        <div className="bg-[#1a3d3d] rounded-2xl p-8 border border-[#2dd4bf]/20 text-center">
          {/* Icon */}
          <div className="w-20 h-20 bg-[#2dd4bf]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-[#2dd4bf]" />
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-white mb-4">
            Paiement confirmé !
          </h1>

          <p className="text-white/60 mb-8 leading-relaxed">
            Merci pour votre confiance. Votre abonnement LISA est maintenant actif. 
            Vous allez recevoir un email avec vos identifiants de connexion dans les prochaines minutes.
          </p>

          {/* Info Box */}
          <div className="bg-[#0f2a2a] rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 justify-center text-[#2dd4bf] mb-3">
              <Mail className="w-5 h-5" />
              <span className="font-semibold">Vérifiez votre boîte mail</span>
            </div>
            <p className="text-white/50 text-sm">
              Un email contenant vos identifiants et les instructions de démarrage 
              vous sera envoyé à l'adresse utilisée lors du paiement.
            </p>
          </div>

          {/* Next Steps */}
          <div className="text-left space-y-3 mb-8">
            <h3 className="text-white font-semibold mb-4">Prochaines étapes :</h3>
            {[
              'Recevez vos identifiants par email',
              'Connectez-vous à votre espace LISA',
              'Configurez votre compte et invitez vos collaborateurs',
              'Importez vos données ou commencez de zéro',
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#2dd4bf]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#2dd4bf] text-sm font-bold">{i + 1}</span>
                </div>
                <span className="text-white/70 text-sm">{step}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="space-y-3">
            <Link
              href="https://dashboard.cibio.fr"
              className="flex items-center justify-center gap-2 w-full py-4 bg-[#2dd4bf] hover:bg-[#5eead4] text-[#0f2a2a] font-bold rounded-xl transition-all"
            >
              Accéder à LISA
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/"
              className="block text-white/50 hover:text-white text-sm transition-colors"
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>

        {/* Support */}
        <p className="text-center text-white/40 text-sm mt-6">
          Une question ? Contactez-nous à{' '}
          <a href="mailto:support@leova-systems.fr" className="text-[#2dd4bf] hover:underline">
            support@leova-systems.fr
          </a>
        </p>
      </div>
    </div>
  );
}


