export default function MockupSuiviActivite() {
  return (
    <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl overflow-hidden text-[11px] md:text-xs">
      <div className="bg-gradient-to-r from-purple-600 to-purple-500 px-4 py-3 text-white">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xl">📋</span>
            <span className="font-bold">Détail des Interventions - Année 2025</span>
          </div>
          <span className="text-xs bg-white/20 px-3 py-1 rounded-full">✅ 3308 interventions chargées (7332 équipements contrôlés)</span>
        </div>
      </div>
      <div className="p-5">
        {/* Search & Filters */}
        <div className="bg-slate-50 rounded-xl p-4 mb-4 border">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-slate-600">🔍</span>
            <span className="text-sm font-medium text-slate-700">Recherche globale</span>
          </div>
          <input className="w-full px-4 py-2 border rounded-lg text-sm mb-3" placeholder="Rechercher dans toutes les colonnes (code établissement, site, équipement, prestation...)" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <div>
              <label className="text-[10px] text-slate-500 flex items-center gap-1">📅 Mois</label>
              <select className="w-full px-2 py-1.5 border rounded text-xs mt-1"><option>Tous les mois</option></select>
            </div>
            <div>
              <label className="text-[10px] text-slate-500 flex items-center gap-1">📆 Année</label>
              <select className="w-full px-2 py-1.5 border rounded text-xs mt-1"><option>Toutes les années</option></select>
            </div>
            <div>
              <label className="text-[10px] text-slate-500 flex items-center gap-1">👤 Technicien</label>
              <select className="w-full px-2 py-1.5 border rounded text-xs mt-1"><option>Tous les techniciens</option></select>
            </div>
            <div>
              <label className="text-[10px] text-slate-500 flex items-center gap-1">🔧 Type</label>
              <select className="w-full px-2 py-1.5 border rounded text-xs mt-1"><option>Tous les types</option></select>
            </div>
            <div>
              <label className="text-[10px] text-slate-500 flex items-center gap-1">📊 Statut</label>
              <div className="flex items-center gap-1 mt-1">
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">✅ Terminé</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-xl">🏢</span>
            </div>
            <div>
              <div className="text-xs text-slate-500">Nombre d&apos;Établissements</div>
              <div className="text-2xl font-bold text-blue-600">960</div>
            </div>
          </div>
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 flex items-center gap-3">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
              <span className="text-xl">⏱️</span>
            </div>
            <div>
              <div className="text-xs text-slate-500">Durée Totale</div>
              <div className="text-2xl font-bold text-amber-600">5987h</div>
            </div>
          </div>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100 flex items-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-xl">🔬</span>
            </div>
            <div>
              <div className="text-xs text-slate-500">Équipements Contrôlés</div>
              <div className="text-2xl font-bold text-green-600">4796</div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="border rounded-xl overflow-hidden overflow-x-auto">
          <div className="bg-slate-100 px-4 py-2 grid grid-cols-7 text-[10px] font-semibold text-slate-600 uppercase min-w-[700px]">
            <span>N°</span>
            <span>DATE</span>
            <span>TECH.</span>
            <span>CODE</span>
            <span>CLIENT / ÉTAB.</span>
            <span>ÉQUIPEMENTS</span>
            <span>STATUT</span>
          </div>
          {[
            { id: '73274', date: '10/12/25', dur: '1.6h', tech: 'Kévin', code: '11891-2', client: 'Cabinet Dentaire du Docteur GERARD Amélie', equip: 'D-11891-2-RE-02: RE - REXA 234-Trophy-IRIX 70', presta: 'CQA - Rétro-alvéolaire', status: 'Terminé' },
            { id: '72906', date: '09/12/25', dur: '2h', tech: 'Alexandre', code: '14032-1', client: 'APHP - Hôpital TENON', equip: 'R-14032-1-AM-13: AM-BB9SS2500105HL-GE-OEC ONE', presta: 'CQC - Arceau mobile de bloc', status: 'Validé' },
            { id: '73271', date: '09/12/25', dur: '1.9h', tech: 'Kévin', code: '11890-1', client: 'Cabinet dentaire du Dr POMMIER', equip: 'D-11890-1-RE-02: RE - VAXB016-Trophy-ELITYS', presta: 'CQA - Rétro-alvéolaire', status: 'Terminé' },
            { id: '70971', date: '09/12/25', dur: '1.3h', tech: 'Arnaud', code: '13289-6', client: 'GROUPE COURLANCY - 06 Clinique Saint Christophe', equip: 'R-13289-6-AM-33: AM - 51234-Ziehm-SOLO II', presta: 'CQC - Arceau mobile de bloc', status: 'Terminé' },
          ].map((row, i) => (
            <div key={i} className="px-4 py-3 grid grid-cols-7 text-[10px] border-t items-start hover:bg-slate-50 min-w-[700px]">
              <span className="font-mono font-bold text-slate-700">{row.id}</span>
              <div>
                <div>{row.date}</div>
                <div className="text-slate-400">{row.dur}</div>
              </div>
              <span className="text-slate-700">{row.tech}</span>
              <span className="text-blue-600 font-mono">{row.code}</span>
              <span className="text-slate-600 truncate pr-2">{row.client}</span>
              <div className="pr-2">
                <div className="text-slate-500 truncate">{row.equip}</div>
                <div className="text-slate-400 mt-0.5">{row.presta}</div>
              </div>
              <span className={`px-2 py-1 rounded-full text-[9px] inline-flex items-center gap-1 ${row.status === 'Terminé' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                {row.status === 'Terminé' ? '✓' : '◐'} {row.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

