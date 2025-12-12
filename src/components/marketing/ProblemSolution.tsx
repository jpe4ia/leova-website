'use client';

const beforeList = ['Planning éparpillé', 'Rapports Word/Excel', 'Risque d’oubli / non-conformité', 'Historique difficile'];
const afterList = ['Planning centralisé', 'Rapports structurés', 'Alertes & suivi', 'Historique accessible en 2 clics'];

export default function ProblemSolution() {
  return (
    <section className="py-16 bg-[#041e1e]">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="text-xs uppercase tracking-[0.3em] text-[#5eead4]">Avant</div>
          <div className="space-y-3">
            {beforeList.map(item => (
              <div key={item} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                <span className="text-xl text-red-400">❌</span>
                <p className="text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="text-xs uppercase tracking-[0.3em] text-[#5eead4]">Après</div>
          <div className="space-y-3">
            {afterList.map(item => (
              <div key={item} className="flex items-center gap-3 p-4 bg-[#0f2a2a] border border-[#2dd4bf]/30 rounded-xl">
                <span className="text-xl text-emerald-400">✅</span>
                <p className="text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

