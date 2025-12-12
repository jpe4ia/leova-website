'use client';

const points = ['Hébergement en France', 'Contrôle des accès (rôles)', 'Sauvegardes & reprise', 'Traçabilité des modifications'];

export default function SecurityBlock() {
  return (
    <section className="py-16 bg-[#020f0f] text-white">
      <div className="max-w-5xl mx-auto px-4 space-y-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#5eead4]">Confiance</p>
          <h3 className="text-2xl font-semibold">Sécurité et conformité</h3>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {points.map(point => (
            <div key={point} className="p-4 bg-white/5 border border-white/10 rounded-2xl">
              <p className="text-lg font-semibold">{point}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-white/70 italic">
          Les exigences exactes dépendent de votre organisation et de votre référentiel.
        </p>
      </div>
    </section>
  );
}

