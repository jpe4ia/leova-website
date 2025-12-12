'use client';

const beforeList = ['Planning éparpillé', 'Prospections décousues', 'Rapports Word/Excel', 'Risque d’oubli / non-conformité', 'Historique difficile'];
const afterList = ['Planning centralisé', 'Prospection & suivi commercial connectés', 'Rapports structurés', 'Alertes & suivi', 'Historique accessible en 2 clics'];

export default function ProblemSolution() {
  return (
    <section className="py-16 bg-[#041e1e]">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-[0.3em] text-[#5eead4]">Avant</div>
            <div className="space-y-3">
              {beforeList.map(item => (
                <div key={item} className="flex items-center gap-3 p-4 bg-[#081a1c] border border-white/5 rounded-2xl">
                  <span className="rounded-full bg-red-500/20 text-red-400 w-8 h-8 flex items-center justify-center text-lg">✕</span>
                  <p className="text-white/80 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        <div className="space-y-4">
          <div className="text-xs uppercase tracking-[0.3em] text-[#5eead4]">Après</div>
          <div className="space-y-3">
            {afterList.map(item => (
              <div key={item} className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#022627] to-[#031c21] border border-[#2dd4bf]/50 rounded-2xl">
                <span className="rounded-full bg-emerald-400/15 text-emerald-400 w-8 h-8 flex items-center justify-center text-lg">✓</span>
                <p className="text-white/80 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

