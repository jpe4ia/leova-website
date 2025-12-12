'use client';

export default function HeroValue() {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-b from-[#0f2a2a] via-[#0c1f2a] to-[#0f2a2a] text-white">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-6">
        <p className="uppercase tracking-[0.4em] text-sm text-[#5eead4]">LISA by LEOVA Systems</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          LISA – Le logiciel d’exploitation pour les métiers de l’inspection
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
          Centralisez clients, équipements, interventions et rapports. Traçabilité complète. Moins d’administratif. Plus de conformité.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/demo" className="bg-[#2dd4bf] hover:bg-[#5eead4] text-[#0f2a2a] font-semibold px-8 py-3 rounded-full transition">
            Demander une démo
          </a>
          <a href="/fonctionnalites" className="border border-white/30 px-6 py-3 rounded-full text-white hover:border-white transition">
            Voir les fonctionnalités
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80 pt-4">
          {['Hébergé en France', 'Traçabilité & historique', 'Pensé inspection & qualité'].map(label => (
            <span key={label} className="px-4 py-2 border border-white/20 rounded-full bg-white/5">
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

