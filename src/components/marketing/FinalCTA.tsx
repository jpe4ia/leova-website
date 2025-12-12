'use client';

export default function FinalCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#0f2a2a] to-[#081c1f] text-white">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <p className="text-xs uppercase tracking-[0.3em] text-[#5eead4]">Sur-mesure</p>
        <h3 className="text-3xl font-bold">Voir LISA sur vos cas réels</h3>
        <p className="text-white/70">
          On vous montre le workflow sur 1–2 dossiers type, avec vos contraintes.
        </p>
        <a href="/demo" className="inline-flex items-center justify-center gap-2 bg-[#2dd4bf] hover:bg-[#5eead4] text-[#0f2a2a] font-semibold px-8 py-3 rounded-full transition">
          Planifier une démo
        </a>
      </div>
    </section>
  );
}

